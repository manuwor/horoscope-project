const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const { db } = require('./firebaseAdmin');
const cors = require('cors'); // Import the cors middleware
const app = express();
// Use cors middleware
app.use(cors({ origin: true })); // This will allow all origins by default

app.use(express.json());

// Middleware to check Firebase ID token
const authenticate = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const idToken = authorizationHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Check if the user authenticated with Google
    if (decodedToken.firebase.sign_in_provider !== 'google.com') {
      return res.status(403).json({ error: 'Forbidden: Only Google sign-ins are allowed' });
    }

    // Attach the user info to the request object
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying ID token:', error);
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
};

app.post('/create-article', authenticate, async (req, res) => {
  try {
    const articleData = req.body;

    // Validate the required fields except imageUrl
    const requiredFields = ['title', 'shortDescription', 'urlPath', 'content', 'keywords', 'slug', 'createdAt', 'status'];
    for (const field of requiredFields) {
      if (!articleData[field]) {
        return res.status(400).json({ error: `Field '${field}' is required.` });
      }
    }

    // Check if imageUrl exists, if not, set it to null or a default value
    if (!articleData.imageUrl) {
      articleData.imageUrl = null; // or you can set a default value if you prefer
    }

    // Store the article in Firestore
    const docRef = await db.collection('articles').add(articleData);

    return res.status(200).json({ message: 'Article created successfully.', id: docRef.id });
  } catch (error) {
    console.error('Error creating article:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});
app.get('/articles/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the article ID from the URL

    // Get a reference to the document
    const docRef = db.collection('articles').doc(id);

    // Fetch the document from Firestore
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Article not found.' });
    }

    // Get the article data
    const article = { id: doc.id, ...doc.data() };

    // Check if the article status is 'Publish'
    if (article.status !== 'Publish') {
      return res.status(403).json({ error: 'Article is not published.' });
    }

    return res.status(200).json({ article });
  } catch (error) {
    console.error('Error fetching article:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/articles', async (req, res) => {
  try {
    // Fetch all documents from the 'articles' collection where status is 'Publish'
    const articlesSnapshot = await db.collection('articles')
      .where('status', '==', 'Publish')
      .get();

    if (articlesSnapshot.empty) {
      return res.status(404).json({ error: 'No published articles found.' });
    }

    // Map through each document and retrieve its data
    const articles = articlesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({ articles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});
app.put('/edit-article/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params; // Get the article ID from the URL
    const articleData = req.body; // Get the data from the request body

    // Validate the required fields
    const requiredFields = ['title', 'shortDescription', 'urlPath', 'content', 'keywords', 'slug', 'createdAt', 'status'];
    for (const field of requiredFields) {
      if (!articleData[field]) {
        return res.status(400).json({ error: `Field '${field}' is required.` });
      }
    }
    // Check if imageUrl exists, if not, set it to null or a default value
    if (!articleData.imageUrl) {
      articleData.imageUrl = null; // or you can set a default value if you prefer
    }
    // Get a reference to the document
    const docRef = db.collection('articles').doc(id);

    // Check if the document exists
    const doc = await docRef.get();
    if (!doc.exists) {
      return res.status(404).json({ error: 'Article not found.' });
    }

    // Update the document with the new data
    await docRef.update(articleData);

    return res.status(200).json({ message: 'Article updated successfully.' });
  } catch (error) {
    console.error('Error updating article:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

// Export the express app as a cloud function
exports.api = functions.region('asia-southeast1').https.onRequest(app);

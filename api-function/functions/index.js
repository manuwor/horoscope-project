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
// PUT endpoint to increment view count by article id
app.put('/articles/:id/view', async (req, res) => {
  try {
    const articleId = req.params.id;

    // Reference to the article document
    const docRef = db.collection('articles').doc(articleId);

    // Get the current document
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Article not found.' });
    }

    // Increment the viewCount (initialize if not present)
    const currentViewCount = doc.data().viewCount || 0;
    const newViewCount = currentViewCount + 1;

    // Update the viewCount in the document
    await docRef.update({ viewCount: newViewCount });

    return res.status(200).json({ message: 'View count updated successfully.', viewCount: newViewCount });
  } catch (error) {
    console.error('Error updating view count:', error);
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

// POST: Create a new result document
app.post('/results', async (req, res) => {
  try {
    const { menu_id, result, imageUrl } = req.body;

    // Set default values if necessary
    const imageUrlToUse = imageUrl || 'https://firebasestorage.googleapis.com/v0/b/horoscope-project-d3937.appspot.com/o/images%2Fshare-cover.jpg?alt=media';
    const createdAt = admin.firestore.FieldValue.serverTimestamp();

    // Add a new document with an auto-generated ID
    const docRef = await db.collection('result').add({
      menu_id,
      result,
      imageUrl: imageUrlToUse,
      createdAt
    });

    res.status(200).json({ message: 'Result created successfully', id: docRef.id });
  } catch (error) {
    console.error('Error creating result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET: Retrieve all results
app.get('/results', async (req, res) => {
  try {
    const snapshot = await db.collection('result').get();
    const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(results);
  } catch (error) {
    console.error('Error getting results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET: Retrieve a single result by result_id
app.get('/results/:result_id', async (req, res) => {
  try {
    const { result_id } = req.params;
    const doc = await db.collection('result').doc(result_id).get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Result not found' });
    }

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error('Error getting result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT: Update a result by result_id
app.put('/results/:result_id', async (req, res) => {
  try {
    const { result_id } = req.params;
    const { menu_id, result, imageUrl, createdAt } = req.body;

    const docRef = db.collection('result').doc(result_id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Result not found' });
    }

    await docRef.update({
      menu_id,
      result,
      imageUrl,
      createdAt: createdAt ? new Date(createdAt) : admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).json({ message: 'Result updated successfully' });
  } catch (error) {
    console.error('Error updating result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE: Delete a result by result_id
app.delete('/results/:result_id', async (req, res) => {
  try {
    const { result_id } = req.params;

    const docRef = db.collection('result').doc(result_id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Result not found' });
    }

    await docRef.delete();

    res.status(200).json({ message: 'Result deleted successfully' });
  } catch (error) {
    console.error('Error deleting result:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT: Increment the view count by result_id
app.put('/results/:result_id/increment-view', async (req, res) => {
  try {
    const { result_id } = req.params;

    const docRef = db.collection('result').doc(result_id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Result not found' });
    }

    // Increment the view count
    const currentViewCount = doc.data().view || 0;
    await docRef.update({ view: currentViewCount + 1 });

    res.status(200).json({ message: 'View count incremented successfully', newViewCount: currentViewCount + 1 });
  } catch (error) {
    console.error('Error incrementing view count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET: Retrieve all menu items
app.get('/menu', async (req, res) => {
  try {
    const snapshot = await db.collection('menu').get();
    const menuItems = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Error getting menu items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the express app as a cloud function
exports.api = functions.region('asia-southeast1').https.onRequest(app);

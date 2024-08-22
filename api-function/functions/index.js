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

    // Validate the required fields
    const requiredFields = ['title', 'shortDescription', 'urlPath', 'content', 'conclusion', 'keywords', 'createdAt'];
    for (const field of requiredFields) {
      if (!articleData[field]) {
        return res.status(400).json({ error: `Field '${field}' is required.` });
      }
    }

    // Store the article in Firestore
    const docRef = await db.collection('articles').add(articleData);

    return res.status(201).json({ message: 'Article created successfully.', id: docRef.id });
  } catch (error) {
    console.error('Error creating article:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

// Export the express app as a cloud function
exports.api = functions.region('asia-southeast1').https.onRequest(app);

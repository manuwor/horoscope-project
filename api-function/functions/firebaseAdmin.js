// firebaseAdmin.js
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    // Alternatively, use the following for explicit credentials
    // credential: admin.credential.cert({
    //   projectId: process.env.FIREBASE_PROJECT_ID,
    //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    // }),
    databaseURL: "https://horoscope-project-d3937.firebaseio.com" // Replace with your database URL
  });
}

const db = admin.firestore();
module.exports = { db };
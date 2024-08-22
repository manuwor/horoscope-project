const admin = require("firebase-admin");
const functions = require("firebase-functions");
const next = require("next");
const dynamic = require("next/dynamic");
const config = dynamic(() => import('./next.config.mjs'));
admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: config,
});
const handle = app.getRequestHandler();


exports.blogMamooDi = functions.region("asia-southeast1").https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then(() => handle(request, response));
});

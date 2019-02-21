const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');

/* Express */
const app = express()
app.use(require('prerender-node').set('prerenderToken', 'NyLo86U3Oey8sbHZlSG9'));
app.get("*", (request, response) => {
    response.send("Hello from Express on Firebase!")
})
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
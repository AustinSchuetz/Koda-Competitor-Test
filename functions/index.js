const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
app.use(require('prerender-node').set('prerenderToken', 'NyLo86U3Oey8sbHZlSG9'));

/* Express */
const app = express()
app.get("*", (request, response) => {
    response.send("Hello from Express on Firebase!")
})

const app1 = functions.https.onRequest(app)

module.exports = {
    app1
}
npm install --save
npm init
npm install express --save
const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

const app = require('express')();
// const app = express();
// const nuxt = new Nuxt({
//     dev: false,
//     buildDir: 'public',
//     build: {
//         publicPath: '/public/'
//     }
// });
//
// function handleRequest(req, res) {
//     res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//     return new Promise((resolve, reject) => {
//         nuxt.render(req, res, (promise) => {
//             promise.then(resolve).catch(reject);
//         });
//     });
// }

app.use(require('prerender-node').set('prerenderToken', 'NyLo86U3Oey8sbHZlSG9'));
exports.ssrapp = functions.https.onRequest(app);
// app.use(handleRequest);
// exports.ssrapp = functions.https.onRequest(app);
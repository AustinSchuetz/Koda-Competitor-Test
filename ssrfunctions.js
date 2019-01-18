const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');

const app = express();

const config = {
    dev: false
};
const nuxt = new Nuxt(config);

app.use(nuxt.nuxtssr);

exports.nuxtssr = functions.https.onRequest(app);

response.end()
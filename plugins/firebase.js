import firebase from 'firebase'
try {
    firebase.initializeApp({
    apiKey: "AIzaSyAOyPlzLSGCKQO5obqfbG9ybmCJrSmCWfo",
    authDomain: "koda-competitor-testing.firebaseapp.com",
    databaseURL: "https://koda-competitor-testing.firebaseio.com",
    projectId: "koda-competitor-testing",
    storageBucket: "koda-competitor-testing.appspot.com",
    messagingSenderId: "495914058922"
    });
}catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

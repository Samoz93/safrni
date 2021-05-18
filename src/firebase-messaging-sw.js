console.log("hi");
try {
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCFFDVIBbxgrXGYTGwnBT00Zr7kL4FF6BU',
    authDomain: 'saferni-e66bf.firebaseapp.com',
    projectId: 'saferni-e66bf',
    storageBucket: 'saferni-e66bf.appspot.com',
    messagingSenderId: '941898512347',
    appId: '1:941898512347:web:43bdf6f9a48ba7c4fc99fe',
    measurementId: 'G-ZWQR4B6FH5',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log("evverything is done");


} catch (error) {
    console.log(error);
}

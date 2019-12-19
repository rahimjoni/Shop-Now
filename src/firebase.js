import firebase from 'firebase'
require("firebase/firestore");
import 'firebase/firebase-auth'
import 'firebase/storage'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkoIhxYB1EKa11ieCzopznKklkLWMvo8c",
    authDomain: "vue-shopping-241d5.firebaseapp.com",
    databaseURL: "https://vue-shopping-241d5.firebaseio.com",
    projectId: "vue-shopping-241d5",
    storageBucket: "vue-shopping-241d5.appspot.com",
    messagingSenderId: "1027911044801",
    appId: "1:1027911044801:web:d0f621d354c69b493c0e40",
    measurementId: "G-2M6B8LC347"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();

export {fb,db}
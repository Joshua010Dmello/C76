import *as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAZWAvgHWYdjjYTnxZli_IN7HwQ1Hh_7rM",
    authDomain: "wireless-library-105d0.firebaseapp.com",
    databaseURL: "https://wireless-library-105d0.firebaseio.com",
    projectId: "wireless-library-105d0",
    storageBucket: "wireless-library-105d0.appspot.com",
    messagingSenderId: "410559650541",
    appId: "1:410559650541:web:101a87df9a72c68e73cae4",
    measurementId: "G-QP0ELC4NQ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
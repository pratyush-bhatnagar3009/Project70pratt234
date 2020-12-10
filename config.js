import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAhdibQDO3uuc91W4yVOmRbwn0sE3jlW4k",
    authDomain: "wily-65ac3.firebaseapp.com",
    databaseURL: "https://wily-65ac3.firebaseio.com",
    projectId: "wily-65ac3",
    storageBucket: "wily-65ac3.appspot.com",
    messagingSenderId: "155935877276",
    appId: "1:155935877276:web:b27b5efb4e2b1a53c2e559"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
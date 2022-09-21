import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBKc1axUACVtbCl8BIHKqTjoh1uD3Me-Z4",
    authDomain: "n-dictionary-nav.firebaseapp.com",
    projectId: "n-dictionary-nav",
    storageBucket: "n-dictionary-nav.appspot.com",
    messagingSenderId: "952028519122",
    appId: "1:952028519122:web:563325d5786f6d0009eb0b"
  };

  //init firebase 
  firebase.initializeApp(firebaseConfig)

  //init service 
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // time stamp 
  const timestamp = firebase.firestore.Timestamp

  export{ projectFirestore, projectAuth, timestamp }
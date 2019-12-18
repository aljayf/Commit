import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
// import firebase from '../../firebase-conf'

var firebaseConfig = {
  apiKey: 'AIzaSyCM0p54bNUYUuz_uP51bzBMKjzoae0YCu8',
  authDomain: 'commit-c00ff.firebaseapp.com',
  databaseURL: 'https://commit-c00ff.firebaseio.com',
  projectId: 'commit-c00ff',
  storageBucket: 'commit-c00ff.appspot.com',
  messagingSenderId: '113464070734',
  appId: '1:113464070734:web:b6803974d7abdfef78e91f'
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export default { firebaseAuth, firebaseDb }

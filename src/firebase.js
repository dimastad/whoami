import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA8xlVqeTpJWRLXPfP4M-yA-jgZv6GrSZw",
  authDomain: "gllr-8e7bc.firebaseapp.com",
  databaseURL: "https://gllr-8e7bc.firebaseio.com",
  projectId: "gllr-8e7bc",
  storageBucket: "gllr-8e7bc.appspot.com",
  messagingSenderId: "339978758267",
  appId: "1:339978758267:web:39df0485d991205eb3dade"
};

var fireDB = firebase.initializeApp(firebaseConfig)

export default fireDB.database().ref();
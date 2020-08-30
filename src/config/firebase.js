import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDoQSS4QDBYF2Fc2SqjgjrAMWGkeLGoWgk",
  authDomain: "facebookclone-fb698.firebaseapp.com",
  databaseURL: "https://facebookclone-fb698.firebaseio.com",
  projectId: "facebookclone-fb698",
  storageBucket: "facebookclone-fb698.appspot.com",
  messagingSenderId: "369322882072",
  appId: "1:369322882072:web:d34a263b2d5ec6a831bf6d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
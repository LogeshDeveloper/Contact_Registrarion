import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAwwFUQlRyTXKyWrzgRrn6ggwK5wbl1qVM",
    authDomain: "react-crud-127dd.firebaseapp.com",
    databaseURL: "https://react-crud-127dd.firebaseio.com",
    projectId: "react-crud-127dd",
    storageBucket: "react-crud-127dd.appspot.com",
    messagingSenderId: "492568291668",
    appId: "1:492568291668:web:3f5a11f0b7eeb9b6f400c1"
};
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default fireDb.database().ref();



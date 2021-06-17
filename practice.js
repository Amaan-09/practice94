
//ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDU-ov97s5yccbTzeIRLjhkOYTitdUcO0Q",
    authDomain: "practice94-4f095.firebaseapp.com",
    databaseURL: "https://practice94-4f095-default-rtdb.firebaseio.com",
    projectId: "practice94-4f095",
    storageBucket: "practice94-4f095.appspot.com",
    messagingSenderId: "904945883115",
    appId: "1:904945883115:web:f79213e207f7503658ebae",
    measurementId: "G-WMNWQ2XJSQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  function addUser() {
   user_name=document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
       purpose : "adding user"
   } );
  }
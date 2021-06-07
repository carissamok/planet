import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Allows users to log in using the Google popup
function login() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        var credential = result.credential;
        
        // GOOGLE ACCESS TOKEN this is probably important
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.email + " " + user.password + " " + token)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        //var credential = error.credential;
        console.log("Error " + errorCode + " : " + errorMessage + " from user " + email)
      });
  }

  export default login


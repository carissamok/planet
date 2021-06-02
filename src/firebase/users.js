import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Allows users to sign up using the Google popup
function signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        firebase.firestore().collection("users").add({
            email: user.email,
            password: user.password
        })
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
    });
}

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
        //var user = result.user;
        console.log(token)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        //var credential = error.credential;
        console.log("Error " + errorCode + " : " + errorMessage + " from user " + email)
      });
  }
  
  login()

  export default signup


import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Allows users to log in using the Google popup
function googleSignin() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/calendar.events')

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;

      // GOOGLE ACCESS TOKEN this is probably important
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.email + " " + user.password + " " + token);
      // create user object, isOnboarded=false
      const users = firebase.firestore().collection("users");
      users
        .where("email", "==", user.email)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            console.log("New user!");
            users.doc(user.email).set({
              name: user.displayName,
              email: user.email,
              username: null,
              socalLink: null,
              googleCal: null,
              isOnboarded: false,
              timePref: null,
              events: null,
              invites: null,
            });
            console.log("User has been created");
          }
        })
        .catch((error) => {
          console.log(error + " that's socow");
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      //var credential = error.credential;
      console.log(
        "Error " + errorCode + " : " + errorMessage + " from user " + email
      );
    });
}

function logout() {
  firebase.auth().signOut();
}

function isNewUser() {
  const user = firebase.auth().currentUser;
  console.log(user.email);
  firebase
    .firestore()
    .collection("users")
    .doc(user.email)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("User does not exist!");
      } else {
        return doc.data().isOnboarded;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return false;
}

export { googleSignin, isNewUser, logout };
// export default logout;

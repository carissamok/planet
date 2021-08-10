import { firebase } from '@firebase/app'
import "firebase/auth";
import "firebase/firestore";

// Allows users to log in using the Google popup
function googleSignin() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/calendar.events')
  provider.addScope('https://www.googleapis.com/auth/calendar')

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;

      // GOOGLE ACCESS TOKEN this is probably important
      var token = credential.accessToken;
      // The signed-in user info.

      return new Promise(function (resolve) {
        firebase
          .auth()
          .onAuthStateChanged(function (user) {
            if (user) {
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
                    resolve();
                  }
                })
                .catch((error) => {
                  console.log(error + " that's socow");
                });
            }
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            //var credential = error.credential;
            console.log(
              "Error " +
                errorCode +
                " : " +
                errorMessage +
                " from user " +
                email
            );
          });
      });
    });
}

function logout() {
  firebase.auth().signOut().then(() => console.log(firebase.auth().currentUser))
  console.log("logged out!")
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

function getDisplayName() {
  return new Promise(function (resolve) { 
  firebase
  .auth()
  .onAuthStateChanged(function (user) {
    if (user) {
        firebase
      .firestore()
      .collection("users")
      .doc(user.email)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("User does not exist!");
        } else {
          resolve(doc.data().name);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  })})
}

function setDisplayName(displayName) {
  return new Promise(function (resolve) { 
    firebase
    .auth()
    .onAuthStateChanged(function (user) {
      if (user) {
          firebase
        .firestore()
        .collection("users")
        .doc(user.email)
        .update({
          name: displayName
      }).then(() => {
        resolve("Display name has been updated to: " + displayName)
      })
        .catch((error) => {
          console.log(error);
        });
      }
    })})
}

export { googleSignin, isNewUser, logout, getDisplayName, setDisplayName};
// export default logout;

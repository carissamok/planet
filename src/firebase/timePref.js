import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Creates timePref or updates
// timePrefs: array of dictionaries: {start: "", end: "", type: }, where type is busy, free, and halfFree?
function setTimePref(userEmail, timePrefs) {
    firebase.firestore().collection('users').doc(userEmail).update({ timePref: timePrefs })
}

function getTimePref(userEmail) {
    return new Promise(function (resolve) {
        firebase.firestore().collection('users').doc(userEmail).get().then((doc) => {
            resolve(doc.data().timePref)
        })
    })

}



//TODO do we want functions that just add or just remove a time range 


export { setTimePref, getTimePref };
// export default logout;

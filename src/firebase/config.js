import { firebase } from '@firebase/app'
import "firebase/analytics";

function config() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco",
        authDomain: "socal-b6088.firebaseapp.com",
        projectId: "socal-b6088",
        storageBucket: "socal-b6088.appspot.com",
        messagingSenderId: "659023545493",
        appId: "1:659023545493:web:fdcde762a2dcbc29c2c79c",
        measurementId: "G-7EZV3X70ZG"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default config
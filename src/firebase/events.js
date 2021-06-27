import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// creates an event for the user and returns event id
async function createEvent(userEmail, name, users, description, startTime, endTime, location) {
    const newEvent = {
        name: name,
        users: users,
        description: description,
        startTime: startTime,
        endTime: endTime,
        location: location
    }

    const res = firebase.firestore().collection('users').doc(userEmail).collection('events').add(newEvent);
    return (res.id)
}
// TODO should it not require all params as arguments?
function editEvent(userEmail, eventId, name, users, description, startTime, endTime, location) {
    firebase.firestore().collection('users').doc(userEmail).collection('events').doc(eventId).set({
        name: name,
        users: users,
        description: description,
        startTime: startTime,
        endTime: endTime,
        location: location
    })
}

// deletes event of user with given eventId
function deleteEvent(userEmail, eventId) {
    firebase.firestore().collection('users').doc(userEmail).collection('events').doc(eventId).delete();
}



export { createEvent, deleteEvent, editEvent };
// export default logout;

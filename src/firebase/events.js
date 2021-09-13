import { firebase } from '@firebase/app';
import "firebase/auth";
import "firebase/firestore";

// creates an event for the user and returns event id
function createEvent(userEmail, name, users, description, startTime, endTime, location) {
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

function upcomingEvents() {
    const userEmail = firebase.auth().currentUser.email;
    const events = firebase.firestore().collection('users').doc(userEmail).collection('events');
    var displayEvents = []

    // can use .where to check for certain times
    return new Promise(function(resolve) {
        events.get().then((responses) => {
            responses.forEach((response) => {
                const event = response.data();
                const startTime = event.startTime.toString()
                const endTime = event.endTime.toString()

                /*const users = event.users
                var usernames = []
                users.forEach((user) => usernames.push(user.username))*/
                displayEvents.push({
                    "startTime": startTime, "endTime": endTime,
                    "title": event.name, "description": event.description, "users": event.users
                })
            })
            resolve(displayEvents)
        })
    })

}



export { createEvent, deleteEvent, editEvent, upcomingEvents };
// export default logout;

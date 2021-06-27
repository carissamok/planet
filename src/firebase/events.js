import * as firebase from "firebase/app";
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

function upcomingEvents(start=Date.now(), end) {
    const user = firebase.auth().currentUser;
    const events = user.events
    var displayEvents = []

    events.forEach((event) => {
        if(event.compareTo(start) > 0 && event.compareTo(end) < 0) {
            const startTime = event.timeSlot.startTime.toString()
            const endTime = event.timeSlot.endTime.toString()

            const users = event.users
            var usernames = []
            users.forEach((user) => usernames.push(user.username))

            displayEvents.push({"startTime": startTime, "endTime": endTime, 
                "title": event.name, "description": event.description, "users": usernames})
        }
    })

    return displayEvents
}



export { createEvent, deleteEvent, editEvent, displayEvents };
// export default logout;

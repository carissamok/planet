import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createGcalEvent } from "./googleCalendar";

//startTime/endTime format: 7/22/2021, 9:00:00 PM
function getMonthYear(startTime) {
    const firstSlashPos = startTime.indexOf('/');
    const secondSlashPos = startTime.indexOf('/', firstSlashPos + 1);
    return startTime.substring(0, firstSlashPos) + '-' + startTime.substring(secondSlashPos + 1, secondSlashPos + 5);
}

// creates an event for the user and returns event id
function createEvent(userEmail, name, users, description, startTime, endTime, location) {
    const monthYear = getMonthYear(startTime);
    const newEvent = {
        name: name,
        users: users,
        description: description,
        startTime: startTime,
        endTime: endTime,
        location: location
    }

    //const res = firebase.firestore().collection('users').doc(userEmail).collection('events').doc(monthYear).collection(monthYear + "events").add(newEvent);
    const res = firebase.firestore().collection('users').doc(userEmail).collection(monthYear + "events").add(newEvent);
    return (res.id)
}
// TODO should it not require all params as arguments?
function editEvent(userEmail, eventId, name, users, description, startTime, endTime, location) {
    const monthYear = getMonthYear(startTime);
    firebase.firestore().collection('users').doc(userEmail).collection(monthYear + "events").doc(eventId).set({
        name: name,
        users: users,
        description: description,
        startTime: startTime,
        endTime: endTime,
        location: location
    })
}

// monthYear format: 3-2021

// deletes event of user with given eventId
function deleteEvent(userEmail, eventId, monthYear) {
    firebase.firestore().collection('users').doc(userEmail).collection(monthYear + "events").doc(eventId).delete();
}

function upcomingEvents(monthYear) {
    const userEmail = firebase.auth().currentUser.email;
    const events = firebase.firestore().collection('users').doc(userEmail).collection(monthYear + "events");
    var displayEvents = []

    // can use .where to check for certain times
    return new Promise(function (resolve) {
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

import { gapi } from "gapi-script";
import { firebase } from '@firebase/app';
import "firebase/auth";
import "firebase/firestore";


const credentials = {
    apiKey: 'AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco',
    // client_id: '659023545493-fhb4qff822mcpe6kuapshacltnfor981.apps.googleusercontent.com',
    client_id: '659023545493-6g11gh9c634gohbqul3uc0tv4l4uqjd1.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar.events'
}

function load() {
    gapi.client.setApiKey('AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco')
    gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(
            function () {
                console.log("GAPI client loaded for API");
                gapi.auth.authorize(
                    { client_id: credentials.client_id, scope: credentials.scope, immediate: true },
                    authResult => {
                      if (authResult && !authResult.error) {
                        gapi.client.calendar.events.list({ 
                            'calendarId': 'primary'
                         }).then(
                            function(response) {
                                importGcal(response.result.items)
                            },
                            function(err) { 
                                console.error("Execute error", err); 
                            });
                      } else {
                          console.error("Authorization error", authResult.error)
                      }
                  });
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}

function start() {
    gapi.client.init(credentials).then(() => {
        console.log('Successful initialization')
        load()
    })
}

function addGCalEvents() {
    gapi.load('client:auth2', start)
}

function importGcal(gcalEvents) {
    gcalEvents.forEach(event => {
        const userEmail = firebase.auth().currentUser.email;
        const attendees = []
        if(event.attendees) {
            event.attendees.forEach((guest) => {
                attendees.push(guest.email)
            })
        }
        if(event.start && event.end && event.start.dateTime) {
            const gcal = {
                start: new Date(event.start.dateTime).toLocaleString(),
                end: new Date(event.end.dateTime).toLocaleString(),
                name: event.summary,
                attendees: attendees
            }
            firebase.firestore().collection('users').doc(userEmail).collection('googleCal').add(gcal);
        } else if(event.start && event.end) {
            const start = new Date(event.start.date)
            const startDateTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0)
            const end = new Date(event.end.date)
            const endDateTime = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 0, 0)
            const gcal = {
                start: startDateTime.toLocaleString(),
                end: endDateTime.toLocaleString(),
                name: event.summary, 
                attendees: attendees
            }
            firebase.firestore().collection('users').doc(userEmail).collection('googleCal').add(gcal);
        }
    })
}


export default addGCalEvents;

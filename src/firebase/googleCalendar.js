import { gapi } from "gapi-script";
import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";


const credentials = {
    apiKey: 'AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco',
    // client_id: '659023545493-fhb4qff822mcpe6kuapshacltnfor981.apps.googleusercontent.com',
    client_id: '659023545493-6g11gh9c634gohbqul3uc0tv4l4uqjd1.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar.events'
}

const planetScope = 'https://www.googleapis.com/auth/calendar'

function load(scope, execute, params) {
    gapi.client.setApiKey('AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco')
    gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(
            function () {
                console.log("GAPI client loaded for API");
                gapi.auth.authorize(
                    { client_id: credentials.client_id, scope: scope, immediate: true },
                    authResult => {
                      if (authResult && !authResult.error) {
                          console.log('Authorized!')
                          execute(params)
                      } else {
                          console.error("Authorization error", authResult.error)
                      }
                  });
            },
            function (err) {
                console.error("Error loading GAPI client for API", err);
            });
}

function executeEvents(params) {
    return gapi.client.calendar.events.list({ 
        'calendarId': params.calendarId
     }).then(
        function(response) {
            importGcal(response.result.items)
        },
        function(err) { 
            console.error("Execute error", err); 
        });
}

function executeAddPlanet(params) { 
    console.log(params)
    const email = firebase.auth().currentUser.email

    gapi.client.calendar.calendarList.list({})
        .then(function(response) {
                if(!response.result.items.some(cal => cal.summary === 'PlanetCal')) {
                    var docRef = firebase.firestore().collection("users").doc(email);
                    docRef.get().then((doc) => {
                        if (doc.data().planetCalId == null) {
                            console.log("Creating PlanetCal calendar");
                            gapi.client.calendar.calendars.insert({
                                "resource": {
                                  "summary": "PlanetCal"
                                }
                              })
                                  .then(function(response) {
                                          console.log("Calendar successfully created!", response);
                                          docRef.update({
                                            planetCalId: response.result.id
                                        })
                                        .then(() => {
                                            console.log("Document successfully updated!");
                                        })
                                        .catch((error) => {
                                            console.error("Error updating document: ", error);
                                        });
                                        },
                                        function(err) { console.error("Execute error", err); });
                            
                        } else {
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                }
              },
              function(err) { console.error("Execute error", err); })
}

function executeCreateEvent(params) {
    const email = firebase.auth().currentUser.email
    var docRef = firebase.firestore().collection("users").doc(email);
    docRef.get().then((response) => {
        return gapi.client.calendar.events.insert(
            {
            "sendNotifications": true,
            "calendarId": response.data().planetCalId,
            "resource": {
                "end": {
                    "dateTime": params.endTime
                },
                "start": {
                    "dateTime": params.startTime
                },
                "summary": params.name,
                "description": params.description,
                "attendees": params.users
            }
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                    },
                    function(err) { console.error("Execute error", err); });
    })
}

function addGCalEvents(params) {
    gapi.load('client:auth2', () => gapi.client.init(credentials).then(() => {
        console.log('Successful initialization')
        load(credentials.scope, executeEvents, params)
    }))
}

function addPlanetCalendar(params) {
    gapi.load('client:auth2', () => gapi.client.init(credentials).then(() => { 
        console.log('Successful initialization')
        load(planetScope, executeAddPlanet, params)
    }))
}

function createGcalEvent(params) {
    gapi.load('client:auth2', () => gapi.client.init(credentials).then(() => { 
        console.log('Successful initialization')
        load(planetScope, executeCreateEvent, params)
    }))
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
        var gcal = {}
        var month, year
        if(event.start && event.end && event.start.dateTime) {
            gcal = {
                start: new Date(event.start.dateTime).toLocaleString(),
                end: new Date(event.end.dateTime).toLocaleString(),
                name: event.summary,
                attendees: attendees
            }
            month = new Date(event.start.dateTime).getMonth() + 1
            year = new Date(event.start.dateTime).getFullYear()
        } else if(event.start && event.end) {
            const start = new Date(event.start.date)
            const startDateTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0)
            const end = new Date(event.end.date)
            const endDateTime = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 0, 0)
            gcal = {
                start: startDateTime.toLocaleString(),
                end: endDateTime.toLocaleString(),
                name: event.summary, 
                attendees: attendees
            }
            month = startDateTime.getMonth() + 1
            year = startDateTime.getFullYear()
        }
        let docRef = (gcal.name || "event").replace(/\//g, "-")
        let collectionName = 'googleCal' + "-" + month + "-" + year
        if (docRef && month && year && gcal) {
            firebase.firestore().collection('users').doc(userEmail).collection(collectionName).doc(docRef).set(gcal);
        } 
    })
}


export { addGCalEvents, addPlanetCalendar, createGcalEvent };

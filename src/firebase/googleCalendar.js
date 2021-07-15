import { gapi } from "gapi-script";

const credentials = {
    apiKey: 'AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco',
    client_id: '659023545493-fhb4qff822mcpe6kuapshacltnfor981.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    scope: 'https://www.googleapis.com/auth/calendar.events'
}

function load() {
    gapi.client.setApiKey('AIzaSyBnmOYId6O1ZrXMdeeUDCqxn7N_irSMNco')
    gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(
            function () {
                console.log("GAPI client loaded for API");
                gapi.client.calendar.events.list({"calendarId": "primary"}).then(
                    function(response) {
                        console.log("Response successful");
                        response.result.items.forEach((item) => console.log(item.summary))
                    },
                    function(err) { 
                        console.error("Execute error", err); 
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


export default addGCalEvents;

import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";


// create list of time slots sorted by preference, 

// args:
// eventName: String
// invitees: [userEmails]
// timeOfDay: "morning", "afternoon", "night"
// eventLength: int (#hours)
// startDate: yyyy-mm-dd
// endDate: mm/dd/yyyy

// returns: (in order of preference)
// [{ start: "5/5/2020, 8:00pm", end: "5/5/2020, 9:00pm"},
// { start: "5/6/2020, 8:30pm", end: "5/6/2020, 9:30pm"}]

const preferenceCalcs = {
    "preferred": 1.0,
    "available": 0.5,
    "busy": 0
}

function getTimeMatch(eventName, invitees, timeOfDay, eventLength, startDate, endDate) {

    const startDateTime = new Date(startDate)
    const endDateTime = new Date(endDate)
    endDateTime.setDate(endDateTime.getDate() + 1)

    const numDays = endDateTime.getDate() - startDateTime.getDate();

    // [{startDate: obj, endDate: obj, preference: 0.5, everyoneAvailable: true, timeOfDay: 'night'}]
    var halfHourSlots = [];

    for (let count = 0; count < numDays * 48; count++) {
        var timeSlot = { startDate: startDateTime }

        var day = startDateTime.getDay();
        var hour = startDateTime.getHours();
        // var minute = startDateTime.getMinutes()

        if (hour < 12) {
            timeSlot.timeOfDay = 'morning';
        } else if (hour < 17) {
            timeSlot.timeOfDay = 'afternoon';
        } else {
            timeSlot.timeOfDay = 'night';
        }

        var totalPreference = 0;
        var everyoneAvailable = true;


        invitees.forEach(userEmail => {
            var userPreference = 0;
            firebase.firestore().collection('users').doc(userEmail).get().then(user => {
                const timePrefs = user.data().timePref;
                timePrefs.forEach(timePref => {
                    if (timePref.day === day) {
                        var prefStart = new Date(startDateTime);
                        prefStart.setHours(timePref.start.subString(0, 2));
                        prefStart.setMinutes(timePref.start.subString(2, 4));
                        var prefEnd = new Date(startDateTime);
                        prefEnd.setHours(timePref.end.subString(0, 2));
                        prefEnd.setMinutes(timePref.end.subString(2, 4));

                        if (startDateTime >= prefStart && startDateTime < prefEnd) {
                            userPreference = preferenceCalcs[timePref.type]
                            if (userPreference === undefined) {
                                console.log("ERROR: incompatible type in timePref");
                            }
                            // THIS IS SUPPOSED TO BE A BREAK BUT IT DOESN'T WORK IN FOR EACH LOOPS AHHH
                        }
                    }
                })
            })

            // TODO check for events and gcalEvents
            totalPreference += userPreference
            if (userPreference === 0) {
                everyoneAvailable = false;
            }
        })

        var avgPreference = totalPreference / invitees.count;
        timeSlot.preference = avgPreference;

        startDateTime.setMinutes(startDateTime.getMinutes() + 30);
        timeSlot.endDate = startDateTime;
        halfHourSlots.push(timeSlot);

    }

    // [{startDate: obj, endDate: obj, preferenceScore: 1.5, timeOfDay: ['morning', 'afternoon']}]
    var eventLengthSlots = []
    const numSlots = eventLength * 2

    // keeping track of the last possible event that it can be
    var pointer = 0
    while (pointer < halfHourSlots.length - numSlots) {
        // setting initials for a certain event slot
        var totalPreference2 = 0

        var possibleEvent = { startDate: halfHourSlots[pointer], endDate: halfHourSlots[pointer + numSlots] }

        var timeOfDayList = []

        // for each half hour time slot within an event, calculate total + check if everyones available
        for (let count = 0; count < numSlots; count++) { //TODO: someone check my logic on the boundary
            var currentSlot = halfHourSlots[pointer + count]
            if (!currentSlot.everyoneAvailable) {
                everyoneAvailable = false
            }

            if (!timeOfDayList.includes(currentSlot.timeOfDay)) {
                timeOfDayList.push(currentSlot.timeOfDay)
            }
            totalPreference2 += halfHourSlots[pointer + count].preference
        }

        possibleEvent.timeOfDay = timeOfDayList

        // averaging all the half hour slots 
        var average = totalPreference2 / numSlots
        if (everyoneAvailable) {
            average += 1
        }

        possibleEvent.preferenceScore = average
        pointer += numSlots
    }

    // sorting in descending order based on a certain event slot's preferenceScore
    return eventLengthSlots.sort((a, b) => b.preferenceScore - a.preferenceScore)
}



//for top 3: calls getTimeMatch and takes the top three from the time of day that is specified 

// final average, + 1 if all everyoneAvailable is true

//process: start by going through all the possible half hour slots in the time range, and calculate the time preference based on 
//preferred (.75 or .5), available (1), and planet/gcal/busy events are straight up 0. once we have the list of all the possible half hour slots,
//we go through and find the x-hour slots that have the best overall average, making note to add 1 if everyone can make it. then we 
//take the top three of that list (that also falls under the right time of day) and give that to frontend
// and for show all we return the original list of half hour slots so that frontend can color code accordingly (OR if we don't do
//calendar view we can give them the list of x-hour slots)

// splitting up tasks:
// 1) taking in list of emails and getting a list of all the half hour slots 
// 2) taking in list of half hour slots and assigning preferences 
// 3) taking in list of halfhour with preferences and the time range for an event and sending back a sorted list of x-hour slots 

// busy = 0
// available = 0.75
// preferred = 1.0
// morning / afternoon / night

// 0 - 0.5 red
// 0.5 - 1.0 orange
// 1.0 - 1.5 yellow
// 1.5 - 2.0 green

export default getTimeMatch
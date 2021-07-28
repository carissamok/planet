import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// create list of time slots sorted by preference, 

// args:
// eventName: String

function getTimeMatch(eventName, invitees, timeOfDay, timeLength, dateRange) {
}



//for top 3: calls getTimeMatch and takes the top three from the time of day that is specified 

length: 1hr

[{ start: "5/5/2020, 8:00pm", end: "5/5/2020, 9:00pm", preference: 0.5, timeOfDay: "night", everyoneAvailable: true },
    { start: "5/6/2020, 8:30pm", end: "5/6/2020, 9:30pm", preference: 0.5, timeOfDay: "night", everyoneAvailable: false }
]

00 - 0: 30
0: 30 - 1: 00

final average, + 1 if all everyoneAvailable is true

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

busy = 0
available = 0.75
preferred = 1.0
morning / afternoon / night

1 - 9
0.87

1: 30 - 9: 30
1.40

1 - 1: 30 .87
1: 30 - 9 1.2
9 - 9: 30 1.6

0 - 0.5 red
0.5 - 1.0 orange
1.0 - 1.5 yellow
1.5 - 2.0 green

3 - 4
.5 3 - 3: 30
1 3: 30 - 4
 = 0.75

1 3 - 4

0.875


3 people = 1.5

2 people 1
1 person 0
    = 0.66
1 person 0.75
1 person 1
1 person 0
    = 0.5
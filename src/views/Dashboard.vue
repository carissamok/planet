<template>
  <div>
    <Navbar />
    <SubNavbar />
    <Calendar />
  </div>
</template>

<script>
import SubNavbar from "../components/SubNavbar.vue";
import Navbar from "../components/Navbar.vue";
import { addGCalEvents } from "../firebase/googleCalendar.js";
//import CalendarMonth from '../components/calendar/CalendarMonth.vue'
// import { createEvent } from "../firebase/events.js";
import { firebase } from "@firebase/app";
// import getTimeMatch from "../firebase/timeMatch.js"
import Calendar from '../components/weekly-calendar/HomeCalendar.vue'
// import { upcomingEvents } from "../firebase/events.js";
import "firebase/auth";
import "firebase/firestore";

export default {
  components: {
    Navbar,
    SubNavbar,
    Calendar,
  },
  name: "Dashboard",
  beforeMount() {
    firebase.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        addGCalEvents({ calendarId: "primary" });
        // createEvent("julieewang822@gmail.com", "test", ["julie.wang@toasttab.com"], "ello", "07/01/2021, 08:00 AM", "07/01/2021, 09:00 PM", "new jerz")
        // getTimeMatch("boba !!!!!!!!!!! test", ["joncheng@seas.upenn.edu"], ["morning", "afternoon"], 2, Date.now(), Date.now().setDate(13)) 
      }
    });
  },
};
</script>

<style scoped>
Navbar {
  background-color: #e3e7fe;
  position: -webkit-sticky;
  position: sticky;
}

div {
  margin: 0px;
}
</style>

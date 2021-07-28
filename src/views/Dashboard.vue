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
import Calendar from "../components/weekly-calendar/Calendar.vue";
import { upcomingEvents } from "../firebase/events.js";
import { getDisplayName } from "../firebase/users.js";
import { firebase } from "@firebase/app";

export default {
  components: {
    Navbar,
    SubNavbar,
    Calendar,
  },
  name: "Dashboard",
  beforeMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        addGCalEvents({ calendarId: "primary" });
        upcomingEvents().then((events) => console.log(events[0]));
        getDisplayName();
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

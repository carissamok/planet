<template>
  <div>
    <Navbar />
    <SubNavbar />
    <Calendar-Month />
  </div>
</template>

<script>
import SubNavbar from "../components/SubNavbar.vue";
import Navbar from "../components/Navbar.vue";
import CalendarMonth from "../components/calendar/CalendarMonth.vue";
<<<<<<< HEAD
import { createEvent } from "../firebase/events.js";
=======
import addGCalEvents from "../firebase/googleCalendar.js";
import { upcomingEvents } from "../firebase/events.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
>>>>>>> master

export default {
  components: {
    Navbar,
    SubNavbar,
    CalendarMonth,
  },
  name: "Dashboard",
  beforeMount() {
<<<<<<< HEAD
    // addGCalEvents();
    // addPlanetCalendar();
    // createGcalEvent()

    createEvent("julieewang822@gmail.com", "test", [{"email": "julie.wang@toasttab.com"}], "description", "2021-07-28T8:00:00-04:00", "2021-07-28T9:00:00-04:00", "location")
=======
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        console.log(user);
        addGCalEvents();
        upcomingEvents().then((events) => console.log(events[0]));
      }
    });
>>>>>>> master
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
        margin: 0px
    }


</style>

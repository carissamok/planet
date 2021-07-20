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
import addGCalEvents from "../firebase/googleCalendar.js";
import { upcomingEvents } from "../firebase/events.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  components: {
    Navbar,
    SubNavbar,
    CalendarMonth,
  },
  name: "Dashboard",
  beforeMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        console.log(user);
        addGCalEvents();
        upcomingEvents().then((events) => console.log(events[0]));
      }
    });
  },
};
</script>

<style scoped>
div {
  margin: 0px;
}
/* h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    } */
</style>

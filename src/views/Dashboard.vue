<template>
    <div>
        <Navbar />
        <SubNavbar />
        <Calendar />
    </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue'
import Calendar from '../components/weekly-calendar/HomeCalendar.vue'
import addGCalEvents from '../firebase/googleCalendar.js';
import { upcomingEvents } from "../firebase/events.js";
import * as firebase from "firebase/app";
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
        console.log(user);
        addGCalEvents();
        upcomingEvents().then((events) => console.log(events[0]));
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
        margin: 0px
    }


</style>

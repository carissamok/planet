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
import { createEvent } from "../firebase/events.js";

export default {
  components: {
    Navbar,
    SubNavbar,
    CalendarMonth,
  },
  name: "Dashboard",
  beforeMount() {
    // addGCalEvents();
    // addPlanetCalendar();
    // createGcalEvent()

    createEvent("julieewang822@gmail.com", "test", [{"email": "julie.wang@toasttab.com"}], "description", "2021-07-28T8:00:00-04:00", "2021-07-28T9:00:00-04:00", "location")
  },
};
</script>

<style scoped>

    div {
        margin: 0px
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
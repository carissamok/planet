<template>
    <div >
        <Navbar />
        <SubNavbar />
        <Calendar-Month />
    </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue'
import CalendarMonth from '../components/calendar/CalendarMonth.vue'
import addGCalEvents from '../firebase/googleCalendar.js'

export default {
    components: { 
        Navbar,
        SubNavbar,
        CalendarMonth
    },
    name: 'Dashboard',
    beforeMount() {
        addGCalEvents()
    }
}
</script>

<style scoped>
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
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
//import CalendarMonth from '../components/calendar/CalendarMonth.vue'
import Calendar from '../components/weekly-calendar/Calendar.vue'
import addGCalEvents from '../firebase/googleCalendar.js'

export default {
    components: { 
        Navbar,
        SubNavbar,
        Calendar
    },
    name: 'Dashboard',
    beforeMount() {
        addGCalEvents()
    }
}
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
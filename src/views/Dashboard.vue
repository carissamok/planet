<template>
    <div>
        <Navbar />
        <SubNavbar />
        <Calendar-Month />
    </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue'
import CalendarMonth from '../components/calendar/CalendarMonth.vue'

    export default {
        components: { 
            Navbar,
            SubNavbar,
            CalendarMonth
        },
        name: 'Dashboard'
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
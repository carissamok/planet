<template>
    <div >
        <Navbar />
        <SubNavbar />
        <GenerateTime />
    </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue'
import GenerateTime from '../components/when2meet/GenerateTime.vue'

    export default {
        components: { 
            Navbar,
            SubNavbar,
            GenerateTime
        },
        name: 'When2Meet'
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

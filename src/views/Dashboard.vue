<template>
    <div >
        <Navbar />
        <TimePrefHeader />
    </div>
</template>

<script>
import TimePrefHeader from '../components/TimePrefHeader.vue'
import Navbar from '../components/Navbar.vue'

    export default {
        components: { 
            Navbar,
            TimePrefHeader 
        },
        name: 'Dashboard'
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
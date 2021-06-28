<template>
  <div class="settings">
    <Navbar />
    <h1>This is the settings page</h1>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

    export default {
        components: { 
            Navbar
        },
        name: 'Dashboard'
    }
</script>
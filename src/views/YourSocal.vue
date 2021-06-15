<template>
  <div class="yoursocal">
    
    <Navbar />
    <SubNavbar />
    <h1>This is your socal page</h1>

  </div>
</template>

<script>
import SubNavbar from '../components/SubNavbar.vue'
import Navbar from '../components/Navbar.vue' 

export default {
  name: "When2Meet",
  components: {
    Navbar, 
    SubNavbar,
  },
};
</script>
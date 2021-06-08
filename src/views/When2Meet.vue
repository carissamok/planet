<template>
  <div class="w2m">

    <Navbar />
    <SubNavbar />
    <h1>This is the when 2 meet page</h1>

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
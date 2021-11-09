// page for guest view received orbit
<template>
  <div class="settings">
    <Navbar />
    <div class="main-content">
      <GuestDraggingCal />
       <div class="other-settings">
           <GuestOrbitDetails />
       </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import GuestDraggingCal from '../components/received-orbit-guest/GuestDraggingCal.vue'
import GuestOrbitDetails from '../components/received-orbit-guest/GuestOrbitDetails.vue'

    export default {
        components: { 
            Navbar, 
            GuestDraggingCal, 
            GuestOrbitDetails
        },
        name: 'ReceivedOrbitGuest', 
    }
</script>

<style scoped>

  .main-content {
    display: flex;
    justify-content: space-around;
  }

  span {
    color: #ffff
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .other-settings {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 50px;
    /* background-color: #e3e7fe; */
    background-color: #bcc5fc;
  }

  /* .checkboxes label {
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
  }
  .checkboxes input {
    vertical-align: middle;
  }
  .checkboxes label span {
    vertical-align: middle;
  } */


</style>
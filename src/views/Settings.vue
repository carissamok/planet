<template>
  <div class="settings">
    <Navbar />
    <div class="main-content">
      <TimePrefSettings />
       <!-- <input type="checkbox"> -->

      <div class="other-settings">
        <div class="checkboxes" align="left">
          <span> Import Google Calendar events from: </span>
          <label><input type="checkbox"> <span>Work</span></label> 
          <label><input type="checkbox"> <span>Holidays</span></label>
          <label><input type="checkbox"> <span>Social</span></label> 
        </div>
        <button v-on:click="deleteAcc">Delete your account</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TimePrefSettings from '../components/TimePrefSettings.vue'

    export default {
        components: { 
            Navbar, 
            TimePrefSettings
        },
        name: 'Settings', 
        methods: {
          deleteAcc() {
              console.log("account deleted")
          }
        }
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
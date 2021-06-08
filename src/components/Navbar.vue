<!-- overall navbar at the top of every page-->
<template>
  <div id="nav">
    <header>
      <!-- <router-link to="/">Login</router-link> | -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/timepreferences">Time Preferences</router-link> |
      <router-link to="/settings">Settings</router-link>
    </header>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

  * {
    box-sizing: border-box;
  }

  header {
    background-color: #fff;
    /* margin-top: 0px; */
  }
</style>
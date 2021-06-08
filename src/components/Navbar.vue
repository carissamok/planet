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

  router-link {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #ffffff;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Courier New", monospace, sans-serif;
        font-weight: 400;
        font-size: 25px;
        color: #ffffff;
        background-color: #f17f99;
        text-align: center;
        transition: all 0.2s;
    }

    router-link:hover {
        color: #f17f99;
        background-color: #fff;
    }


</style>
<!-- overall navbar at the top of every page-->
<template>
  <div>
    <!-- <header style="display: inline-block; text-align: left; width: 100%;"> -->
      <img alt="Calendar logo" src="../assets/calendar.png" style="width:3em; height:3em;" />
    <!-- </header> -->
    <div id="nav" style="display: inline-block; text-align: right; width: 100%">
      <nav id="header">
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/timepreferences">Time Preferences</router-link> |
        <router-link to="/settings">Settings</router-link>
      </nav>
    </div>
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
  margin: 0px;
}

div {
  margin: 0px;
  padding: 0px;
}

nav {
  /* background-color: #fff; */
  margin: 0px;
}

body {
  margin: 0px;
}

.img {
  display: inline-block; 
  text-align: left; 
  width: 100%;
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
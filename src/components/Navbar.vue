<!-- overall navbar at the top of every page-->
<template>
  <div id="header">
      <img alt="Calendar logo" src="../assets/calendar.png" />
    <div id="nav"> 
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

img {
  width: 4em; 
  height: 4em;
} 

#header {
  display: flex; 
  justify-content: space-between;
  align-items: center;
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
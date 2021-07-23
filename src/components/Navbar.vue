<!-- overall navbar at the top of every page-->
<template>
  <div id="header">
      <img alt="Calendar logo" src="../assets/calendar.png" />
    <nav> 
        <router-link to="/home" tag="button">Home</router-link>
        <span />
        <router-link to="/settings" tag="button">Settings</router-link>
    </nav>
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
  background-color: #fff;
  box-sizing: border-box;
  /* margin: 0px; */
}

div {
  margin: 0px;
  padding: 0px 20px 0px 0px;
}

nav {
  /* background-color: #fff; */
  display: inline-block; 
  /* justify-content: space-between; */
  margin: 0px;
  padding: 0px 10px 0px 10px;
}

/* halp */
nav button {
  padding: 100px;
}

/* nav router-link {
  margin-right: 10px;
}

nav router-link:lastchild {
  margin-right: 0px;
} */

body {
  margin: 0px;
}

img {
  width: 3.5em; 
  height: 3.5em;
} 

#header {
  display: flex; 
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex; 
  justify-content: space-between;
}

/* this is just a temp solution!!!!!!! */
span {
  margin: 10px;
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
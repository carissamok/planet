<!-- overall navbar at the top of every page-->
<template>
  <div id="header">
      <img alt="Planet logo" src="../assets/planetlogo.png" />
    <nav> 
        <router-link to="/home" tag="button">Home</router-link>
        <span />
        <router-link to="/settings" tag="button">Settings</router-link>
        <span />
        <div class="dropdown">
          <button class="dropbtn">Name</button>
          <div class="dropdown-content">
            <!-- @backend pls figure how to log someone out here thank youuu -->
            <router-link to="/" v-on:click="logout" tag="button">Log out</router-link>
          </div>
        </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
import { logout } from "../../src/firebase/users.js";
export default {
  name: "Navbar",
  methods: {
    logout() {
      logout()
    }
  }
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
  width: auto; 
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

/*DROPDOWN STYLE */

/* Dropdown Button */
.dropbtn {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  /* margin: 0 0.3em 0.3em 0; */
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  /* font-family: "Courier New", monospace, sans-serif; */
  /* font-weight: 400; */
  font-size: 16px;
  color: #ffffff;
  background-color: #f17f88;
  text-align: center;
  transition: all 0.2s;
  /* width: 100%; */
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #edadb2}

</style>
<!-- overall navbar at the top of the login page-->
<template>
  <div id="header">
      <!-- <img alt="Planet logo" src="../assets/planetlogo.png" /> -->
    <nav> 
        <div id="helperlinks">
          <router-link to="/aboutus" tag="button">About Us</router-link>
          <span />
          <router-link to="/faq" tag="button">FAQs</router-link>
        </div>
        <!-- wrap this in a button -->
        <button class="loginheader" v-on:click="login">Log in</button>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "LoginNavbar",
};
</script>

<style scoped>

* {
  background-color: #fff;
  box-sizing: border-box;
  /* margin: 0px; */
}

div#header {
  margin: 0px;
  /* padding: 0px 20px 0px 0px; */
}

nav {
  /* background-color: #fff; */
  display: inline-block; 
  /* justify-content: stretch; */
  margin: 0px;
  padding: 0px 10px 0px 10px;
}

/* halp */
button.loginheader {
  font-size: 15px;
  width: 50%;
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
  /* width: a; 
  height: 3.5em; */
  max-width: 10%;
  max-height: auto;
} 

#header {
  display: flex; 
  justify-content: space-between;
  align-items: center;
}

/* ul {
  display: flex; 
  justify-content: stretch;
} */

/* this is just a temp solution!!!!!!! */
span {
  margin: 5px;
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
<template>
  <div class="login">
    <!-- <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet">
    </head> -->
    <LoginNavbar />
    <header>
      <img alt="Planet logo" src="../assets/planetlogo.png" />
      <section>
        <h3 class="marketing intro">
            Finding friend availability made easy. <br />For all those hangouts, Planet helps you to <em>plan it</em>!alsdkfjaldkfjlakd
        </h3>
      </section>
    </header>
    <section>
      <button class="login" v-on:click="login">Log in</button>
    </section>
    <section>
      <button class="login" v-on:click="google">Sign up with Google</button>
    </section>
    <section>
      <router-link to="/home">Navigate to Home</router-link>
    </section>
    <!-- <section>
      <router-link to="/timematch">Navigate to When2Meet</router-link>
    </section> -->
    <section class="howto">
        <img alt="your events screenshot" src="../assets/urevents.png" /> 
        <br />
        <img alt="time match screenshot" src="../assets/timematch.png" />
    </section>
    <section>
      <button class="login" v-on:click="google">Sign up with Google</button>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import { googleSignin } from "../../src/firebase/users.js";
import LoginNavbar from '../components/LoginNavbar.vue';
import "../../src/router/index.js";
import { firebase } from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  beforeMount() {
    var router = this.$router;
    firebase.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        console.log(user);
        router.push({ path: "/home" });
      }
    });
  },
  name: "Login",
  components: { 
    LoginNavbar,
  },
  methods: {
    login() {
      var router = this.$router;
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("ur socow");
          console.log(user);
        } else {
          googleSignin().then(() => router.push({ path: "/home" }));
        }
      });
    },
    google() {
      googleSignin();
      console.log("google was pressed");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: 'Poppins', sans-serif;
  background-color: #666;
  /* font-size: 30px; */
}

/* Style the header */
header {
  background-color: #666;
  text-align: center;
  font-size: 35px;
  color: white;
}

section {
  padding: 10px;
}

.howto img{
  max-width: 60%;
  height: auto;
}

h3 {
  display: inline-block;
  margin-top: 0;
  padding: 0px 0px 40px 0px;
  /* font-family: "Courier New", monospace, sans-serif; */
  font-weight: 550;
  font-size: 30px;
  color: #fff;
  text-align: center;
}

.login button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  /* margin: 0 0.3em 0.3em 0; */
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  /* font-family: "Courier New", monospace, sans-serif; */
  font-weight: 400;
  font-size: 25px;
  color: #ffffff;
  background-color: #f17f99;
  text-align: center;
  transition: all 0.2s;
  width: 28%;
}

.login button:hover {
  color: #f17f99;
  background-color: #fff;
}
</style>

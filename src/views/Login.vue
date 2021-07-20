<template>
  <div class="login">
    <header>
      <img alt="Calendar logo" src="../assets/calendar.png" />
    </header>
    <section>
      <h3>Finding friend availability made easy</h3>
    </section>
    <section>
      <button class="login" v-on:click="login">Log in</button>
    </section>
    <section>
      <button class="login" v-on:click="google">Sign up with Google</button>
    </section>
    <section>
      <router-link to="/dashboard">Navigate to Dashboard</router-link>
    </section>
    <section>
      <router-link to="/when2meet">Navigate to When2Meet</router-link>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import { googleSignin } from "../../src/firebase/users.js";
import "../../src/router/index.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// import { defineComponent } from '@vue/composition-api'
export default {
  beforeMount() {
    var router = this.$router;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("logged in");
        console.log(user);
        router.push({ path: "/dashboard" });
      }
    });
  },
  name: "Login",
  methods: {
    login() {
      var router = this.$router;
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log("ur socow");
          console.log(user);
        } else {
          googleSignin().then(() => router.push({ path: "/dashboard" }));
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
  font-family: Arial, Helvetica, sans-serif;
  background-color: #666;
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

h3 {
  display: inline-block;
  margin-top: 0;
  padding: 0px 0px 40px 0px;
  font-family: "Courier New", monospace, sans-serif;
  font-weight: 550;
  font-size: 35px;
  color: #ffffff;
  text-align: center;
}

.login button {
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

.login button:hover {
  color: #f17f99;
  background-color: #fff;
}
</style>

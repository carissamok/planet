<template>
  <div class="login">
    <header>
      <img alt="Calendar logo" src="../assets/calendar.png" />
    </header>
    <section>
      <button v-on:click="login">Log in</button>
    </section>
    <section>
      <button v-on:click="google">Sign up with Google</button>
    </section>

    <footer></footer>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  name: "Login",
  methods: {
    login() {
      console.log("login was pressed");
    },
    google() {
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
  padding: 5px;
  text-align: center;
  font-size: 35px;
  color: white;
}

section {
  padding: 10px;
}

button {
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  background-color: #f17f99;
  text-align: center;
  transition: all 0.2s;
}

button:hover {
  color: #f17f99;
  background-color: #fff;
}
</style>

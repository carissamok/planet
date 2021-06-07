<template>
  <Login/>
</template>

<script>
import Login from './components/Login.vue'

// an addition from backend!
import config from './firebase/config.js'
//import test from "./firebase/test.js"

console.log("got here first")
config()

import login from './firebase/users.js'

//console.log("got here")
login()
//test()

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

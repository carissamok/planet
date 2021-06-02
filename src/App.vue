<template>
  <Login/>
</template>

<script>
import Login from './components/Login.vue'

// an addition from backend!
import config from "./firebase/config.js"
import signup from "./firebase/users.js"

config()
signup()

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

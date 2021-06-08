<!--holds the internal page switch buttons within the time pref button-->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarColor03">
            <button class="nav-item" v-on:click="your_events">Your events</button>
            <button class="nav-item" v-on:click="your_socal">Your Socal</button>
            <button class="nav-item" v-on:click="w2m">When2Meet</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    your_events() {
      console.log("your events was pressed");
    },
    your_socal() {
      console.log("your socal was pressed");
    },
    w2m() {
        console.log("w2m was pressed")
    }
  },
};
</script>

<style scoped>
</style>

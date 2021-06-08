<!--holds the internal page switch buttons within the time pref button-->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
            <router-link to="/dashboard" tag="button">Your events</router-link> | <!-- dashboard -->
            <router-link to="/yoursocal" tag="button">Your Socal</router-link> |
            <router-link to="/when2meet" tag="button">When2Meet</router-link> |
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SubNavbar",
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

<!--holds the internal page switch buttons within the time pref button-->
<template>
  <div id="subnav">
    <nav >
            <router-link to="/dashboard" tag="button">Your events</router-link> | <!-- dashboard -->
            <router-link to="/yoursocal" tag="button">Your Socal</router-link> |
            <router-link to="/when2meet" tag="button">When2Meet</router-link> |
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

  * {
    box-sizing: border-box;
    margin: 0px;
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

</style>

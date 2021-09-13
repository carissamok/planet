<!-- overall footer at the bottom of the login page-->
<template>
  <div id="footer">
        <i>made by Penn x Northeastern students</i>
        <span />
        <router-link to="/privacy" tag="button">Privacy Policy</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "LoginFooter",
};
</script>

<style scoped>

* {
  box-sizing: border-box;
  /* margin: 0px; */
}

div {
  margin: 0px;
  /* padding: 0px 20px 0px 0px; */
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
  max-width: 10%;
  max-height: auto;
} 

#footer {
  display: flex; 
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
}

/* this is just a temp solution!!!!!!! */
span {
  margin: 10px;
}

/* router-link {
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
} */

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
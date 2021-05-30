import { createApp } from "vue";
import App from "./App.vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

createApp(App).mount("#app");

function test() {
  return firebase
    .firestore()
    .collection("test")
    .add({
      text: "hello this is me testing out the database",
    })
    .catch(function(error) {
      console.error("Error writing test message to database", error);
    });
}
test();

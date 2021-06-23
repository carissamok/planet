import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

async function test() {
    try {
      return firebase
        .firestore()
        .collection("test")
        .add({
          text: "hello!",
        });
    } catch (error) {
      console.error("Error writing test message to database", error);
    }
  }

export default test
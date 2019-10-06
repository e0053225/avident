import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyARYxV6G54v5_G6mU4TU04RHmIsBf9l7L4",
  authDomain: "avident-ee9ff.firebaseapp.com",
  databaseURL: "https://avident-ee9ff.firebaseio.com",
  messagingSenderId: "175819480004",
  projectId: "avident-ee9ff",
  storageBucket: ""
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();

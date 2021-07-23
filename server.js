const express = require('express');
const app = express();
const api = require("./routes/api-routes")
const html = require("./routes/html-routes")

const PORT = process.env.PORT || 4567;

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "project-3-930bb.firebaseapp.com",
  projectId: "project-3-930bb",
  storageBucket: "project-3-930bb.appspot.com",
  messagingSenderId: "63137074",
  appId: "1:63137074:web:ec542e7067cbc1cfbaa32b",
  measurementId: "G-XW8KQ6T9V2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//configures express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//adds the routes to the express app
app.use(api);
app.use(html);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

import "./index.css";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsIsLqLOItfZp0nVRPfgry7df12-nwZPA",
  authDomain: "tellme-c389b.firebaseapp.com",
  databaseURL: "https://tellme-c389b.firebaseio.com",
  projectId: "tellme-c389b",
  storageBucket: "tellme-c389b.appspot.com",
  messagingSenderId: "528300095691",
  appId: "1:528300095691:web:a524b58b1342cfcee8434e",
  measurementId: "G-HM83TXTVLV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

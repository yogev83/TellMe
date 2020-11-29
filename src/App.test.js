import { render, screen } from "@testing-library/react";
import App from "./App";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

test("renders learn react link", () => {
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
  firebase.initializeApp(firebaseConfig);
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

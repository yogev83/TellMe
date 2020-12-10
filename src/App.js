import React from "react";
import { Header } from "./header/header";
import { Home } from "./pages/home/home";
import { AuthPage } from "./pages/auth/authPage";
//import userEvent from "@testing-library/user-event";
import { MyAccount } from "./pages/myAccount/myAccountPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import "./App.css";
import { LecturePage } from "./pages/lecture/lecturePage";

export default function App() {
  const db = firebase.firestore();
  const [filter, setFilter] = React.useState([]);
  const [userId, setUserId] = React.useState(null);
  // const onFilterChange = React.useCallback(
  //   (e) => {
  //     const values = e.target.value.split(",");
  //     setFilter(values.map((s) => s.trim()));
  //   },
  //   [setFilter]
  // );

  React.useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const userData = await db
          .collection("users")
          .doc(userId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
            } else {
              db.collection("users").doc(userId).set({
                speaker: false,
              });
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      };
      fetchUserData();
    } else {
      firebase
        .auth()
        .onAuthStateChanged((user) => setUserId(user ? user.uid : null));
    }
  }, [userId, db]);

  return (
    <>
      <BrowserRouter>
        <Header
          onFilterChange={() => {}}
          openAuth={() => {}}
          openMyAccount={() => {}}
        />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/myAccount">
            <MyAccount></MyAccount>
          </Route>
          <Route path="/register">
            <AuthPage></AuthPage>;
          </Route>
          <Route path="/lecture">
            <LecturePage></LecturePage>;
          </Route>
          <Route path="/">
            <Home filter={filter} />;
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

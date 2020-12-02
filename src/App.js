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

  const openLecture = (id) => {
    //setQueryParams({ page: "lecture", lecture: id });
  };

  React.useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const userData = await db
          .collection("users")
          .doc(userId)
          .get()
          .then((data) => {
            console.warn("userdata", data);
            return data;
          });
        console.warn(userData);
      };
      fetchUserData();
    } else {
      firebase
        .auth()
        .onAuthStateChanged((user) =>
          setUserId(user ? user.getIdToken() : null)
        );
    }
  }, [userId, db]);

  return (
    <>
      <Header
        isSignedIn={!!userId}
        onFilterChange={() => {}}
        openRegister={() => {}}
        openMyAccount={() => {}}
      />

      <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <AuthPage></AuthPage>;
          </Route>
          <Route path="/">
            <Home filter={filter} openLecture={openLecture} />;
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

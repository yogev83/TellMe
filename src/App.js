import React from "react";
import { Header } from "./header/header";
import { Home } from "./pages/home/home";
import { AuthPage } from "./pages/auth/authPage";
//import userEvent from "@testing-library/user-event";
import { MyAccount } from "./pages/myAccount/myAccountPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";

import "./App.css";

export default function App({ db }) {
  const [filter, setFilter] = React.useState([]);
  const [isSignedIn, setIsSignedIn] = React.useState(false);
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

  firebase.auth().onAuthStateChanged((user) => setIsSignedIn(!!user));

  return (
    <>
      <Header
        isSignedIn={isSignedIn}
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

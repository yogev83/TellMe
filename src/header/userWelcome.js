import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

export function UserWelcome() {
  const history = useHistory();
  return (
    <>
      {" "}
      {firebase.auth().currentUser ? (
        <div className="register">
          <div
            onClick={() => {
              history.push("/myAccount");
            }}
          >
            <p>{firebase.auth().currentUser.displayName}</p>
          </div>
        </div>
      ) : (
        <div
          className="register"
          onClick={() => {
            history.push("/register");
          }}
        >
          Register
        </div>
      )}
    </>
  );
}

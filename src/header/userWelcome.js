import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

export function UserWelcome({ isSignedIn, openRegister, openMyAccount }) {
  return (
    <>
      {" "}
      {isSignedIn ? (
        <div className="register">
          <div onClick={openMyAccount}>
            <p>{firebase.auth().currentUser.displayName}</p>
          </div>
        </div>
      ) : (
        <div className="register" onClick={openRegister}>
          Register
        </div>
      )}
    </>
  );
}

import React from "react";
import { signIn } from "../../service";
import { setQueryParams } from "../../utils";

import "./signin.css";

export function SignInForm({ notRegisteredClick, onForgotPasswordClick }) {
  const [state, setState] = React.useState({ email: "", password: "" });

  const onSignInClick = () => {
    signIn({ ...state }).then((response) => {
      sessionStorage.setItem("token", response.session.token);
      setQueryParams({ page: "lobby" });
    });
  };

  return (
    <>
      <form>
        <input
          placeholder="email"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setState({ ...state, password: e.target.value });
          }}
        />
      </form>
      <button className="signInBtn" onClick={onSignInClick}>
        Sign In
      </button>
      <p onClick={notRegisteredClick} className="notRegistered clickable">
        Not Registered Yet?
      </p>
      <p onClick={onForgotPasswordClick} className="forgotPassword clickable">
        Forgot your password?
      </p>
    </>
  );
}

import React from "react";
import { signIn } from "../../service";
import "./signin.css";

export function SignUpForm({ hasAccountClick }) {
  const [verifying, setVerifying] = React.useState(false);
  const [state, setState] = React.useState({ email: "", password: "" });

  const onRegisterClick = () => {
    signIn({ ...state }).then((response) => {
      setVerifying(true);
    });
  };

  return verifying ? (
    "Please check your email for a verification link"
  ) : (
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
        <input
          placeholder="re-enter password"
          type="password"
          onChange={(e) => {
            //check if passwords match
          }}
        />
      </form>
      <button className="signInBtn" onClick={onRegisterClick}>
        Register
      </button>
      <p onClick={hasAccountClick} className="hasAccount clickable">
        Already have an account?
      </p>
    </>
  );
}

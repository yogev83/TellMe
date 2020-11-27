import React from "react";
import { SignInForm } from "./signInForm";
import { SignUpForm } from "./signUpForm";
import { ForgotPasswordForm } from "./forgotPasswordForm";

import "./signin.css";

export function UserAccountPage() {
  const [state, setState] = React.useState("signUp");

  const hasAccountClick = React.useCallback(() => {
    setState("signIn");
  }, []);

  const notRegisteredClick = React.useCallback(() => {
    setState("signUp");
  }, []);

  const onForgotPasswordClick = React.useCallback(() => {
    setState("forgotPassword");
  }, []);

  const formElement = React.useMemo(() => {
    switch (state) {
      case "signUp":
        return <SignUpForm hasAccountClick={hasAccountClick} />;
      case "signIn":
        return (
          <SignInForm
            onForgotPasswordClick={onForgotPasswordClick}
            notRegisteredClick={notRegisteredClick}
          />
        );
      case "forgotPassword":
        return <ForgotPasswordForm />;
      default:
        return <SignUpForm hasAccountClick={hasAccountClick} />;
    }
  }, [state, hasAccountClick, notRegisteredClick, onForgotPasswordClick]);

  return (
    <div className="page page-signin">
      <div className="signinContainer">{formElement} </div>
    </div>
  );
}

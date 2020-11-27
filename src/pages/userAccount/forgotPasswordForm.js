import React from "react";
import { forgotPassword } from "../../service";

import "./signin.css";

export function ForgotPasswordForm() {
  const [state, setState] = React.useState({ email: "" });
  const [emailSent, setEmailSent] = React.useState(false);

  const onResetClick = () => {
    forgotPassword({ ...state }).then((response) => {
      setEmailSent(true);
    });
  };

  return emailSent ? (
    "Please check your email for a reset link"
  ) : (
    <>
      <form>
        <input
          placeholder="email"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />
      </form>
      <button className="resetPassword" onClick={onResetClick}>
        Reset
      </button>
    </>
  );
}

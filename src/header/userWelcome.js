import React from "react";
import { UserContext } from "../context/userContext";

export function UserWelcome({ openSignIn, openMyAccount }) {
  const userContext = React.useContext(UserContext);
  return (
    <>
      {" "}
      {userContext.user.username ? (
        <div className="login">
          <div onClick={openMyAccount}>
            <p>{userContext.user.username}</p>
          </div>
        </div>
      ) : (
        <div className="login" onClick={openSignIn}>
          Register
        </div>
      )}
    </>
  );
}

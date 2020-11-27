import React from "react";
import "./header.css";
import { goHome } from "../common/common";
import { getQueryParam } from "../utils";
import { UserWelcome } from "./userWelcome";

export function Header({ onFilterChange, openSignIn, openMyAccount }) {
  return (
    <div className="header">
      <h1 className="logo clickable" onClick={goHome}>
        TellMe
      </h1>
      {getQueryParam("page") === "lobby" ? (
        <div>
          What can we tell you about?
          <input className="searchLecture" onChange={onFilterChange} />
        </div>
      ) : null}
      <UserWelcome openSignIn={openSignIn} openMyAccount={openMyAccount} />
    </div>
  );
}

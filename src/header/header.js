import React from "react";
import { UserWelcome } from "./userWelcome";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./header.css";

export function Header({ isSignedIn, onFilterChange }) {
  const history = useHistory();
  const match = useRouteMatch();

  console.warn(match);

  return (
    <div className="header">
      <h1
        className="logo clickable"
        onClick={() => {
          history.push("/");
        }}
      >
        TellMe
      </h1>
      {match === "/" ? (
        <div>
          What can we tell you about?
          <input className="searchLecture" onChange={onFilterChange} />
        </div>
      ) : null}
      <UserWelcome isSignedIn={isSignedIn} />
    </div>
  );
}

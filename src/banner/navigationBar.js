import React from "react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <nav className="navigationBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

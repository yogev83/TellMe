import React from "react";
import { setBackgroundImage } from "../utils";
import "./banner.css";
import { NavigationBar } from "./navigationBar";

export function Banner({ title, content, image }) {
  React.useEffect(() => {
    setBackgroundImage(document.getElementsByClassName("banner")[0], image);
  }, [image]);

  return (
    <div className="banner">
      <NavigationBar />
      <div className="bannerContent">
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    </div>
  );
}

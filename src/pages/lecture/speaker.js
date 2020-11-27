import React from "react";
import { setBackgroundImage } from "../../utils";
import { SpeakerRating } from "./speakerRatting";

export function Speaker({ name, image, rating }) {
  React.useEffect(() => {
    setBackgroundImage(
      document.getElementsByClassName("speakerImage")[0],
      image
    );
  }, [image]);

  return (
    <div className="speaker">
      <div className="speakerheader">
        <h2>Speaker</h2>
        <SpeakerRating rating={rating} />
      </div>
      <div className="speakerImage"></div>
      <span>
        <h4>{name}</h4>
      </span>
    </div>
  );
}

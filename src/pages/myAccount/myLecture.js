import React from "react";

export function MyLecture({ name, time }) {
  return (
    <span className="lectureDetails">
      <p>{name}</p>
      <p>{time}</p>
    </span>
  );
}

import React from "react";
export function Lecture({ id, tags, name, time, cost, image, onClick }) {
  return (
    <div
      className="lecture"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="lectureImage">
        <img src={image} />
      </div>
      <div className="lectureContent">
        <h3>{name}</h3>
        <div>When: {time}</div>
        <div>How Much: {cost}$</div>
      </div>
    </div>
  );
}

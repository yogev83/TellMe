import React from "react";
import { MyLecture } from "./myLecture";

export function MyLecturesList({ lectures }) {
  console.warn(lectures);
  return (
    <>
      {lectures.map((lecture, i) => {
        return <MyLecture key={i} {...lecture}></MyLecture>;
      })}
    </>
  );
}

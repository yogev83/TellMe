import React from "react";
import { fetchLectures } from "../../../service";
import { Lecture } from "./lecture";
import "./lectures.css";

export function Lectures({ filter, openLecture }) {
  const [lecturesElements, setLecturesElements] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let lectures = await fetchLectures(filter);
      setLecturesElements(
        lectures.map((lecture) => {
          return (
            <Lecture key={lecture.id} {...lecture} onClick={openLecture} />
          );
        })
      );
    };
    fetchData();
  }, [filter, openLecture]);

  return <div className="lecturesContainer">{lecturesElements}</div>;
}

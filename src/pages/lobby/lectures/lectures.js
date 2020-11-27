import React from "react";
import { DbContext } from "../../../context/bdContext";
import { fetchLectures } from "../../../service";
import { Lecture } from "./lecture";
import "./lectures.css";

export function Lectures({ filter, openLecture }) {
  const [lecturesElements, setLecturesElements] = React.useState([]);
  const db = React.useContext(DbContext);

  React.useEffect(() => {
    const fetchData = async () => {
      const lectures = await db
        .collection("lectures")
        .get()
        .then((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
          });
          return docs;
        });
      setLecturesElements(
        lectures.map((lecture) => {
          return (
            <Lecture key={lecture.id} {...lecture} onClick={openLecture} />
          );
        })
      );
    };
    fetchData();
  }, [filter, openLecture, db]);

  return <div className="lecturesContainer">{lecturesElements}</div>;
}

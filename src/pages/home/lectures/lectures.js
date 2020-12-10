import React from "react";
import { Lecture } from "./lecture";
import "./lectures.css";

import firebase from "firebase/app";
import "firebase/firestore";
import { useHistory } from "react-router";

export function Lectures({ filter }) {
  const [lecturesElements, setLecturesElements] = React.useState([]);
  const db = firebase.firestore();
  const history = useHistory();

  const openLecture = React.useCallback(() => {
    history.push("/lecture");
  }, [history]);

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
  }, [filter, db]);

  return <div className="lecturesContainer">{lecturesElements}</div>;
}

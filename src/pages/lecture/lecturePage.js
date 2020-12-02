import React from "react";
import { Banner } from "../../banner/banner";
import "./lecturePage.css";
import { Speaker } from "./speaker";

export function LecturePage({ id }) {
  const [data, setData] = React.useState({});

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     let res = await fetchLectureData(id);
  //     setData(res);
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <div className="page-lecture">
      <Banner title={data.name} content={data.brif} image={data.image} />
      <div className="lectureContent">
        <p>{data.about}</p>
      </div>
      <Speaker
        name={data.speaker}
        image={data.speakerImage}
        rating={data.speakerRating}
      />
    </div>
  );
}

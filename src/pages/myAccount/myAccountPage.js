import React from "react";
import { fetchUserLectures } from "../../service";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./myAccountPage.css";

export function MyAccount() {
  const [lectures, setLectures] = React.useState([]);

  const createLectureElement = React.useCallback(({ id, name, time }) => {
    return (
      <div key={id}>
        <span className="lectureDetails">
          <p>{name}</p>
          <p>{time}</p>
        </span>
      </div>
    );
  }, []);

  // React.useEffect(() => {
  //   const fetchLectures = async () => {
  //     let response = await fetchUserLectures(user.userId);
  //     setLectures(response.lectures);
  //   };
  //   fetchLectures();
  // }, [user]);

  return (
    <div className="page myAccount-page">
      <Tabs className="myAcountTabs">
        <TabList>
          <Tab>My Account</Tab>
          <Tab>My Lectures</Tab>
        </TabList>

        <TabPanel>
          <h2>My Account</h2>
          {/* <p>{user.username}</p> */}
        </TabPanel>
        <TabPanel>
          <h2>My Lectures</h2>
          {lectures.map((lecture) => createLectureElement(lecture))}
        </TabPanel>
      </Tabs>
    </div>
  );
}

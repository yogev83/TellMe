import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./myAccountPage.css";
import { MyLecturesList } from "./myLecturesList";

export function MyAccount() {
  const [lectures, setLectures] = React.useState([]);

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
          {firebase.auth().currentUser.displayName}
        </TabPanel>
        <TabPanel>
          <h2>My Lectures</h2>
          <MyLecturesList lectures={[{ name: "js", time: "12:33" }]} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

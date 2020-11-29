import React from "react";
import { Banner } from "../../banner/banner";
import { Lectures } from "./lectures/lectures";
import "./home.css";

export function Home({ filter, openLecture }) {
  const bannerTitle = "Some Title about The Project";
  const bannerContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dui eu tortor viverra auctor";
  return (
    <div className="page page-home">
      <Banner title={bannerTitle} content={bannerContent} image="banner.jpg" />
      <Lectures filter={filter} openLecture={openLecture} />
    </div>
  );
}

import React from "react";
import { Banner } from "../../banner/banner";
import { Lectures } from "./lectures/lectures";
import "./home.css";

export function Home({ filter }) {
  const bannerTitle = "All You Want to Hear, and Say";
  const bannerContent =
    "TellMe let's you choose what you want to hear, from whom you want to hear it, or - even be heared yourself";
  return (
    <div className="page page-home">
      <Banner title={bannerTitle} content={bannerContent} image="banner.jpg" />
      <Lectures filter={filter} />
    </div>
  );
}

import React from "react";
import "./video.css";
import headerVideo from "../assets/mainpage.MP4";

const Video = () => {
  return (
    <div id="video" className="video">
      <div className="video__container">
        <video
          playsInline
          className="video-item"
          autoPlay
          preload="true"
          muted
          src={headerVideo}
        ></video>
      </div>
    </div>
  );
};

export default Video;

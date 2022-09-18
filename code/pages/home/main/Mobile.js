import React from "react";
import Video from "../../../components/Video";
import { generateUrl } from "../../../utils";

function Mobile({ links, socials, _relativeURL, _ID }) {
  return (
    <div className="home-mobile display-none">
      <div className="home-mobile-filter"></div>
      <Video
        src={generateUrl(
          "../../../../assets/videos/loop-mobile.mp4",
          _relativeURL,
          _ID
        )}
        autoplay={true}
        loop={true}
        id="mobile-video"
        poster={generateUrl(
          "/assets/images/home/mobile.png",
          _relativeURL,
          _ID
        )}
      />
      <ul className="navbar-menu-navigation">{links}</ul>
      {socials}
    </div>
  );
}

export default Mobile;

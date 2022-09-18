import React from "react";
import Video from "../../../components/Video";
import { generateUrl } from "../../../utils";

function Desktop({ assets, _relativeURL, _ID }) {
  return (
    <div className="home-desktop display-none">
      <div id="loop-container" className="hidden">
        <Video
          id="loop-video"
          autoplay={true}
          loop={true}
          src={generateUrl(
            "../../../../assets/videos/loop.mp4",
            _relativeURL,
            _ID
          )}
          poster={generateUrl(
            "/assets/images/home/loop-poster.png",
            _relativeURL,
            _ID
          )}
        />
        <div id="frames">{assets}</div>
      </div>
      <Video
        src={generateUrl(
          "../../../../assets/videos/main.mp4",
          _relativeURL,
          _ID
        )}
        id="intro-video"
        autoplay={true}
        loop={false}
        poster={generateUrl(
          "/assets/images/home/intro-poster.png",
          _relativeURL,
          _ID
        )}
      />
    </div>
  );
}

export default Desktop;

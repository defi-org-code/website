import React from "react";
import { generateUrl } from "../../../utils";

function Asset({
  tooltip,
  yellowImage,
  whiteImage,
  className = "",
  url,
  _relativeURL,
  _ID,
}) {
  return (
    <div className={`home-main-asset ${className}`}>
      <a href={generateUrl(url, _relativeURL, _ID)}>
        <div className="home-main-asset-img">
          <div className="yellow"> {yellowImage}</div>
          <div className="white"> {whiteImage}</div>
        </div>
      </a>
      {tooltip}
    </div>
  );
}

export default Asset;

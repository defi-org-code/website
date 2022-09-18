import React from "react";
import { generateUrl } from "../../utils";

function Author({ image, _relativeURL, _ID, text }) {
  return (
    <div className="announcement-author">
      <img src={generateUrl(image, _relativeURL, _ID)} />
      <p>{text}</p>
    </div>
  );
}

export default Author;

import React from "react";
import { generateUrl } from "../../utils";

function Partner({ image, _body, link, _relativeURL, _ID }) {
  return (
    <div className="about-partner">
      <div className="about-partner-logo">
        <img src={generateUrl(image, _relativeURL, _ID)} />
      </div>
      <div className="about-partner-right">
        <div className="about-partner-right-body">{_body}</div>
        <div className="about-partner-right-link">{link}</div>
      </div>
    </div>
  );
}

export default Partner;

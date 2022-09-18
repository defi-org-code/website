import React from "react";
import { generateUrl } from "../../utils";

function Brands({ topText, bottomText, socials, image, _relativeURL, _ID }) {
  return (
    <div className="about-top-section">
      <div className="top-text">{topText}</div>
      <img
        className="about-top-section-logo"
        src={generateUrl(image, _relativeURL, _ID)}
      />
      <div className="bottom-text">{bottomText}</div>
      {socials}
      <img
        className="about-top-section-wave"
        src={generateUrl(
          "../../../assets/images/shared/wave.svg",
          _relativeURL,
          _ID
        )}
      />
    </div>
  );
}

export default Brands;

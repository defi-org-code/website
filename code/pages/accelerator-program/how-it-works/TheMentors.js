import React from "react";
import { generateUrl } from "../../../utils";

function TheMentors({ title, _body, explanation, _relativeURL, _ID, slider }) {
  return (
    <div className="accelerator-hiw-mentors">
      <div className="accelerator-hiw-mentors-line" />
      <div className="accelerator-hiw-mentors-left">
        <div className="accelerator-hiw-mentors-header">
          <img
            src={generateUrl(
              "../../../../assets/images/accelerator-program/how-it-works/mentors.png",
              _relativeURL,
              _ID
            )}
          />
          <span>{title}</span>
        </div>
        <div className="accelerator-hiw-mentors-body">{_body}</div>
        <div className="accelerator-hiw-mentors-explanation">{explanation}</div>
      </div>
      <div className="accelerator-hiw-mentors-right">
        {slider}
        <div className="accelerator-hiw-mentors-right-images">
          <img
            className="img1"
            src={generateUrl(
              "../../../../assets/images/accelerator-program/how-it-works/top-grid.svg",
              _relativeURL,
              _ID
            )}
          />
          <img
            className="img2"
            src={generateUrl(
              "../../../../assets/images/accelerator-program/how-it-works/bottom-grid.svg",
              _relativeURL,
              _ID
            )}
          />

          <img
            className="img4"
            src={generateUrl(
              "../../../../assets/images/accelerator-program/how-it-works/ellipse.svg",
              _relativeURL,
              _ID
            )}
          />
        </div>
        <div className="accelerator-hiw-mentors-right-arrows"></div>
      </div>
    </div>
  );
}

export default TheMentors;

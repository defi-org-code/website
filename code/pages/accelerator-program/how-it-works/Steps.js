import React from "react";
import { generateUrl } from "../../../utils";

function Steps({ title, steps, _relativeURL, _ID }) {
  return (
    <div className="accelerator-hiw-steps">
      <section className="accelerator-hiw-steps-header">
        <img
          className="left-wave"
          src={generateUrl(
            "../../../../assets/images/accelerator-program/how-it-works/waves.png",
            _relativeURL,
            _ID
          )}
        />
        <img
          className="right-wave"
          src={generateUrl(
            "../../../../assets/images/accelerator-program/how-it-works/waves.png",
            _relativeURL,
            _ID
          )}
        />
        <h3>{title}</h3>
      </section>
      <div className="accelerator-hiw-steps-list">{steps}</div>
    </div>
  );
}

export default Steps;

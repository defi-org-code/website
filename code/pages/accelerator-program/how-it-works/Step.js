import React from "react";
import { generateUrl } from "../../../utils";

function Step({ _body, stepNumber, _relativeURL, _ID }) {
  return (
    <div className="step">
      <img
        className="grid-img"
        src={generateUrl(
          "../../../../assets/images/accelerator-program/how-it-works/grid.png",
          _relativeURL,
          _ID
        )}
      />
      <h3>{stepNumber}.</h3>
      {_body}
    </div>
  );
}

export default Step;

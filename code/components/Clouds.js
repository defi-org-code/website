import React from "react";
import { generateUrl } from "../utils";

function Clouds({ _relativeURL, _ID }) {
  return (
    <div className="clouds">
      <img
        className="clouds-1"
        src={generateUrl(
          "../../assets/images/shared/cloud-1.png",
          _relativeURL,
          _ID
        )}
      />
      <img
        className="clouds-2"
        src={generateUrl(
          "../../assets/images/shared/cloud-2.png",
          _relativeURL,
          _ID
        )}
      />
    </div>
  );
}

export default Clouds;

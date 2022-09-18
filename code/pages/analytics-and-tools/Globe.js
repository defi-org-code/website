import React from "react";
import { generateUrl } from "../../utils";

function Globe({ _body, _relativeURL, _ID }) {
  return (
    <div className="analytics-globe-section">
      <img
        className="analytics-globe-section-img"
        src={generateUrl(
          "../../../assets/images/analytics-and-tools/globe.png",
          _relativeURL,
          _ID
        )}
      />
      <section className="analytics-globe-section-text">{_body}</section>
    </div>
  );
}

export default Globe;

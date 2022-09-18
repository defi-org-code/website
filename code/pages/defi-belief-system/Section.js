import React from "react";
import ScrollSection from "../../components/scroll-section";
import { generateUrl } from "../../utils";

function Section({ title, _body, _relativeURL, _ID, extra, url, image }) {
  return (
    <ScrollSection title={title}>
      <div className="belief-section">
        <div className="belief-section-left">
          <h3>{title}</h3>
          <img src={generateUrl(image, _relativeURL, _ID)} />
        </div>
        <div className="belief-section-right">
          {_body}
          {extra && <div className="belief-section-extra">{extra}</div>}
          <img
            className="belief-section-wave"
            src={generateUrl(
              "../../../assets/images/beliefe-system/wave.svg",
              _relativeURL,
              _ID
            )}
          />
        </div>
      </div>
    </ScrollSection>
  );
}

export default Section;

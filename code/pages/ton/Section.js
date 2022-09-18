import React from "react";
import ScrollSection from "../../components/scroll-section";
import { generateUrl } from "../../utils";

function Section({ title, children, _relativeURL, _ID, className = "" }) {
  return (
    <div className={`ton-section ${className}`}>
      <ScrollSection title={title}>
        <h3 className="ton-section-title">{title}</h3>
        <div className="ton-section-children">{children}</div>
      </ScrollSection>
      <img
        className="ton-section-line"
        src={generateUrl(
          "../../../assets/images/shared/wave.svg",
          _relativeURL,
          _ID
        )}
      />
    </div>
  );
}

export default Section;

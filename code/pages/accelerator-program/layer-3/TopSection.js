import React from "react";
import { generateUrl } from "../../../utils";

function TopSection({ _relativeURL, _ID, _body, link }) {
  return (
    <div className="accelerator-layer3-top">
      <img
        className="accelerator-layer3-top-globe"
        src={generateUrl(
          "../../../assets/images/accelerator-program/globe.png",
          _relativeURL,
          _ID
        )}
      />
      <img
        className="accelerator-layer3-top-left"
        src={generateUrl(
          "../../../assets/images/accelerator-program/layer3.png",
          _relativeURL,
          _ID
        )}
      />
      <div className="accelerator-layer3-top-right">
        <div className="accelerator-layer3-top-body">{_body}</div>
        {link}
      </div>

      <img
        className="accelerator-layer3-top-lines"
        src={generateUrl(
          "../../../assets/images/shared/lines.svg",
          _relativeURL,
          _ID
        )}
      />
    </div>
  );
}

export default TopSection;

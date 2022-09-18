import React from "react";
import { generateUrl } from "../../../utils";

function BottomSection({ link, title, _body, _relativeURL, _ID, side_text }) {
  return (
    <div className="accelerator-layer3-bottom">
      <img
        className="accelerator-layer3-bottom-dots"
        src={generateUrl(
          "../../../../assets/images/accelerator-program/dots.svg",
          _relativeURL,
          _ID
        )}
      />
      <div className="accelerator-layer3-bottom-left">
        <section className="accelerator-layer3-bottom-title">{title}</section>
        <section className="accelerator-layer3-bottom-left-img">
          <img
            src={generateUrl(
              "../../../../assets/images/accelerator-program/waves.svg",
              _relativeURL,
              _ID
            )}
          />
        </section>
      </div>
      <div className="accelerator-layer3-bottom-right">
        <div className="side-text">
          <h5> {side_text}</h5>
        </div>
        <div className="content">
          <div className="accelerator-layer3-bottom-body">{_body}</div>
          {link}
        </div>
      </div>
    </div>
  );
}

export default BottomSection;

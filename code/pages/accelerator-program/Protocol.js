import React from "react";
import { generateUrl } from "../../utils";

function Protocol({ _body, _relativeURL, _ID, image }) {
  return (
    <div className="accelerator-protocol">
      <div className="accelerator-protocol-top">
        <div className="shadow"></div>
        <img
          className="accelerator-protocol-top-bg"
          src={generateUrl(
            "../../../assets/images/accelerator-program/protocol-bg.svg",
            _relativeURL,
            _ID
          )}
        />
        <img
          className="accelerator-protocol-top-main"
          src={generateUrl(image, _relativeURL, _ID)}
        />
      </div>
      <section className="accelerator-protocol-bottom">{_body}</section>
    </div>
  );
}

export default Protocol;

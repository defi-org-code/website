import React from "react";
import { generateUrl } from "../../utils";

function TextWithImage({ image, _body, _relativeURL, _ID, title }) {
  return (
    <div className="scroll-section-with-image">
      <img src={generateUrl(image, _relativeURL, _ID)} />
      <div className="scroll-section-with-image-right">
        <section className="scroll-section-with-image-title">{title}</section>
        {_body}
      </div>
    </div>
  );
}

export default TextWithImage;

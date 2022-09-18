import React from "react";
import { generateUrl } from "../utils";

function Button({ img, text, isDark, _relativeURL, _ID, id }) {
  return (
    <button id={id} className={`link ${isDark ? "link-dark" : ""}`}>
      {text} {img && <img src={generateUrl(img, _relativeURL, _ID)} />}
      <figure />
    </button>
  );
}

export default Button;

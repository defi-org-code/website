import React from "react";
import { generateUrl } from "../utils";

function Link({ url, img, text, target, isDark, _relativeURL, _ID, color }) {
  return (
    <a
      href={url}
      target={target}
      style={color ? { border: `1px solid #${color}` } : {}}
      className={`link ${isDark ? "link-dark" : ""}`}
    >
      <p style={color ? { color: `#${color}` } : {}}>{text}</p>{" "}
      {img && <img src={generateUrl(img, _relativeURL, _ID)} />}
     
    </a>
  );
}

export default Link;

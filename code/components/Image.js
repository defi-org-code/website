import React from "react";
import { generateUrl } from "../utils";

function Image({ src, _relativeURL, _ID, className = "" }) {
  return (
    <img className={className} src={generateUrl(src, _relativeURL, _ID)} />
  );
}

export default Image;

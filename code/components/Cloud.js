import React from "react";
import { generateUrl } from "../utils";

function Cloud({ img, _relativeURL, _ID }) {
  return <img className="cloud" src={generateUrl(img, _relativeURL, _ID)} />;
}

export default Cloud;

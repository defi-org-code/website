import React from "react";
import { generateUrl } from "../../utils";
import BlurItem from "../BlurItem";

function Link({ text, src, _relativeURL, _ID, icon }) {
  return (
    <li className="navigation-link" title={src}>
      <a href={generateUrl(src, _relativeURL, _ID)}>
        <img
          className="navigation-link-icon"
          src={generateUrl(icon, _relativeURL, _ID)}
        />
        {text}
        <BlurItem color="#F4EB10" />
      </a>
    </li>
  );
}

export default Link;

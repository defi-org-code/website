import React from "react";
import { generateUrl } from "../utils";

function Platforms({ platforms, _relativeURL, _ID }) {
  return (
    <ul className="platforms">
      {platforms.map((p, index) => {
        return (
          <li key={index}>
            <a href={p.url} target="_blank">
              <img src={generateUrl(p.image, _relativeURL, _ID)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Platforms;

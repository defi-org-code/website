import React from "react";
import { generateUrl } from "../../../utils";

function Tooltip({ _body, className, url, linkText, _relativeURL, _ID }) {
  return (
    <a
      href={generateUrl(url, _relativeURL, _ID)}
      className={`tooltip ${className}-tooltip`}
    >
      <div className="tooltip-body">{_body}</div>
      <button className="link">
        <p>{linkText}</p>
      </button>
    </a>
  );
}

export default Tooltip;

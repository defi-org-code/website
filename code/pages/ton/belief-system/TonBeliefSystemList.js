import React from "react";
import { generateUrl } from "../../../utils";

function List({ list, title, _relativeURL, _ID, linkUrl, linkText }) {
  return (
    <div className="ton-belief">
      <h4 className="ton-small-title">{title}</h4>
      <div className="ton-belief-list">{list}</div>
      <a
        className="ton-belief-link"
        href={generateUrl(linkUrl, _relativeURL, _ID)}
      >
        {linkText}
      </a>
    </div>
  );
}

export default List;

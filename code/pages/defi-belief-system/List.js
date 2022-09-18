import React from "react";
import { generateUrl } from "../../utils";

function List({ img, _body, _relativeURL, _ID }) {
  return (
    <div className="belief-section-list">
      <img
        src={generateUrl(img, _relativeURL, _ID)}
        className="belief-section-list-img"
      />
      <div className="belief-section-list-body">{_body}</div>
    </div>
  );
}

export default List;

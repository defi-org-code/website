import React from "react";
import { generateUrl } from "../../utils";

function Announcment({ list, title, _relativeURL, _ID }) {
  return (
    <div className="announcements-news">
      <h3 className="announcements-section-title">{title}</h3>
      <div className="announcements-news-list posts-base-list">{list}</div>
      <img
      className="announcements-news-image"
      src = {generateUrl('../../../assets/images/announcements/lines.svg', _relativeURL, _ID)} />
     
    </div>
  );
}

export default Announcment;

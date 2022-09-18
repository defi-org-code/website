import React from "react";

function TopStories({ list, title }) {
  return (
    <div className="announcements-top-stories">
      {title && <h3 className="announcements-section-title">{title}</h3>}
      <div className="announcements-top-stories-list"> {list}</div>
    </div>
  );
}

export default TopStories;

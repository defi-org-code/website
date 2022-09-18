import React from "react";

function Applications({ list, title }) {
  return <div className="announcements-applications">
    <h3 className="announcements-section-title">{title}</h3>
    <div className="announcements-applications-list">{list}</div>
  </div>;
}

export default Applications;

import React from "react";

function Partners({ list, title }) {
  return (
    <div className="ton-partners">
      <div className="ton-small-title"> {title}</div>
      <div className="ton-partners-list">{list}</div>
    </div>
  );
}

export default Partners;

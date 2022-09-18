import React from "react";

function CommonListContainer({ _body, list }) {
  return (
    <div className="common-list-container">
      <div className="common-list-container-top-text">{_body}</div>
      <div className="common-list-container-list"> {list}</div>
    </div>
  );
}

export default CommonListContainer;

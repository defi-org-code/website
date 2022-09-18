import React from "react";

function ThePath({ title, _body, list }) {
  return (
    <div className="belief-the-path">
      <h3>{title}</h3>
      <div className="belief-the-path-body">{_body}</div>
      {list}
    </div>
  );
}

export default ThePath;

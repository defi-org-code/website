import React from "react";

function Wrapper({ className, _body }) {
  return <div className={className}>{_body}</div>;
}

export default Wrapper;

import React from "react";

function Container({ children, className = "" }) {
  return <div className={`bg-container ${className}`}>{children}</div>;
}

export default Container;

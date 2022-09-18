import React from "react";

function LinkButton({ url, text }) {
  return (
    <a href={url} target="_blank" className="link-button">
      {text}
    </a>
  );
}

export default LinkButton;

import React from "react";

function Integration({ image, _body, url, _relativeURL, _ID }) {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="integration">
      <img src={handleUrl(image)} className="integration-image" />
      {_body}
      <a href={url} target="_blank" className="integration-link">
        <img
          src={handleUrl(
            "../../../../assets/images/notifications-protocol/github.svg"
          )}
          alt="github"
        />
      </a>
    </li>
  );
}

export default Integration;

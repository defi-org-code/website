import React from "react";

function Apps({ title, _body, google, apple, _relativeURL, _ID }) {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="apps">
      <h3 className="apps-title">{title}</h3>
      <div className="apps-body">{_body}</div>
      <div className="apps-links">
        <a href={google} target="_blank">
          <img
            src={handleUrl(
              "../../../assets/images/notifications-protocol/apps/google.svg"
            )}
          />
        </a>
        <a href={apple} target="_blank">
          <img
            src={handleUrl(
              "../../../assets/images/notifications-protocol/apps/apple.svg"
            )}
          />
        </a>
      </div>
    </div>
  );
}

export default Apps;

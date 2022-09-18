import React from "react";
import { AAVE_EXAMPLE_URL } from "../../../../assets/js/notification-protocol/consts";

function Example({ _body, _relativeURL, _ID }) {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="contribute-example">
      <div className="contribute-example-body">{_body}</div>
      <div className="contribute-example-hero">
        <a href={AAVE_EXAMPLE_URL} target="_blank">
          <img
            src={handleUrl(
              "../../../../assets/images/notifications-protocol/contribute/code.png"
            )}
            alt="hero"
          />
        </a>
      </div>
    </div>
  );
}

export default Example;

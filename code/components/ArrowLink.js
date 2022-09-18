import React from "react";
import { generateUrl } from "../utils";

function ArrowLink({ url, _body, _relativeURL, _ID }) {
  return (
    <a href={url} target="_blank">
      {_body}
      <img
        src={generateUrl(
          "../../assets/images/shared/arrow.png",
          _relativeURL,
          _ID
        )}
      />
    </a>
  );
}

export default ArrowLink;

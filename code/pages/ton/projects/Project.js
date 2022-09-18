import React from "react";
import { generateUrl } from "../../../utils";

function Project({ title, _body, socials, image, _relativeURL, _ID }) {
  return (
    <div className="ton-project">
      <div className="ton-project-img">
        <img src={generateUrl(image, _relativeURL, _ID)} />
      </div>
      <div className="ton-project-content">
        <h4 className="ton-project-content-title">{title}</h4>
        <div className="ton-project-content-body">{_body}</div>
        {socials}
      </div>
    </div>
  );
}

export default Project;

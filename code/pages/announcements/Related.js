import React from "react";
import { generateUrl } from "../../utils";

function Related({ list, _body, _relativeURL, _ID }) {
  if (!list) {
    return null;
  }
  return (
    <div className="related-announcements">
      <section className="related-announcements-title">
        {_body}
        <a
          className="related-announcements-title-explore"
          href={generateUrl("/announcements", _relativeURL, _ID)}
        >
          {"EXPLORE MORE >>"}
        </a>
      </section>
      <div className="related-announcements-list posts-base-list">{list}</div>
    </div>
  );
}

export default Related;

import React from "react";
import SecondaryGrid from "../../components/SecondaryGrid";
import { generateUrl } from "../../utils";

function MediaMentions({ list, _body, _relativeURL, _ID }) {
  return (
    <div className="accelerator-media">
      <SecondaryGrid>
        <div className="accelerator-media-header">
          <img
            className="accelerator-media-header-border accelerator-media-header-border-left"
            src={generateUrl(
              "../../../../assets/images/accelerator-program/left-border.png",
              _relativeURL,
              _ID
            )}
          />
          <img
            className="accelerator-media-header-border accelerator-media-header-border-right"
            src={generateUrl(
              "../../../../assets/images/accelerator-program/right-border.png",
              _relativeURL,
              _ID
            )}
          />
          <section className="title"> {_body}</section>
        </div>
        <div className="accelerator-media-list posts-base-list">{list}</div>
      </SecondaryGrid>
    </div>
  );
}

export default MediaMentions;

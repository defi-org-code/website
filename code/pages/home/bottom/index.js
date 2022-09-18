import React from "react";
import MainGrid from "../../../components/MainGrid";
import { generateUrl } from "../../../utils";

function Bottom({ slider, _body, _relativeURL, _ID }) {
  return (
    <div className="home-bottom">
      <MainGrid>
        <div className="home-bottom-flex">
          <div className="home-text">{_body}</div>
          {slider}
        </div>
        <img
          className="home-bottom-hero"
          src={generateUrl(
            "../../../../assets/images/home/bottom.png",
            _relativeURL,
            _ID
          )}
        />
      </MainGrid>
    </div>
  );
}

export default Bottom;

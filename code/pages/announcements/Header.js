import React from "react";
import { generateUrl } from "../../utils";

function Header({ _relativeURL, _ID }) {
  return (
    <div className="announcements-header">
      <div className="announcements-header-top">
        <img
          className="announcements-header-top-frame announcements-header-top-frame-left"
          src={generateUrl(
            "../../../assets/images/announcements/header-left.png",
            _relativeURL,
            _ID
          )}
        />
        <img
          className="announcements-header-top-frame announcements-header-top-frame-right"
          src={generateUrl(
            "../../../assets/images/announcements/header-right.png",
            _relativeURL,
            _ID
          )}
        />
        <div className="announcements-header-main">
          <img
            className="announcements-header-star announcements-header-star-left"
            src={generateUrl(
              "../../../assets/images/announcements/star.png",
              _relativeURL,
              _ID
            )}
          />

          <img
            className="announcements-header-star announcements-header-star-right"
            src={generateUrl(
              "../../../assets/images/announcements/star.png",
              _relativeURL,
              _ID
            )}
          />
          <div className="announcements-header-title">
            <div className="announcements-header-filter"></div>
            <h3>Announcements</h3>
          </div>
          <h5>NFT, Crypto & DeFi News Shaping the Next Wave of Innovation</h5>
        </div>
      </div>
   
    </div>
  );
}

export default Header;

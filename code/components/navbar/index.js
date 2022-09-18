import React from "react";
import { generateUrl } from "../../utils";

function Navbar({ navigation_menu, _relativeURL, _ID }) {
  return (
    <div className="navbar">
      <div className="navbar-grid">
        <a href={generateUrl("/", _relativeURL, _ID)} className="navbar-logo">
          <img
            src={generateUrl(
              "../../../assets/images/shared/logo.svg",
              _relativeURL,
              _ID
            )}
          />
          <p>DeFi.org</p>
        </a>
        <button className="navbar-open">
          <img
            className="navbar-open-img"
            src={generateUrl(
              "../../../assets/images/navbar/menu.svg",
              _relativeURL,
              _ID
            )}
          />
        </button>
        {navigation_menu}
      </div>
    </div>
  );
}

export default Navbar;

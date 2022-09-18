import React from "react";
import { generateUrl } from "../../utils";

function NavigationMenu({ links, _relativeURL, _ID, socials }) {
  return (
    <div className="navbar-menu" style={{ transform: "translate(100%)" }}>
      <button className="navbar-menu-close">
        <img
          src={generateUrl(
            "../../../assets/images/navbar/close.svg",
            _relativeURL,
            _ID
          )}
        />
      </button>

      <ul className="navbar-menu-navigation">{links}</ul>
      {socials}
    </div>
  );
}

export default NavigationMenu;

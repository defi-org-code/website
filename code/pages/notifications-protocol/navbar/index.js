import React from "react";

const Navbar = ({ _relativeURL, _ID, navigation, gitUrl, logoText }) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <a href="/#" className="navbar-logo">
          <img
            src={handleUrl(
              "../../../../assets/images/notifications-protocol/navbar/logo.svg"
            )}
          />
          <p>{logoText}</p>
        </a>
        <button className="navbar-mobile-hamburger">
          <img
            src={handleUrl(
              "../../../../assets/images/notifications-protocol/navbar/mobile-menu.svg"
            )}
            alt="mobile toggle"
          />
        </button>
        <div className="navbar-menu">
          <button className="navbar-mobile-close">
            <img
              src={handleUrl(
                "../../../../assets/images/notifications-protocol/navbar/close.svg"
              )}
              alt="mobile close menu"
            />
          </button>
          {navigation}
          <a href={gitUrl} target="_blank" className="navbar-github">
            <img
              src={handleUrl(
                "../../../../assets/images/notifications-protocol/github-dark.svg"
              )}
              alt="github"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

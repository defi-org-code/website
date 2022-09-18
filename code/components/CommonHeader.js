import React from "react";
import { generateUrl } from "../utils";

function CommonHeader(props) {
  const { children, className = "" } = props;
  return (
    <div className={`common-header ${className}`}>
      {children}
      <Main {...props} />
    </div>
  );
}

export default CommonHeader;

const Main = (props) => {
  const { hero, bg, _relativeURL, _ID, _body, extraLeftTop, video, mobile } =
    props;

  const showDesktop = video || hero;
  return (
    <div className="common-header-main">
      <div className="common-header-main-left">
        {extraLeftTop}
        <div className="common-header-body">{_body}</div>
      </div>
      {bg && (
        <img
          className="common-header-bg"
          src={generateUrl(bg, _relativeURL, _ID)}
        />
      )}

      {showDesktop && (
        <div className="common-header-desktop">
          {video ? (
            <video autoPlay muted loop>
              <source
                src={generateUrl(video, _relativeURL, _ID)}
                type="video/webm"
              />
              Sorry, your browser doesn't support HTML5 video.
            </video>
          ) : hero ? (
            <img
              className="common-header-asset"
              src={generateUrl(hero, _relativeURL, _ID)}
            />
          ) : null}
        </div>
      )}
      {mobile && (
        <div className="common-header-mobile">
          <img
            className="common-header-asset"
            src={generateUrl(mobile, _relativeURL, _ID)}
          />
        </div>
      )}
    </div>
  );
};

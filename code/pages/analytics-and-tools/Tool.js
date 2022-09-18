import React from "react";
import { generateUrl } from "../../utils";

function Tool({
  title,
  _body,
  image,
  _relativeURL,
  _ID,
  link,
  platforms,
  shadow,
}) {
  return (
    <div className="analytics-tool">
      {shadow && <div className="analytics-tool-shadow"></div>}
      <div className="analytics-tool-left">
        <div className="analytics-tool-left-content">
          <section className="analytics-tool-title">{title}</section>
          <img
            className="analytics-tool-separator"
            src={generateUrl(
              "../../../assets/images/analytics-and-tools/separator.svg",
              _relativeURL,
              _ID
            )}
          />
          <section className="analytics-tool-body">{_body}</section>
        </div>
        <div className="analytics-tool-links">
          {link}
          {platforms}
        </div>
      </div>
      <div className="analytics-tool-right">
        <img
          className="analytics-tool-hero"
          src={generateUrl(image, _relativeURL, _ID)}
        />

        <img
          className="analytics-tool-figure analytics-tool-figure-top"
          src={generateUrl(
            "../../../assets/images/analytics-and-tools/figure-top.svg",
            _relativeURL,
            _ID
          )}
        />
        <img
          className="analytics-tool-figure analytics-tool-figure-bottom"
          src={generateUrl(
            "../../../assets/images/analytics-and-tools/figure-bottom.svg",
            _relativeURL,
            _ID
          )}
        />
      </div>
      <div className="analytics-tool-mobile-platforms"> {platforms}</div>
    </div>
  );
}

export default Tool;

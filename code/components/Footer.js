import React from "react";
import { generateUrl } from "../utils";
import MainGrid from "./MainGrid";

function Footer({ links, socials, terms, contributed, _relativeURL, _ID }) {
  return (
    <footer className="footer">
      <MainGrid>
        <div className="footer-flex">
          <div className="footer-left">{socials}</div>
          <ul className="footer-right">{links}</ul>
        </div>
        <div className="footer-bottom">
          <a
            href={generateUrl(terms, _relativeURL, _ID)}
            className="terms"
            target="_blank"
          >
            <p>{"Terms & Conditions"}</p>
          </a>
          <div className="contributed">{contributed}</div>
        </div>
      </MainGrid>
    </footer>
  );
}

export default Footer;

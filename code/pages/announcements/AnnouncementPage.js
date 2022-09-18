import React from "react";
import MainGrid from "../../components/MainGrid";
import { generateUrl } from "../../utils";

function AnnouncementPage({
  title,
  author,
  date,
  read_text,
  description,
  _body,
  posted_at,
  backButton,
  socials,
  related,
  image,
  _relativeURL,
  _ID,
}) {
  return (
    <div className="announcement-page">
      <MainGrid>
        <div className="announcement-page-flex">
          <div className="announcement-page-desktop-socials"> {socials}</div>

          <div className="announcement-page-grid">
            {backButton}
            <h1 className="announcement-page-title">{title}</h1>
            <p className="announcement-page-subtitle">{description}</p>
            <div className="announcement-page-details">
              <h5>{author}</h5>
              <p>{date}</p>
              <p>{read_text}</p>
            </div>
            <div className="announcement-page-mobile-socials"> {socials}</div>
            {image && (
              <img
                className="announcement-page-hero"
                src={generateUrl(image, _relativeURL, _ID)}
              />
            )}
            <div className="announcement-page-body">{_body}</div>
          </div>
        </div>
        {related}
      </MainGrid>
    </div>
  );
}

export default AnnouncementPage;

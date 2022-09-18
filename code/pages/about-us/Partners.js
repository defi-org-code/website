import React from "react";
import { generateUrl } from "../../utils";

function ManagingPartners({
  _body,
  _relativeURL,
  _ID,
  partners,
  announcements,
  text,
}) {
  return (
    <div className="about-partners">
      <div className="about-partners-header">
        <div className="about-partners-header-left">
          <div className="about-partners-header-title">{_body}</div>
          <div className="about-partners-bottom-text">{text}</div>
        </div>

        <img
          className="about-partners-logo"
          src={generateUrl(
            "../../../assets/images/shared/partners.png",
            _relativeURL,
            _ID
          )}
        />
      </div>

     
      <div className="about-partners-list">{partners}</div>
       {/* {announcements} */}
    </div>
  );
}

export default ManagingPartners;

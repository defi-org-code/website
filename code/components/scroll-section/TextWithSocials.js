import React from "react";

function TextWithSocials({ title, _body, socials }) {
  return (
    <div className="scroll-section-with-socials">
      <h4 className="scroll-section-with-socials-title">{title}</h4>
      {_body}
      {socials}
    </div>
  );
}

export default TextWithSocials;

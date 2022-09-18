import React from "react";
import CommonBanner from "../../components/CommonBanner";
import MainGrid from "../../components/MainGrid";

function Banner({ _body, link }) {
  return (
    <MainGrid>
      <CommonBanner className="accelerator-banner">
     
          <div className="accelerator-banner-text">{_body}</div>
          {link}
      
      </CommonBanner>
    </MainGrid>
  );
}

export default Banner;

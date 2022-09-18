import React from "react";
import CommonHeader from "../../components/CommonHeader";
import MainGrid from "../../components/MainGrid";

function Header(props) {
  return (
    <MainGrid>
      <CommonHeader {...props} className="accelerator-header"></CommonHeader>
    </MainGrid>
  );
}

export default Header;

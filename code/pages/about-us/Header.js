import React from "react";
import CommonHeader from "../../components/CommonHeader";
import MainGrid from "../../components/MainGrid";
import { generateUrl } from "../../utils";

function Header(props) {
  return <CommonHeader {...props} className="about-header"></CommonHeader>;
}

export default Header;

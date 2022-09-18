import React from "react";
import Container from "./Container";

function CommonBanner({ children, className ='' }) {
  return <Container className={`banner ${className}`}>{children}</Container>;
}

export default CommonBanner;

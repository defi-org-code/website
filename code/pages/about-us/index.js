import React from "react";
import SecondaryGrid from "../../components/SecondaryGrid";
import MainGrid from "../../components/MainGrid";

function AboutUs({ partners, header, topSection, clouds }) {
  return (
    <div className="about">
      {clouds}
      <MainGrid>{header}</MainGrid>
      <SecondaryGrid>
        {topSection}
        {partners}
      </SecondaryGrid>
    </div>
  );
}

export default AboutUs;

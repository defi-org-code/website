import React from "react";
import MainGrid from "../../components/MainGrid";
import { generateUrl } from "../../utils";
import Section from "./Section";

function Ton(props) {
  const { header, sections, banner, clouds } = props;
  return (
    <div className="ton">
      {clouds}
      <MainGrid>
        {header}
        {banner}
      </MainGrid>

      <div className="ton-flex">
        <div className="ton-sticky"></div>
        {sections}
      </div>
    </div>
  );
}

export default Ton;

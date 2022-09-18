import React from "react";
import MainGrid from "../../../components/MainGrid";

function Layer3({ topSection, bottomSection }) {
  return (
    <div className="accelerator-layer3">
      <MainGrid>
        {topSection}
        {bottomSection}
      </MainGrid>
    </div>
  );
}

export default Layer3;

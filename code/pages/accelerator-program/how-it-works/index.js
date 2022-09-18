import React from "react";
import MainGrid from "../../../components/MainGrid";
import SecondaryGrid from "../../../components/SecondaryGrid";

function HowItWorks({ steps, theMentors }) {
  return (
    <div className="accelerator-hiw">
      <MainGrid>
        {steps}
        <div className="accelerator-hiw-line">
          <figure className="accelerator-hiw-line-first" />
          <figure className="accelerator-hiw-line-second" />
        </div>
        {theMentors}
      </MainGrid>
    </div>
  );
}

export default HowItWorks;

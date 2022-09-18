import React from "react";
import MainGrid from "../../components/MainGrid";

function AnalyticsAndTools({ header, globe, tools, clouds }) {
  return (
    <div className="analytics">
      {clouds}
      <MainGrid>
        {header}
        {globe}
        {tools}
      </MainGrid>
    </div>
  );
}

export default AnalyticsAndTools;

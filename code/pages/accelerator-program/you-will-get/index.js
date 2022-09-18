import React from "react";
import MainGrid from "../../../components/MainGrid";

function YouWillGet({ list, _body }) {
  return (
    <MainGrid>

   
    <div className="you-will-get">
      {_body}
      <div className="you-will-get-list">{list}</div>
    </div>
    </MainGrid>
  );
}

export default YouWillGet;

import React from "react";
import MainGrid from "../../components/MainGrid";
import { generateUrl } from "../../utils";
import Categories from "./Categories";

function DefiBeliefSystem({
  header,
  list,
  thePath,
  _relativeURL,
  _ID,
  clouds,
}) {
  return (
    <main className="belief">
      {clouds}
      <MainGrid>{header}</MainGrid>

      <div className="belief-flex">
        <div className="belief-sticky"></div>
        <MainGrid>
          <Categories list={list} />
        </MainGrid>
      </div>

      <MainGrid className="belief-bottom-grid">
        <img
          className="belief-bottom-line"
          src={generateUrl(
            "../../../assets/images/shared/line.png",
            _relativeURL,
            _ID
          )}
        />
        {thePath}
      </MainGrid>
    </main>
  );
}

export default DefiBeliefSystem;

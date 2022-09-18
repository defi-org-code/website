import React from "react";
import Dots from "../../components/Dots";
import MainGrid from "../../components/MainGrid";
import SecondaryGrid from "../../components/SecondaryGrid";
import { generateUrl } from "../../utils";

function Protocols({ _body, list, _relativeURL, _ID }) {
  return (
    <div className="accelerator-protocols">
     <MainGrid>

   
        <section className="accelerator-protocols-text">{_body}</section>
        <div className="accelerator-protocols-list"> {list}</div>
        <div className="accelerator-protocols-bottom">
          <Dots />
          <img
            src={generateUrl(
              "../../../assets/images/accelerator-program/lines.svg",
              _relativeURL,
              _ID
            )}
          />
        </div>
        </MainGrid>
    </div>
  );
}

export default Protocols;

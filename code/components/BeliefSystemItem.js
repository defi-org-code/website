import React from "react";
import BeliefeSystemPageSection from "../pages/defi-belief-system/Section";
import TonBeliefSystem from "../pages/ton/belief-system/TonBeliefSystem";

function BeliefSystemItem(props) {
  const { _ID } = props;
  if (_ID === "defi-belief-system") {
    return <BeliefeSystemPageSection {...props} />;
  }
  if (_ID === "ton") {
    return <TonBeliefSystem {...props} />;
  }
  return null;
}

export default BeliefSystemItem;

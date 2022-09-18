import React from "react";
import Clouds from "../../components/Clouds";

function AcceleratorProgramm({
  header,
  banner,
  protocols,
  howItWorks,
  layer3,
  media,
  youWillGet,
  clouds,
}) {
  return (
    <div className="accelerator">
      {clouds}
      {header}
      {banner}
      {protocols}
      {youWillGet}
      {howItWorks}
      {layer3}

      {media}
    </div>
  );
}

export default AcceleratorProgramm;

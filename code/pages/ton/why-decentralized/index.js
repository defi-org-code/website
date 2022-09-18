import React from "react";
import Dots from "../../../components/Dots";
import Section from "../Section";

function WhyDecetralized(props) {
  const { bottomText, slider } = props;
  return (
    <Section className="ton-decetralized" {...props}>
      <div className="ton-decetralized-bottom-text">{bottomText}</div>
      {slider}
    </Section>
  );
}

export default WhyDecetralized;

import React from "react";
import Section from "../Section";

function WhyTon(props) {
  const { topText, bottomText, listItem1, listItem2, listItem3 } = props;
  return (
    <Section className="ton-why" {...props}>
      <div className="ton-why-top-text">{topText}</div>
      <div className="ton-why-list">
        {listItem1}
        {listItem2}
        {listItem3}
      </div>
      <div className="ton-why-bottom-text">{bottomText}</div>
    </Section>
  );
}

export default WhyTon;

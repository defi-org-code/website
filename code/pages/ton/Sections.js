import React from "react";
import MainGrid from "../../components/MainGrid";
import Section from "./Section";

function Sections(props) {
  const { sections, belief, partners } = props;
  return (
    <div className="ton-sections">
      <Section {...props} title="DeFi.org" className="ton-first-section">
        {belief}
        {partners}
      </Section>

      {sections}
    </div>
  );
}

export default Sections;

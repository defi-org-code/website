import React from "react";
import Container from "../../../components/Container";
import Section from "../Section";

function OurMission(props) {
  const { _body, left, right, topText, bottomText } = props;
  return (
    <Section {...props}>
      <div className="ton-mission">
        <div className="ton-mission-top-text">{topText}</div>
        <div className="ton-mission-body">{_body}</div>
        <Container className="ton-mission-flex">
          {left}
          {right}
        </Container>
        <div className="ton-mission-bottom-text">{bottomText}</div>
      </div>
    </Section>
  );
}

export default OurMission;

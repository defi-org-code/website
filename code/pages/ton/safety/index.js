import React from "react";
import Section from "../Section";

function Safety(props) {
  const { _body, list } = props;
  return (
    <Section className="ton-safety" {...props}>
      <div className="ton-safety-top-text">{_body}</div>
      {list}
    </Section>
  );
}

export default Safety;

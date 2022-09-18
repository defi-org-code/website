import React from "react";
import Section from "../Section";

function Projects(props) {
  const { list } = props;
  return (
    <Section className="ton-projects" {...props}>
      <div className="ton-projects-list">{list}</div>
    </Section>
  );
}

export default Projects;

import React from "react";
import {
  PR_URL,
  README,
} from "../../../../assets/js/notification-protocol/consts";
import LinkButton from "../LinkButton";

function Contribute({ title, example, bottomText }) {
  return (
    <div className="contribute">
      <h3 className="contribute-title">{title}</h3>
      {example}
      <section className="contribute-bottom">
        <h5>{bottomText}</h5>
        <div className="contribute-bottom-buttons">
          <LinkButton url={README} text="Readme" />
          <LinkButton url={PR_URL} text="GitHub PR" />
        </div>
      </section>
    </div>
  );
}

export default Contribute;

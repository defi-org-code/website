import React from "react";
import { PR_URL } from "../../../../assets/js/notification-protocol/consts";
import LinkButton from "../LinkButton";

function Integrations({ list, title, prText }) {
  return (
    <div className="integrations">
      <h3 className="integrations-title">{title}</h3>
      <ul className="integrations-list">
        {list}
        <li className="integration" id="integration-pr">
          <p>{prText}</p>
          <LinkButton text="GitHub PR" url={PR_URL} />
        </li>
      </ul>
    </div>
  );
}

export default Integrations;

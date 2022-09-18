import React from "react";
import Container from "../../../components/Container";
import { generateUrl } from "../../../utils";

function Table({ img, title, _body, _relativeURL, _ID }) {
  return (
    <div className="ton-table">
      <section className="ton-table-header">
        <img src={generateUrl(img, _relativeURL, _ID)} />
        <h4>{title}</h4>
      </section>

      <div className="ton-table-body">{_body}</div>
    </div>
  );
}

export default Table;

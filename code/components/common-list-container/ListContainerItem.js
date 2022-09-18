import React from "react";
import { generateUrl } from "../../utils";
import Container from "../Container";

function CommonListItem({ image, _relativeURL, _ID, _body, title }) {
  return (
    <Container className="common-list-container-list-item">
      <div className="common-list-container-list-item-top">
        <img src={generateUrl(image, _relativeURL, _ID)} />
        <h4>{title}</h4>
        <figure />
      </div>
      <div className="common-list-container-list-item-body">{_body}</div>
    </Container>
  );
}

export default CommonListItem;

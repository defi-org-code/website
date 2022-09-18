import React from "react";
import Container from "../../../components/Container";
import { generateUrl } from "../../../utils";

function ListItem({ image, _body, _relativeURL, _ID }) {
  return (
    <Container className="ton-why-list-item">
      <img src={generateUrl(image, _relativeURL, _ID)} />
      <div className="ton-why-list-item-body">{_body}</div>
    </Container>
  );
}

export default ListItem;

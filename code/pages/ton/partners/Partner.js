import React from "react";
import Container from "../../../components/Container";
import { generateUrl } from "../../../utils";

function Partner({ image, _body, _relativeURL, _ID, url }) {
  return (
    <Container className="ton-partner">
      <a href={url} target="_blank">
        <img src={generateUrl(image, _relativeURL, _ID)} />
        {_body}
      </a>
    </Container>
  );
}

export default Partner;

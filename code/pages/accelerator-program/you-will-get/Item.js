import React from "react";
import BlurItem from "../../../components/BlurItem";

function Item({ _body }) {
  return (
    <div className="you-will-get-list-item">
      <div className="bg"></div>
      <BlurItem blur={7} color="#6ECCE8" />
      <div className="body">{_body}</div>
    </div>
  );
}

export default Item;

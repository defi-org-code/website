import React from "react";

function Table({ title, _body }) {
  return (
    <div className="swiper-slide">
      <div className="ton-decetralized-table">
        <header>{title}</header>
        <div className="ton-decetralized-table-body">{_body}</div>
      </div>
    </div>
  );
}

export default Table;

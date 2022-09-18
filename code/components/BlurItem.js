import React from "react";

function BlurItem({ color, id = "", blur = 5 }) {
  return (
    <div className="blur-item" id={id}>
      <figure
        className="blur-item-1"
        style={{
          background: color,
        }}
      />
      <figure
        className="blur-item-1"
        style={{
          background: color,
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
  );
}

export default BlurItem;

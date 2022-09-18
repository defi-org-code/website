import React from "react";
import Anchor from "./Anchor";

function ScrollSection({ title, children }) {
  return (
    <div className="scroll-section">
      <Anchor attr={title} />
      {children}
    </div>
  );
}

export default ScrollSection;

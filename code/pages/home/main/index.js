import React from "react";

function Main({ desktop, mobile }) {
  return (
    <div className="home-main">
      {mobile}
      {desktop}
    </div>
  );
}

export default Main;

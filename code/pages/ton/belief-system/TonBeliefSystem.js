import React from "react";
import { generateUrl } from "../../../utils";

function TonBeliefSystem({ image, _relativeURL, _ID, title, url }) {
  const handleTitle = () => {
    const splited = title.split(" ");
    return (
      <div>
        {splited.map((e) => {
          return <h4 key={e}>{e}</h4>;
        })}
      </div>
    );
  };

  return (
    <a
      href={generateUrl(`/defi-belief-system/#${url}`, _relativeURL, _ID)}
      className="ton-belief-item"
    >
      <img src={generateUrl(image, _relativeURL, _ID)} />
      <h4>{handleTitle(title)}</h4>
    </a>
  );
}

export default TonBeliefSystem;

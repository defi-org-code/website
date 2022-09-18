import React from "react";
import { generateUrl } from "../../utils";

function Partners({ partners, _relativeURL, _ID, title }) {
  return (
    <div className="accelerator-partners">
        <section className="accelerator-partners-title">
            {title}
        </section>
      <ul>
        {partners.map((p, index) => {
          return (
            <li key={index}>
              <a href={p.url} target="_blank">
              <img src={generateUrl(p.image, _relativeURL, _ID)} />
                {p.name}
              </a>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Partners;

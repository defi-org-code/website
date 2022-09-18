import React from "react";
import { generateUrl } from "../utils";

function Socials({
  facebook,
  telegram,
  twitter,
  github,
  website,
  _relativeURL,
  _ID,
  info,
}) {
  const setLink = (link, defaultLink) => {
    if (link && link !== "/") {
      return link;
    }
    return defaultLink;
  };

  const list = [
    {
      name: "twitter",
      value: setLink(twitter, "https://twitter.com/orbs_network"),
      show: twitter,
    },
    {
      name: "telegram",
      value: setLink(telegram, "https://t.me/OrbsNetwork"),
      show: telegram,
    },
    {
      name: "github",
      value: setLink(github, "https://github.com/defi-org-code"),
      show: github,
    },
    { name: "website", value: website, show: website },
    { name: "info", value: info, show: info },
  ];

  return (
    <div className="socials">
      {list.map((social) => {
        if (!social.show) {
          return null;
        }
        return (
          <a href={social.value} key={social.name} target="_blank">
            <img
              src={generateUrl(
                `../../../assets/images/platforms/${social.name}.svg`,
                _relativeURL,
                _ID
              )}
            />
            <p>{social.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;

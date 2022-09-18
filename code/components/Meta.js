import React from "react";
import { defaultDescription, defaultImage, defaultTitle } from "../consts";
import { handleUrl } from "../utils";

const MetaTags = ({ description, title, image, _relativeURL, _ID, url }) => {
  const generateUrl = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <React.Fragment>
      <link
        rel="shortcut icon"
        href={generateUrl("/assets/public/favicon.ico")}
        type="image/x-icon"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || "https://www.defi.org/"} />
      <meta property="og:site_name" content="Defi" />
      <meta property="og:image" content={generateUrl(image || defaultImage)} />
      <meta
        property="og:image:secure_url"
        content={generateUrl(image || defaultImage)}
      />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@orbs_network" />
      <meta name="twitter:image" content={generateUrl(image || defaultImage)} />
      <meta name="twitter:creator" content="@Defi.org" />
    </React.Fragment>
  );
};

export default MetaTags;

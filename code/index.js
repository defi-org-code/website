import React from "react";
import MetaTags from "./components/Meta";
import { defaultTitle } from "./consts";
import { generateUrl } from "./utils";

const Page = (props) => {
  const {
    title,
    navbar,
    footer,
    script,
    _relativeURL,
    _ID,
    main,
    id = "",
  } = props;

  return (
    <html>
      <head>
        <link
          href="https://vjs.zencdn.net/7.20.2/video-js.css"
          rel="stylesheet"
        />

        <title>{title || defaultTitle}</title>
        <MetaTags {...props} />

        <link
          rel="stylesheet"
          href={generateUrl(`/assets/css/index.css`, _relativeURL, _ID)}
        />
      </head>
      <body id={id}>
        <div className="app-wrapper">
          {navbar}
          {main}

          {footer}
        </div>
        {script != undefined ? (
          <script
            type="module"
            src={generateUrl(`/assets/js/${script}.js`, _relativeURL, _ID)}
          />
        ) : null}
        <script
          type="module"
          src={generateUrl(`/assets/js/index.js`, _relativeURL, _ID)}
        />

        <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
      </body>
    </html>
  );
};

export default Page;

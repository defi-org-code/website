// custom markdown extensions
module.exports = exports = function renderer({
  Marked,
  _ID,
  _parents,
  _storeSet,
  _store,
  _nav,
  _globalProp,
  _relativeURL,
}) {
  Marked.heading = (text, level) => {
    let className = `title-h${level}`;
    switch (level) {
      case 1:
        className += " title";
        break;
      case 2:
        className += " sub-title";
        break;
      default:
        break;
    }
    return `<h${level} id="${text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")}"  class='${className}'
    >${text}</h${level}>\n`;
  };

  Marked.paragraph = (text) => {
    switch (text) {
      case "":
        return null;
      case "...":
        return `<p  class='text dots'>&middot;&middot;&middot;</p>`;

      default:
        return `<p  class='text'>${text}</p>`;
    }
  };

  // example for adding a class
  Marked.hr = () => {
    return `<hr class="my-custom-class">\n`;
  };

  Marked.relativeLink = (src) => {
    return _relativeURL(src, _ID);
  };

  // making all links relative
  Marked.link = (href, title, text) => {
    if (title === "disabled") {
      return `<a href="mailto:${href}"${
        title ? `title="${title}"` : ""
      } class='disabled-link' rel="noopener">${text}</a>`;
    }
    if (title === "email") {
      return `<a href="mailto:${href}"${
        title ? `title="${title}"` : ""
      } class='email-link' rel="noopener">${text}</a>`;
    }

    if (title === "blog") {
      return `<a href="${_relativeURL(`blog/${href}`, _ID)}"${
        title ? ` title="${title}"` : ""
      } rel="noopener">${text}</a>`;
    }

    if (href.startsWith("http://") || href.startsWith("https://")) {
      return `<a href="${href}"${
        title ? `title="${title}"` : ""
      } rel="noopener" target='_blank'>${text}</a>`;
    }

    return `<a href="${_relativeURL(href, _ID)}"${
      title ? ` title="${title}"` : ""
    } rel="noopener">${text}</a>`;
  };

  // making all images relative
  Marked.image = (href, title, text) => {
    let sourcePath = href;
    if (
      !sourcePath.startsWith("http://") &&
      !sourcePath.startsWith("https://")
    ) {
      sourcePath = _relativeURL(href, _ID);
    }
    let out = `<figure class='image'><img src="${sourcePath}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += "></figure>";
    return out;
  };

  // making all html tags with paths relative
  Marked.html = (html) => {
    // for (const match of html.matchAll(/=\"(\/[^\"]*)\"/)) {
    //   html = html.replace(match[1], _relativeURL(match[1], _ID));
    // }
    return html;
  };

  return Marked;
};

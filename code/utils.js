export const generateUrl = (url, _relativeURL, _ID) => {
    return handleUrl(url, _relativeURL, _ID);
  };


  const isOutherLink = (url) => {
    if (!url) {
      return false;
    }
    return url.startsWith("http") || url.startsWith("https");
  };
  
  export const handleUrl = (url, _relativeURL, _ID) => {
    if (isOutherLink(url)) {
      return url;
    }
    return `${_relativeURL(url, _ID)}`;
  };

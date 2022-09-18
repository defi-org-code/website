import React from "react";
import { generateUrl } from "../utils";

function Post({
  image,
  title,
  author,
  date,
  read_text,
  link,
  _relativeURL,
  _ID,
  description,
}) {
  return (
    <div
      className="post"
      data-title={title}
      data-image={generateUrl(
        image || "../../assets/images/shared/logo.svg",
        _relativeURL,
        _ID
      )}
      data-date={date}
      data-read={read_text}
      data-link={link}
      data-description={description}
      data-author={JSON.stringify(author)}
    ></div>
  );
}

export default Post;

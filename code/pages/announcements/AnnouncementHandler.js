import React from "react";
import Post from "../../components/Post";
import AnnouncementPage from "./AnnouncementPage";

function AnnouncementHandler(props) {
    const { link, _ID } = props
  if (!_ID.split("/")[1] || _ID.split("/")[1] !== link) {
    return <Post {...props} />;
  }

  return <AnnouncementPage {...props} />;
}

export default AnnouncementHandler;

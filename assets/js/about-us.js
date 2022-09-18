import { createPostsList, renderPosts } from "./posts.js";

const container = document.querySelector(".announcements-top-stories-list");

const topStoriesList = createPostsList(container);

renderPosts(topStoriesList, container, "top-story");

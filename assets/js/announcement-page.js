import { createPostsList, renderPosts } from "./posts.js";

const relatedContainer = document.querySelector(".related-announcements-list");


const relatedList = createPostsList(relatedContainer);

renderPosts(relatedList, relatedContainer)

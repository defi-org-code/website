import { createPostsList, renderPosts } from "./posts.js";

const allContainer = document.querySelector(".announcements-all");
const newsContainer = document.querySelector(".announcements-news-list");
const topStoriesContainer = document.querySelector(
  ".announcements-top-stories-list"
);

const applicationsContainer = document.querySelector(
  ".announcements-applications-list"
);

const showMoreButton = document.querySelector("#show-more");
const limit = 6;

const allList = createPostsList(allContainer);
const newsList = createPostsList(newsContainer);
const topStoriesList = createPostsList(topStoriesContainer);
const applicationsList = createPostsList(applicationsContainer);

const showMoreAnnouncements = (amount) => {
  const moreItems = allList.splice(0, amount);
  renderPosts(moreItems, allContainer);
  allContainer.style.marginTop = "60px";
  if (allList.length === 0) {
    showMoreButton.style.display = "none";
  }
};

if (showMoreButton) {
  showMoreButton.addEventListener("click", () => showMoreAnnouncements(limit));
}

renderPosts(topStoriesList, topStoriesContainer, "top-story");
renderPosts(applicationsList, applicationsContainer, "application");
renderPosts(newsList, newsContainer, "news");

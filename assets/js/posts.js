export const createPostsList = (container) => {
  if (!container) {
    return [];
  }

  const items = container.querySelectorAll(".post");

  const result = [];
  for (const item of items) {
    const obj = {
      title: item.getAttribute("data-title"),
      image: item.getAttribute("data-image"),
      author: item.getAttribute("data-author"),
      readText: item.getAttribute("data-read"),
      link: item.getAttribute("data-link"),
      date: item.getAttribute("data-date"),
      description: item.getAttribute("data-description"),
    };
    result.push(obj);
  }
  container.innerHTML = null;
  return result;
};

const createAnnouncement = (data, className) => {
  const { title, image, author, readText, link, date, description } = data;

  let authorElement;
  let isAuthorPlainText = false;

  try {
    authorElement = JSON.parse(author)[0].props.dangerouslySetInnerHTML.__html;
  } catch (error) {
    isAuthorPlainText = true;
  }

  const div = document.createElement("div");
  div.classList.add("post");
  if (className) {
    div.classList.add(className);
  }

  const target = link.startsWith("http", "https") ? "_blank" : "";

  const html = `
    <a href=${link} target=${target}>
    <img src = ${image} class='post-img' />
    <div class='post-content'>
        <h3  class='post-title'>${title}</h3>
        ${
          description
            ? `<section class='post-description'>${description}</section>`
            : ""
        }
        <section class='post-bottom'>
       ${
         isAuthorPlainText
           ? `<p>
          ${author.split('"').join("")}
        </p>`
           : authorElement
           ? authorElement
           : ""
       }

        
        <p>
        ${date}
    </p>
    <p>
    ${readText}
    </p>
        </section>
    </div>
    </a>
  `;
  div.innerHTML = html;
  return div;
};

export const renderPosts = (list, container, customClassName) => {
  const className = customClassName || "";
  for (const item of list) {
    const announcement = createAnnouncement(item, className);
    container.append(announcement);
  }
};

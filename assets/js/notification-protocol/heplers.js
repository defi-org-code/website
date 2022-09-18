export const getElement = (element) => {
  try {
    return document.querySelector(element);
  } catch (error) {
    console.error("couldnt find element");
  }
};

export const getElements = (element) => {
  return document.querySelectorAll(element) || [];
};

export const addClass = (element, className) => {
  if (!element) return;
  element.classList.add(className);
};
export const removeClass = (element, className) => {
  if (!element) return;
  element.classList.remove(className);
};

export const addEvent = (element, eventType, customEvent) => {
  if (!element || !customEvent || !eventType) return;
  element.addEventListener(eventType, (e) => customEvent(e));
};

export const getElementAttribute = (element, attr) => {
  if (!element) return;
  return element.getAttribute(attr);
};

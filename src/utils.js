export const reloadWithQueryString = (srt) => {
  window.location.href = `${window.location.pathname}${srt}`;
};

export const getQueryParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

export const setQueryParams = (params) => {
  let urlParams = new URLSearchParams(window.location.search);

  for (let p in params) {
    urlParams.set(p, params[p]);
  }
  reloadWithQueryString(`?${urlParams.toString()}`);
};

export const setBackgroundImage = (element, image) => {
  element.style.backgroundImage = `url(${image})`;
};

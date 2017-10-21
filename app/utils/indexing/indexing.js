/* @flow */

type AllowedToIndexUrls = {
  [string]: boolean
}

export const shouldBeIndexed = (
  url: string,
  urlToIndex: AllowedToIndexUrls,
): boolean => {
  return !!urlToIndex[url];
};

export const ALLOWED_TO_INDEX_URLS: AllowedToIndexUrls = {
  '/': true,
};

export const isObject = (obj: any) => {
  return typeof obj === "object" && obj !== null;
};

export const getObjectType = (obj: any) => Object.prototype.toString.call(obj);

export const removeUrlPostfix = (url: string) => {
  let res = url.split("?")?.[0] ?? "";
  res = res.split("#")?.[0] ?? "";
  return res;
};

export const getUrlQuery = (url: string) => {
  const queryStr = url.split("?")?.[1] ?? "";
  const res = Object.fromEntries(
    queryStr.split("&").map((part) => {
      return part.split("=");
    })
  );
  return res;
};

export const wrapUrlWithQuery = (
  url: string,
  query: { [key: string]: any }
) => {
  if (!query || Object.keys(query).length === 0) return url;
  return `${url}?${Object.entries(query).map(e => e.join('=')).join('&')}`;
};

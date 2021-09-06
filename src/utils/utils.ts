export const isObject = (obj: any) => {
  return typeof obj === "object" && obj !== null;
};

export const getObjectType = (obj: any) => Object.prototype.toString.call(obj);

export const removeUrlPostfix = (url: string) => {
  let res = url.split("?")?.[0] ?? "";
  res = url.split("#")?.[0] ?? "";
  return res;
};

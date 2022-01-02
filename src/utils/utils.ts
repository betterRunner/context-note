import appendQuery from 'append-query';

export const isObject = (obj: any) => {
  return typeof obj === 'object' && obj !== null
}

export const getObjectType = (obj: any) => Object.prototype.toString.call(obj)

export const removeUrlPostfix = (url: string) => {
  let res = url.split('?')?.[0] ?? ''
  res = res.split('#')?.[0] ?? ''
  return res
}

export const getUrlQuery = (url: string) => {
  const queryStr = url.split('?')?.[1] ?? ''
  const res = Object.fromEntries(
    queryStr.split('&').map((part) => {
      return part.split('=')
    })
  )
  return res
}

// export const appendUrlQuery = (
//   url: string,
//   query: { [key: string]: any }
// ) => {
//   return appendQuery(url, query)
// }

export const appendUrlQuery = (
  baseUrl: string,
  params: Record<string, any>
): string => {
  const Url = new URL(baseUrl);
  const urlParams: URLSearchParams = new URLSearchParams(Url.search);
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key]);
    }
  }
  Url.search = urlParams.toString();
  return Url.toString();
};
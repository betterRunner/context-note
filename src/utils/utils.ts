export const isObject = (obj: any) => {
  return typeof obj === 'object' && obj !== null
}

export const getObjectType = (obj: any) => Object.prototype.toString.call(obj)

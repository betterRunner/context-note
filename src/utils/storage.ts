// write the storage in order
let queue: [string, any][] = [];
const _set = (key: string, value: any) => {
  return new Promise((resolve) => {
    queue.push([key, value]);
    // TODO: use `chrome.storage.local` instead of `chrome.storage.sync` since the synchronization has an issue.
    const setter = () => chrome.storage.local.set({ [key]: value }, () => {
      queue.shift();
      if (queue.length) {
        setter();
      }
    });
    if (queue.length === 1) {
      setter();
    }
    resolve(null);
  })
}

const _get = (key: string) =>
  new Promise((resolve) => {
    chrome.storage.local.get([key], function(val: any) {
      const res = val?.[key];
      resolve(res);
    });
  });

export function set(key: string, value: any) {
  return _set(key, value);
}

export function get(key: string) {
  return _get(key);
}

export async function addItemToArr(arrKey: string, val: any) {
  const arr = ((await _get(arrKey)) as any[]) ?? [];
  arr.push(val);
  await set(arrKey, arr);
  return arr;
}

export async function delItemFromArr(
  arrKey: string,
  val: string,
  valKey?: string
) {
  const arr = ((await _get(arrKey)) as any[]) ?? [];
  const index = arr.findIndex((ele) =>
    valKey ? ele?.[valKey] === val : ele === val
  );
  if (index !== -1) {
    arr.splice(index, 1);
    await set(arrKey, arr);
  }
  return arr;
}

const _operArrItem = async (
  arrKey: string,
  itemKey: string,
  itemVal: string,
  oper: (item: any) => any
) => {
  const arr = ((await _get(arrKey)) as any[]) ?? [];
  const index = arr.findIndex((ele) => itemKey ? ele?.[itemKey] === itemVal : ele === itemVal);
  if (index !== -1) {
    // run the `oper` to get new item
    const newItem = oper(arr[index]);
    arr.splice(index, 1, newItem);
    await set(arrKey, arr);
  }
  return arr;
};

export async function updateArrItemProperty(
  arrKey: string,
  itemKey: string,
  itemVal: string,
  key: string,
  val: any
) {
  return _operArrItem(arrKey, itemKey, itemVal, (item) => ({
    ...item,
    [key]: val,
  }));
}

export async function addItemToArrProperty(
  arrKey: string,
  itemKey: string,
  itemVal: string,
  arrPropKey: string,
  val: any,
  checkDuplicate: boolean = true,
) {
  return _operArrItem(arrKey, itemKey, itemVal, (item) => {
    const arrProp = item?.[arrPropKey] || [];
    const insert = checkDuplicate ? !arrProp.includes(val) : true;
    insert && arrProp.push(val);
    return {
      ...item,
      [arrPropKey]: arrProp,
    };
  });
}

export async function delItemFromArrProperty(
  arrKey: string,
  itemKey: string,
  itemVal: string,
  arrPropKey: string,
  val: any,
  valKey?: string
) {
  return _operArrItem(arrKey, itemKey, itemVal, (item) => {
    const arrProp = item?.[arrPropKey] || [];
    const index = arrProp.findIndex((ele: any) =>
      valKey ? ele?.[valKey] === val : ele === val
    );
    if (index !== -1) {
      arrProp.splice(index, 1);
    }
    return {
      ...item,
      [arrPropKey]: arrProp,
    };
  });
}

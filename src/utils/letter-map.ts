import pinyin, { STYLE_NORMAL } from "pinyin";

export function transArrInfoLetterMap(
  arr: ({ [key: string]: any } | string)[],
  key: string
) {
  const res: { [key: string]: any[] } = {};
  arr.forEach((ele) => {
    const item = key ? (ele as any)[key] : ele;
    const parts = pinyin(item, {
      style: STYLE_NORMAL,
    });
    if (parts.length) {
      let firstLetter = parts[0]?.[0]?.[0].toUpperCase() || "";
      if (firstLetter < 'A' || firstLetter > 'Z') {
        firstLetter = '_'
      }
      res[firstLetter] = res[firstLetter] || [];
      res[firstLetter].push(ele);
    }
  });
  return res;
}

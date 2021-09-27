import pinyin, { STYLE_NORMAL } from "pinyin";
import isChinese from "is-chinese";

export function filterArrBySearchText(
  arr: any[],
  key = "",
  text = "",
  ignoreCase = true
) {
  const _getChPart = (text = "") => {
    return text.replace(/[A-Za-z]/g, "");
  };

  const chPart = _getChPart(text);
  const isTextContainCh = isChinese(chPart);
  if (isTextContainCh) {
    // searchText contains Chinese text
    return arr.filter((e) => {
      const item = key ? e[key] : e;
      return item?.includes(chPart);
    });
  } else {
    return arr.filter((e) => {
      const item = key ? e[key] : e;
      // parse all texts to pinyin parts
      const parts = pinyin(item, {
        style: STYLE_NORMAL,
      });
      let itemStr = parts.map((part) => (part.length ? part[0] : "")).join("");
      itemStr = !ignoreCase ? itemStr : itemStr.toLowerCase();
      text = !ignoreCase ? text : text.toLowerCase();
      return itemStr.includes(text);
    });
  }
}

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

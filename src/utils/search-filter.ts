import pinyin, { STYLE_NORMAL } from "pinyin";
import isChinese from "is-chinese";

export function filterBySearchText(
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

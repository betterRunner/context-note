import { isObject } from "@/utils/utils";
import { getNodeText } from "@/utils/dom";
import { Rect } from "@/types/common";

/**
 * Get the texts list from an node.
 */
function getNodeTextList(node: DocumentFragment): string[] {
  const _getQuery = (node: HTMLElement) => {
    // querySelector query format：
    // {tagName}#{id}.{class1}.{class2} ...(child query) ...(grandchild query)
    let query = "";
    if (node.id) {
      query = `#${node.id}`;
    }
    if (node.className) {
      let className = node.className;
      if (isObject(className)) {
        className = (className as any)?.["baseVal"] || "";
      }
      // TODO: filter the pesudo className temporarily
      className = className
        .split(" ")
        .filter((ele) => !ele.includes(":"))
        .map((className) => `.${className}`)
        .join("");
      query = `${query}${className}`;
    }
    if (node.tagName) {
      query = `${node.tagName}${query}`;
    }
    return query;
  };

  const _iter = (node: HTMLElement, arr: string[] = [], query = "") => {
    // iter and find the most inner dom, get its `query` and `innerText` (the most inner level is the text dom)
    if (!node) return [];
    if (node.childNodes && node.childNodes.length) {
      query = `${query ? query + " " : ""}${_getQuery(node)}`;
      for (const child of Array.from(node.childNodes)) {
        _iter(child as HTMLElement, arr, query);
      }
    } else {
      const text = getNodeText(node);
      arr.push(text);
    }
    return arr;
  };

  let contentList = _iter((node as unknown) as HTMLElement);
  return contentList;
}

/**
 * Filter the rects with duplicated coordinates.
 */
function filterDuplicateRects(rects: Rect[]) {
  const filterRectMap = new Map<string, Rect>();
  for (const rect of rects) {
    const key = `x:${rect.x},y:${rect.y}`;
    if (!filterRectMap.has(key)) {
      filterRectMap.set(key, rect);
    } else {
      const oriRect = filterRectMap.get(key) as Rect;
      if (
        (oriRect.width > rect.width && rect.width > 0) ||
        oriRect.width === 0
      ) {
        filterRectMap.set(key, rect);
      }
    }
  }
  return Array.from(filterRectMap.values());
}

/**
 * Some rects' coordinates are invalid, filter them.
 */
function filterInvalidCoorRects(rects: Rect[]) {
  let excludeRects: Rect[] = [];
  for (let m = 0; m < rects.length; m++) {
    for (let n = 0; n < rects.length; n++) {
      if (m !== n) {
        const rect1 = rects[m];
        const rect2 = rects[n];
        if (
          rect1.x <= rect2.x &&
          rect1.y <= rect2.y &&
          rect1.x + rect1.width >= rect2.x + rect2.width &&
          rect1.y + rect1.height >= rect2.y + rect2.height
        ) {
          const rect = rect2.width === 0 ? rect2 : rect1; // exclude rect2 if rect2's width = 0, otherwise exclude rect1
          excludeRects.push(rect);
        }
      }
    }
  }
  return rects.filter((ele) => !excludeRects.includes(ele));
}

function parseSelectionRects(range: Range) {
  let rects = Array.from(range.getClientRects()).map((r) => ({
    x: r.x,
    y: r.y + window.scrollY,
    width: r.width,
    height: r.height,
  }));
  rects = filterDuplicateRects(rects);
  rects = filterInvalidCoorRects(rects);
  return rects;
}

/**
 * Get the `SelectionMeta` from current mouse selection object.
 */
export interface SelectionMeta {
  rects: Rect[];
  texts: string[];
}
export function parseRectsAndTextFromSelection(): SelectionMeta {
  let rects: Rect[] = [];
  let texts: string[] = [];
  try {
    // use `window.getSelection()` to get the rects of selected texts
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      if (range) {
        // 1. texts
        const cloneFragment = range.cloneContents();
        texts = getNodeTextList(cloneFragment);

        // 2. rects
        rects = parseSelectionRects(range);
      }
    }
  } catch (err) {
    console.log(err);
  }
  return {
    rects,
    texts,
  };
}

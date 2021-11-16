import { v4 as uuid } from "uuid";
import { Rect } from "@/types/common";
import {
  DOMATTR_RECT_GROUP,
  PREFIX_RECT,
  PREFIX_RECT_GROUP,
} from "@/utils/constant";
import { EnumValueVisiteeWithNull } from "ts-enum-util";

function setHighlightStyle(ele: HTMLElement, rect: Rect) {
  const PADDING = 6;
  ele.style.pointerEvents = "none"; // not occupy the click event of the node in this position
  ele.style.position = "absolute";
  ele.style.left = rect.x - PADDING / 2 + "px";
  ele.style.top = rect.y - PADDING / 2 + "px";
  ele.style.width = `${rect.width + PADDING}px`;
  ele.style.height = `${rect.height + PADDING}px`;
  ele.style.background = "rgb(222, 250, 211)";
  ele.style.opacity = "0.5";
  ele.style.content = " ";
}

function findRelatedIds(
  id: string,
  idMap: { [key: string]: string[] }
): [string, string[]] {
  for (const key in idMap) {
    const ids = idMap[key] || [];
    if (ids.includes(id)) {
      return [key, ids];
    }
  }
  return ["", []];
}

function setRectStyleWithIds(ids: string[], key: string, value: string) {
  if (ids.length === 0) return;

  const rects = (document.querySelectorAll(
    (ids.map((id) => `#${id}`) as unknown) as string
  ) as unknown) as HTMLElement[];
  rects.forEach((rect) => {
    ((rect.style as { [key: string]: any }) || {})[key] = value;
  });
}

const groupRectIdsMap: { [key: string]: string[] } = {};
/**
 * Generate the highlight rect doms and register their click event.
 */
export function genHighlightRects(
  noteId: string,
  rects: Rect[] = [],
  clickCb?: (groupId: string) => void
) {
  const groupId = noteId || `${PREFIX_RECT_GROUP}-${uuid()}`;
  groupRectIdsMap[groupId] = [];
  for (const rect of rects) {
    const ele = document.createElement("div");
    const id = `${PREFIX_RECT}-${uuid()}`;
    ele.setAttribute("id", id);
    ele.setAttribute(DOMATTR_RECT_GROUP, groupId);
    // highlight the rect
    setHighlightStyle(ele, rect);
    document.querySelector("body")?.appendChild(ele);
    groupRectIdsMap[groupId].push(ele.id);

    // click event
    document.addEventListener("mouseup", (event) => {
      const withinBoundaries =
        event.pageX >= ele.offsetLeft &&
        event.pageX <= ele.offsetWidth + ele.offsetLeft &&
        event.pageY >= ele.offsetTop &&
        event.pageY <= ele.offsetHeight + ele.offsetTop;
      if (withinBoundaries) {
        const groupId = boldHighlightGroupRects(ele?.id, "");
        clickCb?.(groupId);
      } else {
        unboldHighlightGroupRects(ele?.id);
      }
    });
  }
  return groupId;
}

/**
 * Delete all rects with `noteId`, if `noteId` is not provided, delete all rects.
 */
export function delHighlightRects(noteId?: string | undefined) {
  const query = !noteId
    ? `[${DOMATTR_RECT_GROUP}]`
    : `[${DOMATTR_RECT_GROUP}=${noteId}]`;
  const rectDoms = document.querySelectorAll(query);
  rectDoms.forEach((dom) => {
    dom.parentElement?.removeChild(dom);
  });
}

/**
 * Bold the group highlight rects.
 * @param id one id of the group rects
 * @param groupId the group id
 * @param scrollIntoView if need scrollIntoView when bolding
 * @returns groupId
 */
export function boldHighlightGroupRects(
  id?: string,
  groupId?: string,
  scrollIntoView?: boolean
): string {
  // set all related rects border to dotted
  let relatedIds: string[];
  if (groupId) {
    relatedIds = groupRectIdsMap[groupId] || [];
  } else {
    [groupId, relatedIds] = findRelatedIds(id || "", groupRectIdsMap);
  }
  setTimeout(() => {
    setRectStyleWithIds(relatedIds, "border", "2px dotted #000");
  });
  if (groupId) {
    if (scrollIntoView) {
      // scroll to first rect
      const firstRectId = relatedIds?.[0];
      const firstRect = document.querySelector(`#${firstRectId}`);
      firstRect && firstRect.scrollIntoView({ block: "center" });
    }
  }
  return groupId;
}

/**
 * Unbold the group highlight rects.
 * @param id one id of the group rects.
 */
export function unboldHighlightGroupRects(id: string) {
  // set all related rects border to none
  const [_, relatedIds] = findRelatedIds(id, groupRectIdsMap);
  setRectStyleWithIds(relatedIds, "border", "none");
}

const DOM_ICON_ID = "context-note-logo-icon";

let onClickEvt: EventListener;
/**
 * generate a logo icon image dom on top left of selected text
 * @param x mouse x
 * @param y mouse y
 * @param cb callback when clicked
 * @returns 
 */
export function genLogoIconAndRegisterClickCb(
  x: number,
  y: number,
  cb: () => void
) {
  const iconSize = 35;

  const ele = document
    .querySelector("body")
    ?.appendChild(document.createElement("img")) as HTMLImageElement;
  if (!ele) return;

  ele.id = DOM_ICON_ID;
  ele.style.position = "absolute";
  ele.style.left = `${x}px`;
  ele.style.top = `${y - iconSize}px`;
  ele.style.width = `${iconSize}px`;
  ele.style.height = `${iconSize}px`;
  ele.style.cursor = "pointer";
  ele.style.zIndex = '100';

  // get assets of exteison by `chrome.runtime.getURL`
  // https://stackoverflow.com/questions/11804332/insert-an-image-in-chrome-extension
  ele.src = chrome.runtime.getURL("assets/icon16.png");

  onClickEvt = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cb?.();
    clearLogoIcon();
  };
  ele.addEventListener("mouseup", onClickEvt);
}

export function clearLogoIcon() {
  // delete all logo icon doms
  const eles = document.querySelectorAll(`#${DOM_ICON_ID}`);
  eles.forEach((ele) => {
    onClickEvt && ele.removeEventListener("mouseup", onClickEvt);
    const parent = ele.parentElement;
    if (parent) {
      parent.removeChild(ele);
    }
  });
}

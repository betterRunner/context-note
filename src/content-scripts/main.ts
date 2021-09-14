import { createApp } from "vue";
import ElementPlus from "element-plus";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import "element-plus/theme-chalk/index.css";
import { ClickOutside } from "@element-plus/directives";

import { Note } from "@/types/note";
import { Query } from "@/types/dom";
import { get } from "@/utils/storage";
import mitt, { sendEmitAndWait } from "@/utils/mitt";
import { StorageKeys } from "@/utils/constant";
import { getUrlQuery, removeUrlPostfix } from "@/utils/utils";
import Popup from "./renderer/popup/index.vue";
import { parseRectsAndTextFromSelection } from "./parser/selection-meta";
import { getFormattedTextFromTextList } from "./parser/text-list";
import {
  genHighlightRects,
  boldHighlightGroupRects,
  delHighlightRects,
} from "./renderer/dom/rect";
import {
  clearLogoIcon,
  genLogoIconAndRegisterClickCb,
} from "./renderer/dom/logo-icon";

// create vue instance and bind to extension
const MOUNT_EL_ID = "attonex_clipper";
let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = "";
}
mountEl = document.createElement("div");
mountEl.setAttribute("id", MOUNT_EL_ID);
document.body.appendChild(mountEl);
const vm = createApp(Popup)
  .use(ElementPlus)
  .use(VueClipboard)
  .directive("clickoutside", ClickOutside)
  .mount(mountEl);

// listen messages from `background.ts`
chrome.runtime.onMessage.addListener((message: any) => {
  if (message.toggleVisible) {
    // open the popup by clicking the extension logo
    (vm as any).visible = !(vm as any).visible;
  }
  if (message.updateStorage) {
    // emit to update the storage data by switching tab
    mitt.emit("update-storage");
  }
});

// listen `mouseup` event to judge if any text is selected.
document.addEventListener("mouseup", (e) => {
  clearLogoIcon();
  // if any text is selected, parse the `rects` and `texts` of it
  const { rects, texts } = parseRectsAndTextFromSelection();
  const text = getFormattedTextFromTextList(texts);
  if (text) {
    // show the logo icon which will run the extension function (take the note and etc.) when clicked
    genLogoIconAndRegisterClickCb(e.pageX, e.pageY, async () => {
      // 1. generate the highlight rects dom of selected text and get the `groupId`
      const groupId = genHighlightRects("", rects, async (noteId: string) => {
        await sendEmitAndWait("select-note", noteId);
        (vm as any).visible = true;
      });
      // 2. take the note into notebook
      await sendEmitAndWait("take-note", {
        noteId: groupId, // use `groupId` as `noteId`
        text: text,
        rects: rects,
      });
      // 3. show the notebook
      (vm as any).visible = true;
    });
  }
});

mitt.on("del-note", (noteId) => {
  delHighlightRects(noteId as string);
});

mitt.on("bold-note", (data) => {
  const { id = "", scrollIntoView = false } = data || ({} as any);
  boldHighlightGroupRects("", id, scrollIntoView);
});

async function renderNoteHighlightRects() {
  const url = removeUrlPostfix(window.location.href);
  const notes = (await get(StorageKeys.notes)) as Note[];
  const notesInCurUrl = notes.filter((note) => note.link === url);
  notesInCurUrl.forEach((note) => {
    const { id, rects } = note;
    genHighlightRects(id, rects, async (noteId: string) => {
      await sendEmitAndWait("select-note", noteId);
      (vm as any).visible = true;
    });
  });
}

// initialize the extension
async function initializeExtension() {
  // clean the rects by the last page
  delHighlightRects();
  // render the rects of this page
  await renderNoteHighlightRects();
  // jump to the rect if this page is opened from an item of the notebook
  const { noteId = "" } = getUrlQuery(window.location.href) as Query;
  if (noteId) {
    await sendEmitAndWait("select-note", noteId);
    (vm as any).visible = true;
    boldHighlightGroupRects("", noteId, true);
  }
}
initializeExtension();

// listen url change to redraw rects
// !NOTE: need `setTimeout` to work correctly
setTimeout(() => {
  let lastUrl = window.location.href;
  new MutationObserver(() => {
    const url = window.location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      onUrlChange();
    }
  }).observe(document, { subtree: true, childList: true });

  function onUrlChange() {
    // reinitialize the extension
    initializeExtension();
    // emit to update the storage data
    mitt.emit("update-storage");
  }
});

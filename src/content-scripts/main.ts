import { createApp } from "vue";
import ElementPlus from "element-plus";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import "element-plus/theme-chalk/index.css";
import { ClickOutside } from "@element-plus/directives";

import { Note } from "@/types/note";
import { get } from "@/utils/storage";
import mitt, { sendEmitAndWait } from "@/utils/mitt";
import { StorageKeys } from "@/utils/constant";
import { removeUrlPostfix } from "@/utils/utils";
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

// 1. create vue instance and bind to extension
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

// 2. listen `click` event of extension logo to trigger popup's visibility
chrome.runtime.onMessage.addListener((message: any) => {
  if (message.toggleVisible) {
    (vm as any).visible = !(vm as any).visible;
  }
});

// 3. listen `mouseup` event to judge if any text is selected.
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

// 4. listen `bold-note` event from note book
mitt.on("bold-note", (data) => {
  const { id = "", scrollIntoView = false } = data || ({} as any);
  boldHighlightGroupRects("", id, scrollIntoView);
});

// 5. read all notes of current page, render the highlight rects if location changes.
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

delHighlightRects();
renderNoteHighlightRects();

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
    console.log('url update');
    delHighlightRects();
    renderNoteHighlightRects();
  }
});

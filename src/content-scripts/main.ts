import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Popup from './Popup.vue'
import 'element-plus/lib/theme-chalk/index.css'

import { demoHtml } from './samples/dom'
import { parseRectsAndTextFromSelection, SelectionMeta } from './parser/selection-meta'
import { getFormattedTextFromTextList } from './parser/text-list'
import { highlightRects } from './renderer/highlight'

const MOUNT_EL_ID = 'attonex_clipper'

let mountEl = document.getElementById(MOUNT_EL_ID)
if (mountEl) {
  mountEl.innerHTML = ''
}
mountEl = document.createElement('div')
mountEl.setAttribute('id', MOUNT_EL_ID)
document.body.appendChild(mountEl)
const vm = createApp(Popup)
  .use(ElementPlus)
  .mount(mountEl)

chrome.runtime.onMessage.addListener((message) => {
  if (message.toggleVisible) {
    ;(vm as any).visible = !(vm as any).visible
  }
})

const demoPageDiv = document.createElement('div')
demoPageDiv.innerHTML = demoHtml;
document.body.appendChild(demoPageDiv)

document.addEventListener('mouseup', () => {
    console.log('mouse up')
    const { rects, texts } = parseRectsAndTextFromSelection()
    const text = getFormattedTextFromTextList(texts)
    highlightRects(rects)
    console.log('text', text)
})
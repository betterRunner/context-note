import { isObject } from '../../utils/utils'
import { getNodeText } from '../../utils/dom'

/// 获取一个html node的文本行数组
function getNodeTextList(node: DocumentFragment): string[] {
  const _getQuery = (node: HTMLElement) => {
    // querySelector查询格式：
    // {tagName}#{id}.{class1}.{class2} ...(子query) ...(孙query)
    let query = ''
    if (node.id) {
      query = `#${node.id}`
    }
    if (node.className) {
      let className = node.className
      if (isObject(className)) {
        className = className['baseVal']
      }
      // note: 暂时过滤伪类的className
      className = className
        .split(' ')
        .filter((ele) => !ele.includes(':'))
        .map((className) => `.${className}`)
        .join('')
      query = `${query}${className}`
    }
    if (node.tagName) {
      query = `${node.tagName}${query}`
    }
    return query
  }

  const _iter = (node: HTMLElement, arr: string[] = [], query = '') => {
    // 递归找到最后一层dom，获取它的query和innerText（最后一层dom才是文本）
    if (!node) return []
    if (node.childNodes && node.childNodes.length) {
      // console.log('children', node.childNodes)
      query = `${query ? query + ' ' : ''}${_getQuery(node)}`
      for (const child of Array.from(node.childNodes)) {
        // console.log('child', child)
        _iter(child as HTMLElement, arr, query)
      }
    } else {
      // console.log(node)
      const text = getNodeText(node)
      arr.push(text)
    }
    return arr
  }

  let contentList = _iter((node as unknown) as HTMLElement)
  return contentList
}

function filterDuplicateRects(rects: DOMRect[]) {
  const filterRectMap = new Map<string, DOMRect>()
  for (const rect of rects) {
    const key = `x:${rect.x},y:${rect.y}`
    if (!filterRectMap.has(key)) {
      filterRectMap.set(key, rect)
    } else {
      const oriRect = filterRectMap.get(key) as DOMRect;
      if ((oriRect.width > rect.width && rect.width > 0) || oriRect.width === 0) {
        filterRectMap.set(key, rect)
      }
    }
  }
  return Array.from(filterRectMap.values())
}

// 过滤坐标不符合要求的rects
function filterInvalidCoorRects(rects: DOMRect[]) {
  let excludeRects: DOMRect[] = []
  for (let m = 0; m < rects.length; m++) {
    for (let n = 0; n < rects.length; n++) {
      if (m !== n) {
        const rect1 = rects[m]
        const rect2 = rects[n]
        if (
          rect1.x <= rect2.x &&
          rect1.y <= rect2.y &&
          rect1.x + rect1.width >= rect2.x + rect2.width &&
          rect1.y + rect1.height >= rect2.y + rect2.height
        ) {
          console.log('exclude', rect1, rect2)
          const rect = rect2.width === 0 ? rect2 : rect1 // 如果rect2 width为0则exclude rect2，否则exclude rect1
          excludeRects.push(rect)
        }
      }
    }
  }
  return rects.filter((ele) => !excludeRects.includes(ele))
}

/**
 * 获取包裹选中文本的元信息：
 * 1. 矩形区域数组：包括了坐标信息的rect
 * 2. 文本数组
 */
export interface SelectionMeta {
  rects: DOMRect[]
  texts: string[]
}
export function parseRectsAndTextFromSelection(): SelectionMeta {
  let rects: DOMRect[] = []
  let texts: string[] = []
  try {
    // 借助`window.getSelection()`获取当前由文本鼠标拉取区间的对象
    const selection = window.getSelection()
    if (selection) {
      const range = selection.getRangeAt(0)
      if (range) {
        const cloneFragment = range.cloneContents()
        console.log('clone fragment', cloneFragment)
        // 获取`selection`包括的文本
        texts = getNodeTextList(cloneFragment)
        console.log('contentList', texts)
        rects = Array.from(range.getClientRects()).map((r) => ({
          ...r,
          y: r.y + window.scrollY
        }))
        // 过滤: (1) 坐标重复 (2) 区域重叠 (3) 坐标不符合要求的rects
        rects = filterDuplicateRects(rects)
        console.log('rects', rects)
        rects = filterInvalidCoorRects(rects)
        console.log('rects', rects)
      }
    }
  } catch (err) {
    console.log(err)
  }
  return {
    rects,
    texts
  }
}

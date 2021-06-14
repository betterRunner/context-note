const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null
}

const getObjectType = (obj) => Object.prototype.toString.call(obj)

const getNodeText = (node) => {
  let text = ''
  const objType = getObjectType(node)
  switch (objType) {
    case '[object HTMLTimeElement]': {
      text = node.dateTime
      break
    }
    case '[object Text]': {
      text = node.textContent
      break
    }
    case '[object HTMLSpanElement]': {
      text = node.innerText
      break
    }
    default: {
      break
    }
  }
  console.log(typeof node, Object.prototype.toString.call(node))
  return text
}

function combineConentList(arr) {
  // 整理每一行的内容：
  arr = arr.map((text) => {
    if (/^[\s\n ][\s\n ]*[\s\n ]$/.test(text)) {
      // 如果这一行只包含`\n`和` `，则去掉` `
      return text.replace(/ +/g, '')
    } else {
      return text
    }
  })
  // (1) 连续空格替换为1个空格
  // (2) 连续换行替换为1个换行
  // (3) `\n+\W\n+`替换为`\W`（有的分隔符会当作换行需要去掉换行）
  return arr
    .join('')
    .replace(/ +/g, ' ')
    .replace(/\n+/g, '\n')
    .replace(/\n+(\W)\n+/g, '$1')
}

/// 获取一个html node的文本行数组
function getNodeContentList(node) {
  const _getQuery = (node) => {
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
      // console.log('classname', node.className, className)
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

  const _iter = (node, arr = [], query = '') => {
    // 递归找到最后一层dom，获取它的query和innerText（最后一层dom才是文本）
    if (!node) return
    if (node.childNodes && node.childNodes.length) {
      // console.log('children', node.childNodes)
      query = `${query ? query + ' ' : ''}${_getQuery(node)}`
      for (const child of node.childNodes) {
        // console.log('child', child)
        _iter(child, arr, query)
      }
    } else {
      // console.log(node)
      const text = getNodeText(node)
      arr.push(text)
    }
    return arr
  }

  let contentList = _iter(node)
  return contentList
}

/// 获取包裹选中文本的信息：
///   1.矩形区域数组：包括了坐标信息的rect
///   2.文本数组
export function getSelecetdTextRects() {
  let rects = [],
    texts = [],
    text
  try {
    // 借助`window.getSelection()`获取当前由文本鼠标拉取区间的对象
    const selection = window.getSelection()
    if (selection) {
      const range = selection.getRangeAt(0)
      if (range) {
        const cloneFragment = range.cloneContents()
        console.log('clone fragment', cloneFragment)
        // 获取`selection`包括的文本
        texts = getNodeContentList(cloneFragment)
        text = combineConentList(texts)
        console.log('contentList', texts, text)
        const cRects = Array.from(range.getClientRects())
        const filterRectDict = {}
        cRects.forEach((rect) => (rect.y = rect.y + window.scrollY))
        for (const rect of cRects) {
          const key = `x:${rect.x},y:${rect.y}`
          filterRectDict[key] = filterRectDict[key] || rect
          if (
            (filterRectDict[key].width > rect.width && rect.width > 0) ||
            filterRectDict[key].width === 0
          ) {
            filterRectDict[key] = rect
          }
        }
        rects = Object.keys(filterRectDict).map((key) => filterRectDict[key])
        console.log('rects', filterRectDict)
        let excludeRects = []
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
        rects = rects.filter((ele) => !excludeRects.includes(ele))

        console.log(window.scrollY)
        console.log('rects', rects)
      }
    }
  } catch (err) {
    console.log(err)
  }
  return rects
}

/// 借助rect的坐标高亮rects（由于是坐标因此rects可以存储起来后续反显）
export function highlightRects(rects = []) {
  for (const rect of rects) {
    const ele = document.createElement('div')
    ele.style.position = 'absolute'
    ele.style.left = rect.x + 'px'
    ele.style.top = rect.y + 'px'
    ele.style.width = `${rect.width}px`
    ele.style.height = `${rect.height}px`
    ele.style.background = 'yellow'
    ele.style.opacity = 0.2
    ele.style.content= ' '
    document.querySelector('body').appendChild(ele)
  }
}

// setTimeout(() => {
//   const rects = getSelecetdTextRects()
//   const res = highlightRects(rects)
//   console.log('123')
// }, 5000)

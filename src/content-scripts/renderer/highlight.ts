/// 借助rect的坐标高亮rects（由于是坐标因此rects可以存储起来后续反显）
export function highlightRects(rects: DOMRect[] = []) {
  for (const rect of rects) {
    const ele = document.createElement('div')
    ele.style.position = 'absolute'
    ele.style.left = rect.x + 'px'
    ele.style.top = rect.y + 'px'
    ele.style.width = `${rect.width}px`
    ele.style.height = `${rect.height}px`
    ele.style.background = 'yellow'
    ele.style.opacity = '0.2'
    ele.style.content = ' '
    document.querySelector('body')?.appendChild(ele)
  }
}
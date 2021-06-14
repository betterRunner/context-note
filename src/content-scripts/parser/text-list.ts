export function getFormattedTextFromTextList(arr: string[]) {
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
/**
 * Format text of text list.
 */
export function getFormattedTextFromTextList(arr: string[]) {
  // format lines
  arr = arr.map((text) => {
    if (/^[\s\n ][\s\n ]*[\s\n ]$/.test(text)) {
      // if this line only contains `\n` and ` `, remove ` `
      return text.replace(/ +/g, "");
    } else {
      return text;
    }
  });
  // (1) continuous spaces -> one space
  // (2) continuous `\n` -> one `\n`
  // (3) `\n+\W\n+` -> `\W` (some delimiter would be separated by two `\n`)
  const res = arr
    .join("")
    .replace(/ +/g, " ")
    .replace(/\n+/g, "\n")
    .replace(/\n+(\W)\n+/g, "$1");
  return res;
}

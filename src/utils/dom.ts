import { getObjectType } from "../utils/utils";

export const getNodeText = (node: any): string => {
  let text = "";
  const objType = getObjectType(node);
  switch (objType) {
    case "[object HTMLTimeElement]": {
      text = node.dateTime || "";
      break;
    }
    case "[object Text]": {
      text = node.textContent || "";
      break;
    }
    case "[object HTMLSpanElement]": {
      text = node.innerText || "";
      break;
    }
    // TODO: more options
    default: {
      break;
    }
  }
  return text;
};

export function getDomQueryPath(el: HTMLElement) {
  if (!el) return '';

  const stack = [];
  while (el.parentNode != null) {
    let sibCount = 0;
    let sibIndex = 0;
    for (let i = 0; i < el.parentNode.childNodes.length; i++) {
      const sib = el.parentNode.childNodes[i];
      if (sib.nodeName == el.nodeName) {
        if (sib === el) {
          sibIndex = sibCount;
        }
        sibCount++;
      }
    }
    const name = el.nodeName.toLowerCase();
    if (typeof el.hasAttribute === 'function' && el.hasAttribute("id") && el.id != "") {
      stack.unshift(`${name}#${el.id}`);
    } else if (sibCount > 1) {
      stack.unshift(`${name}:nth-of-type(${sibIndex + 1})`);
    } else {
      stack.unshift(name);
    }
    el = el.parentNode as HTMLElement;
  }

  return stack.slice(1).join(' '); // removes the html element
}

export function filterAncestorNodes(nodes: Node[]) {
  const ancestors = new Set();
  for (const node of nodes) {
    let parent = node.parentNode;
    while(parent) {
      if (nodes.includes(parent) && node.textContent) {
        ancestors.add(parent);
      }
      parent = parent.parentNode;
    }
  }
  return nodes.filter(n => !ancestors.has(n));
}
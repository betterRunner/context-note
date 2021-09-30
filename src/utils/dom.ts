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

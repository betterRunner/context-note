import { $enum } from "ts-enum-util";

import { Oper } from "@/types/common";
import { StorageKeys } from "@/utils/constant";
import { get } from "@/utils/storage";

export const exportOper: Oper = {
  title: "Export notes to json",
  onClick: async () => {
    const exportObj = {};
    const keys = $enum(StorageKeys).keys();
    for (const key of keys) {
      const item = await get(key);
      (exportObj as Record<StorageKeys, any>)[key] = item;
    }
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj, null, 2));
    const dom: HTMLElement | null = document.createElement("a");
    dom?.setAttribute("href", dataStr);
    dom?.setAttribute("download", "context-note.json");
    dom?.click();
  },
  isConfirm: false,
};

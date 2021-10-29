import { $enum } from "ts-enum-util";
import { ElMessageBox, ElMessage } from "element-plus";

import { Oper } from "@/types/common";
import { StorageKeys } from "@/utils/constant";
import { get, set } from "@/utils/storage";
import mitt from "@/utils/mitt";

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

export const importOper: Oper = {
  title: "Import notes from json",
  onClick: async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const errMsg =
      "The parsing progress gets errors, please make sure to import the json file exported by Context-Note.";
      const file = (e?.target as any)?.files?.[0];
      const fileName = file?.name;
      if (!fileName?.endsWith(".json")) {
        ElMessage.error(
          "The file format is wrong, please make sure to import the json file exported by Context-Note."
        );
        return;
      }
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = async (readerEvent) => {
        const content = readerEvent?.target?.result?.toString(); // this is the content!
        if (!content) {
          ElMessage.error(errMsg);
          return;
        }
        try {
          const json = JSON.parse(content) ?? {};
          const keys = Array.from($enum(StorageKeys).keys()) as string[];
          // is the json valid or not
          const isValid = Object.keys(json).reduce(
            (prev, cur) => (keys.includes(cur) ? prev : false),
            true
          );
          if (!isValid) {
            ElMessage.error(errMsg);
            return;
          }
          const items = (await Promise.all(keys.map((k) => get(k)))).map(
            (item) => item ?? []
          ) as [][];
          const isNotEmpty = items.some((item) => item.length);
          if (isNotEmpty) {
            await ElMessageBox.confirm(
              "You have already saved some notes, are you sure to overwrite them by the new importing one?",
              "Warning",
              {
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                type: "warning",
              }
            )
              .then(res => res)
              .catch(() => {
                return;
              });
          }
          for (const key of keys) {
            console.log(key, json[key])
            await set(key, json[key] ?? []);
          }
          mitt.emit("update-storage", null);
          ElMessage.success(
            `Notes are imported from ${fileName} successfully.`
          );
        } catch (err) {
          ElMessage.error(err as string);
        }
      };
      reader.onerror = () => {
        ElMessage.error(errMsg);
      };
    };
    input.click();
  },
};

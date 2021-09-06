import { Note } from "./note";
import { Tag } from "./tag";
import { StorageKeys } from "@/utils/constant";

export interface Storage {
  [StorageKeys.notes]: Note[];
  [StorageKeys.tags]: Tag[];
}

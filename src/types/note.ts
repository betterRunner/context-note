import type { Delta } from "@vueup/vue-quill";
import { Rect } from './common';

export interface Note {
  id: string;
  createTime: number;
  updateTime: number;
  link: string;
  rawLink: string;
  linkTitle: string;
  content: string;
  tags: string[];
  rects: Rect[];
  note?: Delta;
}

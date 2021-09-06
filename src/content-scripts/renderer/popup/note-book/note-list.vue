<template>
  <div class="note-list-wrapper">
    <Note
      v-for="(note, i) in notes"
      :ref="
        (el) => {
          noteDivs[i] = el;
        }
      "
      :id="note.id"
      :note="note"
      :curNoteId="curNoteId"
      :key="note.id"
      @delete="handleDeleteNote(note)"
      @updateNoteNote="handleUpdateNoteNote"
      @focus="(noteId) => handleSelectNote(noteId, false)"
      @select="(noteId) => handleSelectNote(noteId, true)"
    ></Note>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, inject, ref, computed } from "vue";
import dayjs from "dayjs";
import { Rect } from "@/types/common";
import { Note as TNote } from "@/types/note";
import { Storage } from "@/types/storage";
import mitt from "@/utils/mitt";
import {
  addItemToArr,
  updateArrItemProperty,
  addItemToArrProperty,
  delItemFromArrProperty,
  delItemFromArr,
} from "@/utils/storage";
import { StorageKeys } from "@/utils/constant";
import { removeUrlPostfix } from "@/utils/utils";
import Note from "./note.vue";

export default defineComponent({
  name: "note-list",
  components: {
    Note,
  },
  props: {},
  setup() {
    const storage: Storage = inject("storage", {
      notes: [],
      tags: [],
    });
    const notes = computed<TNote[]>(() => storage.notes);

    /// create note
    const noteDivs = ref([]);
    // make sure to reset the refs before each update
    onBeforeUpdate(() => {
      noteDivs.value = [];
    });
    // listen the `take-note` event
    mitt.on("take-note", async (data) => {
      const { noteId = "", text = "", rects = [] } = data as {
        noteId: string;
        text: string;
        rects: Rect[];
      };

      // 1. create the note item
      const note: TNote = {
        id: noteId,
        createTime: dayjs().unix(),
        updateTime: dayjs().unix(),
        link: removeUrlPostfix(window.location.href),
        content: text,
        rects: rects,
        tags: [],
      };
      storage.notes = await addItemToArr(StorageKeys.notes, note);

      // make sure the note dom is created
      setTimeout(() => {
        // 2. scroll to the note item
        const divNote = (noteDivs.value[noteDivs.value.length - 1] as {
          $el: HTMLElement;
        })?.$el;
        if (divNote) {
          divNote.scrollIntoView();
        }

        // 3. focus the content editor of this note
        mitt.emit("focus-editor", note.id);
      });

      // 4. send back the cb event
      mitt.emit("take-note-cb", note.id);
    });
    // liseten the `select-note` event
    mitt.on("select-note", (noteId) => {
      const divNote = document.querySelector(`#${noteId}`);
      if (divNote) {
        divNote.scrollIntoView({
          block: "center",
        });
      }
      mitt.emit("focus-editor", noteId);
      mitt.emit("select-note-cb", noteId);
    });
    // listen the `update-note-tag` event
    mitt.on("update-note-tag", async (data) => {
      const { noteId = "", tag = "", isAddOrDelete = false } = data as any;
      const fn = isAddOrDelete ? addItemToArrProperty : delItemFromArrProperty;
      storage.notes = await fn(StorageKeys.notes, "id", noteId, "tags", tag);
    });

    /// update note of note
    const handleUpdateNoteNote = async (data: any) => {
      const { id = "", content } = data || {};
      storage.notes = await updateArrItemProperty(
        StorageKeys.notes,
        "id",
        id,
        "note",
        content
      );
    };

    /// delete note
    const handleDeleteNote = async (note: TNote) => {
      const { id } = note;
      // delete id from  `noteIds` of all tags
      storage.tags.forEach((tag) => {
        const index = tag.noteIds.findIndex((nid) => nid === id);
        if (index !== -1) {
          tag.noteIds.splice(index, 1);
        }
      });
      // delete note from `notes`
      storage.notes = await delItemFromArr(StorageKeys.notes, id, "id");
      // delete highlight rects dom
      mitt.emit("del-note", id);
    };

    /// select note
    const curNoteId = ref("");
    const handleSelectNote = (id: string, scrollIntoView: boolean) => {
      curNoteId.value = id;
      mitt.emit("bold-note", {
        id,
        scrollIntoView,
      });
    };

    return {
      notes,
      noteDivs,

      handleUpdateNoteNote,

      handleDeleteNote,

      curNoteId,
      handleSelectNote,
    };
  },
});
</script>

<style scoped>
.note-list-wrapper {
  padding: 20px;
}
</style>

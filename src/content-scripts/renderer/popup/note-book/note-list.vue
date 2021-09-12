<template>
  <div v-if="notes.length" class="note-list-wrapper">
    <el-input
      v-model="searchText"
      @onChange="handle"
      placeholder="search your notes.."
      class="note-list-search"
      size="mini"
    >
      <template #prefix>
        <i class="el-input__icon el-icon-search"></i>
      </template>
    </el-input>
    <Note
      v-for="(note, i) in searchedNotes"
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
  <div class="note-list-empty" v-else>
    <h2 class="note-list-empty-title">Your notebook is empty.</h2>
    <p class="note-list-empty-content">
      Take your first note by selecting any text on the webpage and then click the popup
      icon!
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, inject, ref, computed } from "vue";
import dayjs from "dayjs";
import { Delta } from "@vueup/vue-quill";

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
import { filterBySearchText } from "@/utils/search-filter";
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

    /// search note
    const searchText = ref("");
    const searchedNotes = computed(() => {
      const notes = storage.notes;

      if (!searchText.value) return notes;

      const plainNotes = notes.map((n) => ({
        id: n.id,
        plainText: (n.note as Delta)?.ops
          ?.map((o: { insert: any }) => o?.insert || "")
          .join(""),
      }));
      const filteredPlainNoteIds = filterBySearchText(
        plainNotes,
        "plainText",
        searchText.value
      ).map((n) => n.id);
      // fitler by `searchText` in the following order
      let ids = [
        // 1. filter by content
        ...filterBySearchText(notes, "content", searchText.value).map((n) => n.id),
        // 2. filter by plain note
        ...filteredPlainNoteIds,
        // 3. filter by tags
        ...notes
          .filter((n) => !!filterBySearchText(n.tags, "", searchText.value).length)
          .map((n) => n.id),
        // 4. filter by link
        ...notes.filter((n) => n.link.includes(searchText.value)).map((n) => n.id),
      ];
      // remove the duplicated ids
      ids = Array.from(new Set(ids));
      return ids.map((id) => notes.find((n) => n.id === id)).filter((n) => !!n);
    });

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
      const tags = storage.tags.filter(t => t.noteIds.includes(id));
      
      // delete id from  `noteIds` of all tags
      for (const tag of tags) {
        storage.tags = await delItemFromArrProperty(
          StorageKeys.tags,
          "id",
          tag.id,
          "noteIds",
          id,
          ""
        );
        if (tag.noteIds.length < 2) {
          // if the tag `noteIds` is empty, delete the tag also
          storage.tags = await delItemFromArr(StorageKeys.tags, tag.id, "id");
        }
      }
      // delete note from `notes`
      storage.notes = await delItemFromArr(StorageKeys.notes, id, "id");
      // delete highlight rects dom
      mitt.emit("del-note", id);
    };

    /// select note
    const curNoteId = ref("");
    const handleSelectNote = (id: string, scrollIntoView: boolean) => {
      curNoteId.value = id;
      id && mitt.emit("bold-note", {
        id,
        scrollIntoView,
      });
    };

    return {
      notes,
      noteDivs,

      searchText,
      searchedNotes,

      handleUpdateNoteNote,

      handleDeleteNote,

      curNoteId,
      handleSelectNote,
    };
  },
});
</script>

<style lang="less" scoped>
.note-list-wrapper {
  padding: 20px;
}
.note-list-search {
  margin-bottom: 10px;
  background: #fff !important;
}
.note-list-empty {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .note-list-empty-title {
    font-weight: bold;
    color: #fff;
  }
  .note-list-empty-content {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
}
</style>

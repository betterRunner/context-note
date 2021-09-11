<template>
  <div class="note-book-wrapper">
    <NoteList></NoteList>
    <TagBook
      v-show="!!curNoteId"
      :noteId="curNoteId"
      :coor="tagBookCoor"
      @close="handleCloseTagBook"
    ></TagBook>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import mitt from "@/utils/mitt";
import { Coor } from "@/types/common";
import TagBook from "../tag-book/index.vue";
import NoteList from "./note-list.vue";
export default {
  components: {
    NoteList,
    TagBook,
  },
  setup(props) {
    const tagBookCoor = ref<Coor>({ x: 0, y: 0 });
    const curNoteId = ref("");

    mitt.on("open-tag-book", ({ noteId, coor }: any) => {
      if (coor) {
        // `setTimeout` to let `handleCloseTagBook` trigger first.
        setTimeout(() => {
          tagBookCoor.value = coor as Coor;
          curNoteId.value = noteId;
        });
      }
    });
    const handleCloseTagBook = () => {
      curNoteId.value = "";
    };

    return {
      tagBookCoor,
      curNoteId,
      handleCloseTagBook,
    };
  },
};
</script>

<style scoped>
.note-book-wrapper {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 500px;
  min-width: 500px;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(100, 108, 255, 0.8);
  opacity: 1;
  border-radius: 10px;
  z-index: 9999;
}
</style>

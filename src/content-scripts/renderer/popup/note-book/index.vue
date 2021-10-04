<template>
  <NoteList :expanded="expanded"></NoteList>
  <TagBook
    v-show="!!curNoteId"
    :noteId="curNoteId"
    :coor="tagBookCoor"
    @close="handleCloseTagBook"
  ></TagBook>
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
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  setup() {
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
</style>

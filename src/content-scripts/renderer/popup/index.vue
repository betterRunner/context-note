<template>
  <div v-show="visible">
    <NoteBook v-clickoutside="handleClickOutside"></NoteBook>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, reactive } from "vue";
import NoteBook from "./note-book/index.vue";
import { Note } from "@/types/note";
import { Tag } from "@/types/tag";
import { Storage } from "@/types/storage";
import { get } from "@/utils/storage";
import mitt from '@/utils/mitt';
import { StorageKeys } from "@/utils/constant";

export default defineComponent({
  components: {
    NoteBook,
  },
  setup() {
    const visible = ref(false);
    const handleClickOutside = () => {
      visible.value = false;
    };

    // global reading `notes` and `tags` from storage and provide to sub components.
    const storage = reactive<Storage>({
      [StorageKeys.notes]: [],
      [StorageKeys.tags]: [],
    });

    const updateStorage = () => {
      get(StorageKeys.notes).then((res) => {
        storage.notes = (res as Note[]) || [];
      });
      get(StorageKeys.tags).then((res) => {
        storage.tags = (res as Tag[]) || [];
      });
    }
    updateStorage();
    mitt.on('update-storage', () => {
      updateStorage();
    })

    provide("storage", storage);

    return {
      visible,
      handleClickOutside,
    };
  },
});
</script>

<style scoped></style>

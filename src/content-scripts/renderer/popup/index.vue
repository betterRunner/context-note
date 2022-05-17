<template>
  <div v-show="visible">
    <div class="popup-wrapper" :style="wrapperStyle">
      <el-icon :size="18" class="popup-close" @click="handleClose"><Close /></el-icon>
      <NoteBook :expanded="appExpanded" v-clickoutside="handleClickOutside" />
      <Footer :width="appWidth" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, reactive, computed } from "vue";
import { Close } from "@element-plus/icons";
import NoteBook from "./note-book/index.vue";
import Footer from "./footer/index.vue";
import { Note } from "@/types/note";
import { Tag } from "@/types/tag";
import { Storage } from "@/types/storage";
import { get } from "@/utils/storage";
import mitt from "@/utils/mitt";
import { StorageKeys, AppWidth } from "@/utils/constant";

export default defineComponent({
  components: {
    Close,
    NoteBook,
    Footer,
  },
  setup() {
    const appWidth = ref<AppWidth>(AppWidth.normal);
    const appExpanded = ref(false);
    mitt.on("expand-collapse-app", (e) => {
      appExpanded.value = e as boolean;
      appWidth.value = e ? AppWidth.expanded : AppWidth.normal;
    });
    const wrapperStyle = computed(() => {
      const maxWidth = window.innerWidth * 0.9;
      const width = appWidth.value > maxWidth ? maxWidth : appWidth.value;
      return {
        width: `${width}px`,
        "min-width": `${width}px`,
        transition: "0.5s",
      };
    });

    const visible = ref(false);
    const handleClickOutside = () => {
      visible.value = false;
    };
    const handleClose = () => {
       visible.value = false;
    }

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
    };
    updateStorage();
    mitt.on("update-storage", () => {
      updateStorage();
    });

    provide("storage", storage);

    return {
      appExpanded,
      appWidth,
      wrapperStyle,
      visible,
      handleClickOutside,
      handleClose,
    };
  },
});
</script>

<style lang="less" scoped>
.popup-wrapper {
  position: fixed;
  right: 0px;
  top: 1vh;
  width: 500px;
  min-width: 500px;
  height: 98vh;
  overflow-y: scroll;
  background-color: rgba(100, 108, 255, 0.8);
  opacity: 1;
  border-radius: 10px;
  z-index: 9999;

  .popup-close {
    position: fixed;
    right: 10px;
    top: 14px;
    cursor: pointer;
    color: white;
  }
}
</style>

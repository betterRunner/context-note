<template>
  <div class="tag-searcher-wrapper">
    <el-input
      v-model="searchText"
      ref="taginput"
      size="mini"
      autofocus
      placeholder="create or search tag.."
      @keydown.enter="handleEnter"
    ></el-input>
  </div>
</template>

<script lang="ts">
import { PropType, ref, watch } from "vue";
import { Tag } from "@/types/tag";
import mitt from "@/utils/mitt";
import { filterArrBySearchText } from "@/utils/text";
export default {
  props: {
    tags: {
      type: Object as PropType<Tag[]>,
      default: [],
    },
  },
  setup(props, ctx) {
    const searchText = ref("");
    watch(
      () => searchText.value,
      (val) => {
        const searchTags = filterArrBySearchText(props.tags, "name", val);
        ctx.emit("on-search", {
          text: searchText.value,
          result: searchTags,
        });
      }
    );
    const taginput = ref(null);
    mitt.on('tag-search-clear', () => {
      searchText.value = "";
    })
    mitt.on('tag-search-focus', () => {
      (taginput.value as unknown as HTMLElement)?.focus();
    })
    const handleEnter = () => {
      if (!searchText.value) return;

      ctx.emit("on-enter", searchText.value);
      searchText.value = "";
    };
    mitt.on("tag-complete-search", () => {
      handleEnter();
    });

    return {
      taginput,
      searchText,
      handleEnter,
    };
  },
};
</script>

<style lang="less" scoped>
.tag-searcher-wrapper {
  border-top: #646cff80 solid 20px;
  padding: 20px 20px;
}
</style>

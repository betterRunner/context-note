<template>
  <!-- show when not searching -->
  <template v-if="searchText">
    <TagList title="" :tags="optionalTags"></TagList>
  </template>
  <!-- show when searching -->
  <template v-else>
    <!-- recent use tags -->
    <TagList
      title="Recent Used"
      :tags="recentTags"
      @onSelect="(tag) => $emit('on-select', tag)"
    ></TagList>
    <!-- A-Z order tags -->
    <TagList
      v-for="key of Object.keys(allTagsMap).sort((a, b) => (a < b ? -1 : 1))"
      :key="key"
      :title="`${key === '_' ? 'Others' : key} (${(allTagsMap[key] || []).length})`"
      :tags="allTagsMap[key] || []"
      @onSelect="(tag) => $emit('on-select', tag)"
    ></TagList>
  </template>
</template>

<script lang="ts">
import { PropType, ref, computed, watch } from "vue";
import dayjs from "dayjs";
import randomColor from "randomcolor";
import { transArrInfoLetterMap } from "@/utils/text";
import { Tag } from "@/types/tag";
import TagList from "./tag-list.vue";
export default {
  components: {
    TagList,
  },
  props: {
    tags: {
      type: Object as PropType<Tag[]>,
      default: [],
    },
    searchText: {
      type: Object as PropType<string>,
      default: "",
    },
    searchTags: {
      type: Object as PropType<Tag[]>,
      default: [],
    },
  },
  setup(props) {
    // recently used tags
    const recentTags = computed(() => props.tags);
    // show the tags in alphabetical order
    const allTagsMap = computed(() => transArrInfoLetterMap(props.tags, "name"));

    // watch and create the optinal tags
    const optionalTags = ref<Tag[]>([]);
    watch(
      () => props.searchText,
      (val) => {
        if (val) {
          const newTag: Tag | null = props.searchTags.find((tag) => tag.id === val)
            ? null
            : {
                id: val,
                name: `Create # ${val} tag`,
                color: randomColor(),
                updateTime: dayjs().unix(),
                noteIds: [],
                isCreating: true,
              };
          optionalTags.value = props.searchTags;
          if (newTag) {
            optionalTags.value.unshift(newTag);
          }
        }
      },
      {
        immediate: true,
      }
    );

    return {
      recentTags,
      allTagsMap,
      optionalTags,
    };
  },
};
</script>

<style lang="less" scoped></style>

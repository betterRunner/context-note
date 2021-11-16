<template>
  <div v-clickoutside="handleClickOutside" class="tag-book-wrapper" :style="tagBookStyle">
    <TagSearcher
      :tags="tagsWithSelect"
      @onSearch="handleSearchTags"
      @onEnter="handleEnterSearch"
    ></TagSearcher>
    <TagSelector
      :tags="tagsWithSelect"
      :searchText="searchText"
      :searchTags="searchTags"
      @onSelect="handleSelectTagItem"
    ></TagSelector>
  </div>
</template>

<script lang="ts">
import { PropType, inject, ref, computed, watch } from "vue";
import dayjs from "dayjs";
import randomColor from "randomcolor";

import { Coor } from "@/types/common";
import { Tag } from "@/types/tag";
import { Storage } from "@/types/storage";
import mitt, { sendEmitAndWait } from "@/utils/mitt";
import {
  addItemToArr,
  addItemToArrProperty,
  delItemFromArr,
  delItemFromArrProperty,
} from "@/utils/storage";
import { StorageKeys } from "@/utils/constant";
import TagSelector from "./tag-selector/index.vue";
import TagSearcher from "./tag-searcher.vue";

export default {
  props: {
    noteId: {
      type: Object as PropType<string>,
      required: true,
    },
    coor: {
      type: Object as PropType<Coor>,
      default: {
        x: 0,
        y: 0,
      },
    },
  },
  components: {
    TagSearcher,
    TagSelector,
  },
  setup(props, ctx) {
    const TAG_BOOK_WIDTH = 400;
    const TAG_BOOK_HEIGHT = 400;
    const TAG_BOOK_MARGIN = 20;

    /// tag book modal
    const tagBookStyle = ref<{ [key: string]: any }>({
      width: `${TAG_BOOK_WIDTH}px`,
      height: `${TAG_BOOK_HEIGHT}px`,
      minHeight: `${TAG_BOOK_HEIGHT}px`,
    });
    watch(() => props.noteId, () => {
      if (props.noteId) {
        mitt.emit('tag-search-focus');
      }
    })
    watch(
      () => props.coor,
      () => {
        let { x = 0, y = 0 } = props.coor;
        // compare y + `TAG_BOOK_HEIGHT` + `TAG_BOOK_MARGIN` with browser height, adjust if overflow
        const wh = window.outerHeight;
        if (y + TAG_BOOK_HEIGHT + TAG_BOOK_MARGIN * 2 > wh) {
          y = y - TAG_BOOK_MARGIN - TAG_BOOK_HEIGHT;
        } else {
          y = y + TAG_BOOK_MARGIN;
        }

        tagBookStyle.value = {
          ...tagBookStyle.value,
          left: `${x}px`,
          top: `${y}px`,
        };
      },
      {
        deep: true,
      }
    );
    const handleClickOutside = () => {
      ctx.emit("close");
      mitt.emit('tag-search-clear');
    };

    const storage: Storage = inject("storage", {
      notes: [],
      tags: [],
    });
    /// mark tags with this noteId to `isSelect`
    const tagsWithSelect = computed(() => {
      return storage.tags.map((tag) => ({
        ...tag,
        isSelect: tag.noteIds.includes(props.noteId),
      }));
    });

    /// search tag
    const searchText = ref("");
    const searchTags = ref<Tag[]>([]);
    const handleSearchTags = ({ text = "", result = [] }) => {
      searchText.value = text;
      searchTags.value = result;
    };
    const handleEnterSearch = (tagName: string) => {
      // when pressing enter, if there is a tag in `searchTags` whose tagName is the same as the search text and is not selected,
      // select it instead of create a new one.
      const sameTag = searchTags.value.find(st => st.name === tagName);
      if (sameTag) {
        sameTag.isSelect || handleSelectTagItem(sameTag);
      } else {
        handleCreateTag(tagName);
      }
    };

    /// create tag
    const handleCreateTag = async (tagName: string) => {
      // update tags db
      storage.tags = await addItemToArr(StorageKeys.tags, {
        id: tagName,
        name: tagName,
        noteIds: [props.noteId],
        color: randomColor(),
        updateTime: dayjs().unix(),
      });

      // update note tags
      mitt.emit("update-note-tag", {
        noteId: props.noteId,
        tag: tagName,
        isAddOrDelete: true,
      });
    };
    /// select tag
    const handleSelectTagItem = async (tag: Tag) => {
      if (tag.isCreating) {
        mitt.emit("tag-complete-search");
        tag.isSelect = true;
      } else {
        tag.isSelect = !tag.isSelect;
        if (tag.isSelect) {
          await sendEmitAndWait("update-note-tag", {
            noteId: props.noteId,
            tag: tag.name,
            isAddOrDelete: true,
          });
          storage.tags = await addItemToArrProperty(
            StorageKeys.tags,
            "id",
            tag.id,
            "noteIds",
            props.noteId
          );
        } else {
          await sendEmitAndWait("update-note-tag", {
            noteId: props.noteId,
            tag: tag.name,
            isAddOrDelete: false,
          });
          storage.tags = await delItemFromArrProperty(
            StorageKeys.tags,
            "id",
            tag.id,
            "noteIds",
            props.noteId
          );
          // if tag's noteIds is empty, delete this tag
          const newTag = storage.tags.find((t) => t.id === tag?.id);
          if (newTag?.noteIds.length === 0) {
            storage.tags = await delItemFromArr(StorageKeys.tags, tag.id, "id");
          }
        }
      }
    };

    return {
      tagBookStyle,
      handleClickOutside,

      tagsWithSelect,
      searchText,
      searchTags,
      handleSearchTags,
      handleEnterSearch,

      handleCreateTag,

      handleSelectTagItem,
    };
  },
};
</script>

<style scoped>
.tag-book-wrapper {
  position: fixed;
  z-index: 10000; /* should be higher than extension mask z-index */
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: rgb(14 30 62 / 8%) 0px 3px 6px 0px;
}
</style>

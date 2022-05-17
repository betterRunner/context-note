<template>
  <div
    class="note-wrapper"
    :class="{ 'note-wrapper__notselected': notSelected }"
    :style="wrapperStyle"
    @click="handleClickNote"
    v-clickoutside="handleClickOutsideNote"
  >
    <!-- website link -->
    <div :id="`link-${note.id}`" class="note-link">
      <span @click="handleOpenLink(note)" class="note-link-content">{{ note.link }}</span>
    </div>

    <!-- opers area -->
    <div class="note-opers">
      <!-- tag=list -->
      <div :id="`note-item-${note.id || ''}`" class="note-tag-wrapper">
        <div
          v-if="tags.length === 0"
          class="note-tag-adder"
          @click="handleOpenTagBook(note?.id)"
        >
          #Add tag..
        </div>
        <div
          v-else
          v-for="tag in tags || []"
          :key="tag.id"
          class="note-tag-item"
          :style="getNoteTagItemStyle(tag)"
          @click="handleOpenTagBook(note.id)"
        >
          {{ `#${tag.name}` }}
        </div>
      </div>
      <!-- time -->
      <div class="note-time">{{ dayjs.unix(note.createTime).format("MM/DD HH:mm") }}</div>
    </div>
    <!-- more opers -->
    <div class="note-more-opers">
      <More direction="column" :size="2" :opers="moreOpers" />
    </div>
    <!-- note content -->
    <p class="note-content">{{ note.content }}</p>
    <!-- note editor -->

    <div
      v-clickoutside="handleClickOutsideEditor"
      :class="[
        'note-editor',
        enableEditor ? 'note-editor__edit' : 'note-editor__readonly',
      ]"
    >
      <QuillEditor
        ref="editorDom"
        v-model:content="editorContent"
        :toolbar="editorToolbar"
        @click="handleClickEditor"
      ></QuillEditor>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, computed, nextTick, PropType } from "vue";
import randomcolor from "randomcolor";
import dayjs from "dayjs";
import { ElMessage } from "element-plus";
import { QuillEditor, Delta } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { toClipboard } from "@soerenmartius/vue3-clipboard"

import { Note } from "@/types/note";
import { Tag } from "@/types/tag";
import { Storage } from "@/types/storage";
import { Coor, Oper } from "@/types/common";
import { Query } from "@/types/dom";
import mitt from "@/utils/mitt";
import { appendUrlQuery } from "@/utils/utils";
import TagBook from "../tag-book/index.vue";
import More from "../shared/more.vue";

export default {
  components: {
    TagBook,
    QuillEditor,
    More,
  },
  props: {
    curNoteId: {
      type: Object as PropType<string>,
      default: "",
    },
    note: {
      required: true,
      type: Object as PropType<Note>,
    },
    expanded: {
      default: false,
    },
  },
  setup(props, ctx) {
    const wrapperStyle = ref({
      borderTop: `8px solid ${randomcolor({
        alpha: 0.5,
      })}`,
      width: `${props.expanded ? 420 : 450}px`,
      maxWidth: `${props.expanded ? 420 : 450}px`,
    });
    const storage: Storage = inject("storage", {
      notes: [],
      tags: [],
    });

    /// is note selected or not
    const notSelected = computed(
      () => props.curNoteId && props.curNoteId !== props.note.id
    );

    /// note link
    const handleOpenLink = (note: Note) => {
      const query: Query = {
        noteId: note.id,
      };
      console.log(note.rawLink);
      const url = appendUrlQuery(note.rawLink, query);
      window.open(url);
    };

    /// more opers
    const moreOpers = ref<Oper[]>([
      {
        title: "Delete",
        onClick: () => {
          ctx.emit("delete");
        },
        isConfirm: true,
      },
      {
        title: "Copy to clipboard",
        onClick: () => {
          const { rawLink = '', linkTitle = '', content = '', tags = [] } : Note = props.note;
          const text = `[${linkTitle || 'unknowned'}](${rawLink})
        - ${content}
        ${tags.join(',')}`;
          toClipboard(text);
          ElMessage.success("Copied");
        }
      }
    ]);

    /// note tags
    const getNoteTagItemStyle = (tag: Tag) => {
      return {
        color: tag.color,
      };
    };
    const tags = computed(() =>
      storage.tags.filter((tag) => props.note.tags.includes(tag.name))
    );
    // open tag book
    const handleOpenTagBook = (noteId: string) => {
      if (noteId) {
        const noteDom = document.querySelector(`#note-item-${noteId}`);
        const rect = noteDom?.getBoundingClientRect();
        if (rect) {
          mitt.emit("open-tag-book", {
            noteId,
            coor: {
              x: rect.left,
              y: rect.top,
            } as Coor,
          });
        }
      }
    };

    /// note editor
    const enableEditor = ref(true);
    // bug: need `nextTick` to work
    nextTick(() => {
      enableEditor.value = false;
    });
    const editorToolbar = [
      [{ header: [1, 2, 3, 4, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike", { color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "blockquote", "code-block"],
      ["clean"],
    ];
    const editorContent = ref<Delta | string>(props.note.note);
    const editorDom = ref(null);
    mitt.on("focus-editor", (id) => {
      if (id === props.note.id) {
        enableEditor.value = true;
        setTimeout(() => {
          const e = (editorDom.value as any)?.editor?.children[0];
          if (e) {
            // TODO: cursor to the end
            e.focus();
          }
        });
      }
      // ensure `handleClickOutsideEditor` trigger first
      nextTick(() => ctx.emit("focus", id));
    });

    const handleClickNote = () => {
      // make sure the select event is trigger after `handleClickOutsideEditor`
      nextTick(() => ctx.emit("select", props.note.id));
    };
    const handleClickOutsideNote = () => {
      // make sure the select event is trigger after `handleClickOutsideEditor`
      nextTick(() => ctx.emit("select", ""));
    }
    const handleClickEditor = () => {
      enableEditor.value = true;
    };
    const handleClickOutsideEditor = () => {
      if (!enableEditor.value) {
        return;
      }

      enableEditor.value = false;
      // save the note
      if (!notSelected.value) {
        // quill would turn `ops` from array to indexes object, turn it back to array
        const content = !editorContent.value
          ? ""
          : {
              ops: Object.values(editorContent.value?.ops || {}),
            };
        ctx.emit("update-note-note", {
          id: props.note.id,
          content: content,
        });
      }
      ctx.emit("select", "");
    };

    return {
      dayjs,
      wrapperStyle,
      notSelected,

      handleOpenLink,

      moreOpers,

      getNoteTagItemStyle,
      tags,
      handleOpenTagBook,

      enableEditor,
      editorToolbar,
      editorContent,
      editorDom,
      handleClickNote,
      handleClickOutsideNote,
      handleClickEditor,
      handleClickOutsideEditor,
    };
  },
};
</script>

<style lang="less" scoped>
.note-wrapper {
  padding: 10px 16px;
  background: white;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 6px 6px 8px 8px;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box !important;
  height: 100%;

  .note-link {
    font-size: 12px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    width: auto;
    color: #409eff;
  }
  .note-link-content {
    cursor: pointer;
  }

  .note-opers {
    font-size: 12px;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    .note-tag-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: auto;
      position: relative;
      font-size: 14px;

      .note-tag-adder {
        cursor: pointer;
        user-select: none;
      }
      .note-tag-item {
        margin: 2px 10px 2px 0;
        cursor: pointer;
      }
    }
    .note-time {
      width: 100px;
      min-width: 100px;
      text-align: right;
      user-select: none;
    }
  }

  .note-content {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
  }

  .note-editor {
    background-color: #eee;
  }
  .note-editor__readonly {
    > :first-child {
      display: none;
    }
    > :nth-child(2) {
      border-top: solid 1px #d1d5db;
      border-radius: 5px;
    }
  }
  .note-editor__edit {
    > :first-child {
      display: flex;
    }
    > :nth-child(2) {
      border-top: none;
    }
  }
}
.note-wrapper__notselected {
  opacity: 0.5;
}
.note-more-opers {
  position: absolute;
  top: 0px;
  right: 10px;
  cursor: pointer;
  padding: 5px;
}
.note-link-opers {
  padding: 5px 0px;
  cursor: pointer;
}
.note-link-oper {
  margin-right: 10px;
  color: #0077cc;
  &:hover {
    color: #0095ff;
  }
}
</style>

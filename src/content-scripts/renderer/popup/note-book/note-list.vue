<script lang="tsx">
import { defineComponent, onBeforeUpdate, inject, ref, computed, nextTick } from "vue";
import dayjs from "dayjs";
import { Delta } from "@vueup/vue-quill";

import { Rect } from "@/types/common";
import { Note as TNote } from "@/types/note";
import { Tag } from "@/types/tag";
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
import { filterArrBySearchText } from "@/utils/text";
import { removeUrlPostfix } from "@/utils/utils";
import Note from "./note.vue";

export default defineComponent({
  name: "note-list",
  components: {
    Note,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const storage: Storage = inject("storage", {
      notes: [],
      tags: [],
    });
    const notes = computed<TNote[]>(() => storage.notes || []);
    const tags = computed<Tag[]>(() => storage.tags || []);

    /// search note
    const searchText = ref("");
    const searchedNotes = computed((): TNote[] => {
      let notes = storage.notes;

      if (searchText.value) {
        const plainNotes = notes.map((n) => ({
          id: n.id,
          plainText: (n.note as Delta)?.ops
            ?.map((o: { insert: any }) => o?.insert || "")
            .join(""),
        }));
        const filteredPlainNoteIds = filterArrBySearchText(
          plainNotes,
          "plainText",
          searchText.value
        ).map((n) => n.id);
        // fitler by `searchText` in the following order
        let ids = [
          // 1. filter by content
          ...filterArrBySearchText(notes, "content", searchText.value).map((n) => n.id),
          // 2. filter by plain note
          ...filteredPlainNoteIds,
          // 3. filter by tags
          ...notes
            .filter((n) => !!filterArrBySearchText(n.tags, "", searchText.value).length)
            .map((n) => n.id),
          // 4. filter by link
          ...notes.filter((n) => n.link.includes(searchText.value)).map((n) => n.id),
        ];
        // remove the duplicated ids
        ids = Array.from(new Set(ids));
        notes = ids
          .map((id) => notes.find((n) => n.id === id))
          .filter((n) => !!n) as TNote[];
      }
      // put the ones with the current location href to the head.
      const href = removeUrlPostfix(window.location.href);
      return [
        ...notes.filter(n => n.link === href),
        ...notes.filter(n => n.link !== href)
      ];
    });

    /// create note
    const noteDivs = ref<Element[]>([]);
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
      const href = window.location.href;
      const note: TNote = {
        id: noteId,
        createTime: dayjs().unix(),
        updateTime: dayjs().unix(),
        link: removeUrlPostfix(href),
        rawLink: href,
        linkTitle: window.document.title ?? '',
        content: text,
        rects: rects,
        tags: [],
      };
      storage.notes = await addItemToArr(StorageKeys.notes, note);

      // make sure the note dom is created
      setTimeout(() => {
        // 2. scroll to the note item
        const divNote = noteDivs.value[noteDivs.value.length - 1]?.$el;
        if (divNote) {
          divNote.scrollIntoView({ block: "center" });
        }

        // 3. focus the content editor of this note
        // make sure above `scrollIntoView` is finished
        setTimeout(() => {
          mitt.emit("focus-editor", note.id);
        });
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

      mitt.emit("update-note-tag-cb");
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
      const tags = storage.tags.filter((t) => t.noteIds.includes(id));

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
      id &&
        mitt.emit("bold-note", {
          id,
          scrollIntoView,
        });
    };

    /// doms
    const domNoteList = (notes: TNote[], expanded?: boolean) => {
      return notes.map((note, i) => (
        <Note
          ref={(el: any) => {
            noteDivs.value[i] = el;
          }}
          note={note as TNote}
          expanded={expanded}
          curNoteId={curNoteId.value}
          onDelete={() => handleDeleteNote(note as TNote)}
          onUpdateNoteNote={handleUpdateNoteNote}
          onFocus={(noteId: string) => handleSelectNote(noteId, false)}
          onSelect={(noteId: string) => handleSelectNote(noteId, true)}
        ></Note>
      ));
    };

    const domTagsNoteList = (tags: Tag[]) => {
      const domTag = (title: string = "", notes: TNote[] = []) => (
        <div class="note-list-tag">
          <div class="note-list-tag-title">{title}</div>
          <div class="note-list-wrap-container">{domNoteList(notes, true)}</div>
        </div>
      );
      if (tags.length) {
        const usedNotes: TNote[] = [];
        const domTags = [];
        for (const t of tags) {
          const notes = searchedNotes.value.filter((n) => t.noteIds.includes(n.id));
          domTags.push(domTag(t.name, notes));
          usedNotes.push(...notes);
        }
        usedNotes.length < searchedNotes.value.length &&
          domTags.push(
            domTag(
              "Others",
              searchedNotes.value.filter((n) => !usedNotes.includes(n))
            )
          );
        return domTags;
      } else {
        return (
          <div class="note-list-wrap-container">{domNoteList(searchedNotes.value, true)}</div>
        );
      }
    };

    return () =>
      notes.value.length ? (
        <div class="note-list-wrapper">
          <el-input
            v-model={searchText.value}
            placeholder="search your notes.."
            class="note-list-search"
            size="mini"
          ></el-input>
          {!props.expanded ? (
            <div class="note-list">{domNoteList(searchedNotes.value)}</div>
          ) : (
            <div class="note-list__expanded">{domTagsNoteList(tags.value)}</div>
          )}
        </div>
      ) : (
        <div class="note-list-empty">
          <h2 class="note-list-empty-title">Your notebook is empty.</h2>
          <p class="note-list-empty-content">
            Take your first note by selecting any text on the webpage and then click the
            popup icon!
          </p>
        </div>
      );
  },
});
</script>

<style lang="less" scoped>
.note-list-wrapper {
  padding: 30px 20px;
  margin-bottom: 20px;

  .note-list-search {
    margin-bottom: 10px;
    background: unset !important;
    max-width: 450px;
  }

  .note-list, .note-list__expanded {
    display: flex;
    flex-direction: column;
  }

  .note-list-tag {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    .note-list-tag-title {
      font-size: 16px;
      color: #f1f1f1;
      font-weight: bold;
    }
  }
  .note-list-wrap-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      margin: 10px 20px 10px 0;
    }
  }
}

.note-list-empty {
  padding: 30px 20px;
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

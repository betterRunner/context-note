<template>
  <div class="tag-list-wrapper">
    <div class="tag-list-title">{{ title }}</div>
    <div class="tag-list-content">
      <el-tag
        v-for="tag in tags"
        :key="tag.id"
        size="small"
        type="info"
        class="tag-item"
        :class="{ 'tag-item-selected': tag.isSelect }"
        @click="handleSelectTagItem(tag)"
      >
        <div class="tag-item-content">
          <el-icon class="tag-item-icon" v-if="tag.isSelect" :size="12"><Check /></el-icon>
          {{ tag.name }}
        </div>
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Check } from "@element-plus/icons";
import { Tag } from "@/types/tag";
export default {
  components: {
    Check,
  },
  props: {
    title: {
      type: Object as PropType<string>,
      default: "",
    },
    tags: {
      type: Object as PropType<Tag[]>,
      default: [],
    },
  },
  setup(props, ctx) {
    const handleSelectTagItem = (tag: Tag) => {
      ctx.emit("on-select", tag);
    };

    return {
      handleSelectTagItem,
    };
  },
};
</script>

<style lang="less" scoped>
.tag-list-wrapper {
  padding: 5px 20px 0 20px;
  font-size: 12px;

  .tag-list-title {
    text-align: left;
    font-weight: bold;
    user-select: none;
  }
  .tag-list-content {
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      cursor: pointer;
      user-select: none;
      margin: 0 10px 10px 0;
      color: #000;
    }
    .tag-item-selected {
      color: rgb(25, 65, 197);
      background-color: rgb(180, 203, 245);
    }
    .tag-item-content {
      display: flex;
      align-items: center;
      .tag-item-icon {
        top: 0 !important;
        right: 0 !important;
      }
    }
  }
}
</style>

<template>
  <el-popover
    placement="bottom-end"
    :width="200"
    trigger="click"
    @click.prevent.stop="() => {}"
  >
    <template #reference>
      <div class="more-icon">
        <div>
          <div v-for="item in [1, 2, 3]" :key="item" class="more-icon-dot"></div>
        </div>
        <div class="more-popup"></div>
      </div>
    </template>
    <!-- delete icon -->

    <div class="more-opers">
      <div
        v-for="oper in opers"
        :key="oper.title"
        class="more-opers-item"
        @click.prevent.stop="() => handleClick(oper)"
      >
        {{ oper.title }}
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ElMessageBox } from "element-plus";
import { Oper } from "@/types/common";

export default {
  props: {
    opers: {
      type: Object as PropType<Oper[]>,
      default: [],
    },
  },
  setup() {
    const handleClick = (oper: Oper) => {
      if (oper.isConfirm) {
        ElMessageBox.confirm("delete this note?", "Warning", {
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          type: "warning",
        }).then(() => {
          oper.onClick();
        });
      } else {
        oper.onClick();
      }
    };

    return {
      handleClick,
    };
  },
};
</script>

<style lang="less" scoped>
.more-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px;

  .more-icon-dot {
    width: 2px;
    height: 2px;
    color: #000;
    content: " ";
    border: 2px solid #999;
    border-radius: 2px;
    margin: 2px;
  }
}
.more-opers {
  .more-opers-item {
    cursor: pointer;
    user-select: none;
  }
}
</style>

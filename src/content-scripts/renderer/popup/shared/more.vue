<template>
  <el-popover
    :placement="placement"
    :width="200"
    trigger="click"
    @click.prevent.stop="() => {}"
  >
    <template #reference>
      <div class="more-icon">
        <div :style="dotWrapperStyle">
          <div
            v-for="item in [1, 2, 3]"
            :key="item"
            :style="dotStyle"
          ></div>
        </div>
      </div>
    </template>

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
import { ref, PropType } from "vue";
import { ElMessageBox } from "element-plus";
import { Oper } from "@/types/common";

enum Direction {
  row = "row",
  column = "column",
}
export default {
  props: {
    size: {
      type: Number,
      default: 2,
    },
    direction: {
      type: Object as PropType<Direction>,
      default: Direction.row,
    },
    color: {
      type: String,
      default: "#999",
    },
    placement: {
      type: String,
      default: "bottom-end",
    },
    opers: {
      type: Object as PropType<Oper[]>,
      default: [],
    },
  },
  setup(props) {
    const px = `${props.size}px`;
    const dotWrapperStyle = ref({
      display: "flex",
      "flex-direction": props.direction,
    });
    const dotStyle = ref({
      width: px,
      height: px,
      border: `${px} solid ${props.color}`,
      "border-radius": px,
      "box-sizing": "border-box",
      margin: px,
      cursor: 'pointer',
      'user-select': 'none',
    });

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
      dotWrapperStyle,
      dotStyle,
      handleClick,
    };
  },
};
</script>

<style lang="less" scoped>
.more-opers {
  .more-opers-item {
    cursor: pointer;
    user-select: none;
    padding: 5px;
    &:hover {
      background: #ccc;
    }
  }
}
</style>

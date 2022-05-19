<template>
  <div class="footer-container" :style="footerStyle">
    <div class="footer">
      <div class="footer-left">
        <el-icon :size="16">
          <DArrowLeft class="footer-collapse" v-if="!expanded" @click="() => (expanded = true)" />
          <DArrowRight class="footer-collapse" v-else @click="() => (expanded = false)"
        /></el-icon>
        <el-tooltip placement="top" content="A ⭐ on Github would be much appreciated!">
            <a class="footer-link" href="https://github.com/betterRunner/context-note" target="_blank">
              <img class="footer-icon" :src="githubLogoSrc" height="30" />
            </a>
        </el-tooltip>
      </div>
      <More direction="row" size="4" color="#666" placement="top" :opers="opers" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, watch, ref } from "vue";
import { DArrowLeft, DArrowRight } from "@element-plus/icons";
import { Oper } from "@/types/common";
import mitt from "@/utils/mitt";
import More from "../shared/more.vue";
import { exportOper, importOper } from "./ex-import";
import { EventType } from "mitt";

export default {
  components: {
    More,
    DArrowLeft,
    DArrowRight,
  },
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const footerStyle = computed(() => ({
      width: `${props.width}px`,
      "min-width": `${props.width}px`,
      transition: "0.5s",
    }));

    const expanded = ref(false);
    watch(
      expanded,
      () => mitt.emit('expand-collapse-app', (expanded.value as unknown) as EventType)
    );

    const githubLogoSrc = chrome.runtime.getURL("assets/github-logo.png");
    const opers = ref<Oper[]>([exportOper, importOper]);

    return {
      footerStyle,
      expanded,
      githubLogoSrc,
      opers,
    };
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  position: fixed;
  min-width: 500px;
  width: 500px;
  height: 50px;
  bottom: 0px;
  border: 1px solid rgba(100, 108, 255, 0.8);
  box-shadow: rgba(100, 108, 255, 1) 0px 6px 18px 0px;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;

  .footer {
    padding: 10px 20px 10px 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .footer-left {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      align-items: center;

      .footer-collapse {
        cursor: pointer;
      }
    }

    .footer-link {
      user-select: none;
    }

    .footer-icon {
      margin-left: 20px;
      user-select: none;
      width: 30px;
      height: 30px;
    }
  }
}
</style>

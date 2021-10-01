<template>
  <div class="settings-container">
    <div class="settings">
          <a href="https://github.com/betterRunner/context-note" target="_blank">
      <img class="settings-icon" :src="githubLogoSrc" height="30" />
    </a>
    <More direction="row" size="4" color="#666" placement="top" :opers="opers" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Oper } from "@/types/common";
import More from "../shared/more.vue";
import { exportOper } from './ex-import';
export default {
  components: {
    More,
  },
  setup() {
    const githubLogoSrc = chrome.runtime.getURL("assets/github-logo.png");
    const opers = ref<Oper[]>([exportOper])

    return {
      githubLogoSrc,
      opers,
    };
  },
};
</script>

<style lang="less" scoped>
.settings-container {
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

  .settings {
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

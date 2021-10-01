<template>
  <div class="settings">
    <a href="https://github.com/betterRunner/context-note" target="_blank">
      <img class="settings-icon" :src="githubLogoSrc" height="30" />
    </a>
    <More direction="row" size="4" color="#666" placement="top" :opers="[]" />
  </div>
</template>

<script lang="ts">
import More from '../shared/more.vue';
export default {
  components: {
    More,
  },
  setup() {
    const githubLogoSrc = chrome.runtime.getURL("assets/github-logo.png");

    return {
      githubLogoSrc,
    };
  },
};
</script>

<style lang="less" scoped>
.settings {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0px;
  border: 1px solid rgba(100, 108, 255, 0.8);
  box-shadow: rgba(100, 108, 255, 1.0) 0px 6px 18px 0px;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .settings-icon {
    margin-left: 20px;
  }
}
</style>

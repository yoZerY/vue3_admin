<template>
  <el-scrollbar class="app-scroll">
    <div class="app-main">
      <router-view></router-view>
    </div>
  </el-scrollbar>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-scroll {
  //height: calc(100vh - 50px - 43px);

  height: calc(100vh - 50px);
  .app-main {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
  }
}
</style>

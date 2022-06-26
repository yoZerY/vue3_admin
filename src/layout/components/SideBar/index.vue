<template>
  <div class="">
    <div class="logo-container">logo</div>
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import SidebarMenu from './SidebarMenu.vue'
</script>
<style lang="scss" scoped>
.logo-container {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

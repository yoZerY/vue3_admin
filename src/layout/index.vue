<template>
  <div
    class="app-wrapper"
    :class="[store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <SiderBar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: cssVar.menuBg }"
    ></SiderBar>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
        <TagsView></TagsView>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import TagsView from '@/components/tagsView/index.vue'
import SiderBar from './components/SideBar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/NavBar.vue'

import { useStore } from 'vuex'
const store = useStore()
const cssVar = computed(() => store.getters.cssVar)
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

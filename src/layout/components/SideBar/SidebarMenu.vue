<template>
  <el-menu
    router
    unique-opened
    :collapse="!store.getters.sidebarOpened"
    :default-active="activeMenu"
    :background-color="cssVar.menuBg"
    :text-color="cssVar.menuText"
    :active-text-color="cssVar.menuActiveText"
    :collapse-transition="false"
  >
    <SidebarItem v-for="route in routes" :key="route.path" :route="route">
    </SidebarItem>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { filterRouters, generateMenus } from '@/utils/filterRoutes'
import SidebarItem from './SidebarItem.vue'
const router = useRouter()
const route = useRoute()

const store = useStore()
const cssVar = computed(() => store.getters.cssVar)
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss" scoped></style>

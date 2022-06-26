<template>
  <el-sub-menu v-if="route.children.length" :index="route.path">
    <template #title>
      <MenuItem
        :iconName="route.meta.iconName"
        :title="route.meta.title"
        :icon="route.meta.icon"
      ></MenuItem>
    </template>
    <SidebarItem
      v-for="subRoute in route.children"
      :key="subRoute.path"
      :route="subRoute"
    ></SidebarItem>
  </el-sub-menu>

  <el-menu-item v-else :index="route.path">
    <MenuItem
      :iconName="route.meta.iconName"
      :title="route.meta.title"
      :icon="route.meta.icon"
    ></MenuItem>
  </el-menu-item>
</template>
<script setup>
import MenuItem from './MenuItem.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped></style>

<template>
  <el-breadcrumb>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :key="item.path"
      >
        <span v-if="index === breadcrumbList.length - 1">
          {{ item.meta.title }}</span
        >
        <router-link v-else :to="item.path"> {{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const breadcrumbList = ref([])

watch(
  route,
  (val) => {
    const { matched = [] } = val
    const res = matched.filter((item) => item.meta && item.meta.title)
    breadcrumbList.value = res
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped></style>

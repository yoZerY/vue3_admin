<template>
  <el-scrollbar class='app-scroll'>
    <div class='app-main'>
      <router-view v-slot='{Component,route}'>
        <transition name='fade-transform' mode='out-in'>
          <keep-alive>
            <component :is='Component' :key='route.path'></component>
          </keep-alive>

        </transition>
      </router-view>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { isTag } from '@/utils/tags.js'

const route = useRoute()
const store = useStore()

const initTitle = (route) => {
  let title = ''
  if (route?.meta?.title) {
    title = route.meta.title
  } else {
    const pathArr = route.path.splice('/')
    title = pathArr[pathArr.length - 1]
  }
  return title
}

watch(
  route,
  (to, from) => {
    if (!isTag(to.path)) return
    const {
      fullPath,
      meta,
      name,
      params,
      path,
      query
    } = to
    store.commit('tags/addTags', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: initTitle(to)
    })
  },
  {
    immediate: true
  }
)
</script>

<style lang='scss' scoped>
.app-scroll {
  //height: calc(100vh - 50px - 43px);

  height: calc(100vh - 50px - 43px);

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

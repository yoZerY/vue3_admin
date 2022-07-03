<template>
  <div class='tags-view-container'>
    <transition-group name='breadcrumb'>
      <router-link
        v-for='(tag, index) in tagsList'
        :key='tag.fullPath'
        class='tags-view-item'
        :class="isActive(tag) ? 'active' : ''"
        :to='tag.fullPath'
      >
        <div class='tag-content'>
          {{ tag.title }}
          <el-icon v-if='tagsList.length > 1' class='close' @click='closeTag(index)'>
            <CircleClose />
          </el-icon>
        </div>
      </router-link>
    </transition-group>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { CircleClose } from '@element-plus/icons-vue'

const store = useStore()
const route = useRoute()

const tagsList = computed(() => store.getters.tagsList)
const isActive = (tag) => {
  return tag.path === route.path
}
const closeTag = (index) => {
  store.commit('tags/closeTag', index)
}
</script>
<style lang='scss' scoped>
.tags-view-container {
  padding: 4px 16px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.tags-view-item {
  display: inline-block;
  padding: 3px 6px;
  background-color: aliceblue;
  text-decoration: none;
  margin-right: 6px;
  color: #333;

  &.active {
    background-color: cadetblue;
    color: #ccc;
  }

  .tag-content {
    display: flex;
    align-items: center;

    .close {
      cursor: pointer;
      padding-left: 4px;
      color: #333;
    }
  }
}
</style>

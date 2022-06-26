<template>
  <div class="navbar">
    <div class="left-menu">
      <Hamburger></Hamburger>
    </div>
    <div class="right-menu">
      <el-dropdown>
        <el-avatar class="avatar" :size="36" :src="userInfo.avatar" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-button @click="logOut" link>Log Out</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger/index.vue'
const store = useStore()
const userInfo = computed(() => store.getters.userInfo)

const logOut = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .avatar {
    cursor: pointer;
  }
  .right-menu {
    padding-right: 16px;
  }
}
</style>

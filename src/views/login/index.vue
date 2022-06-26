<template>
  <div class="login-container">
    <div class="login-form">
      <div class="title">Login</div>
      <div class="form">
        <el-form
          size="large"
          ref="loginFromRef"
          :model="loginForm"
          :rules="loginRules"
        >
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              placeholder="username..."
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              placeholder="password..."
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="handleLogin"
              :loading="btnLoading"
              style="width: 100%"
              type="primary"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const btnLoading = ref(false)
const loginFromRef = ref(null)

const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: '请输入密码'
    }
  ]
})

const handleLogin = () => {
  btnLoading.value = true
  store.dispatch('user/login', loginForm.value).finally(() => {
    btnLoading.value = false
  })
}
</script>
<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  position: relative;
  .login-form {
    position: absolute;
    width: 400px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      padding-bottom: 20px;
      font-size: 36px;
      text-align: center;
    }
  }
}
</style>

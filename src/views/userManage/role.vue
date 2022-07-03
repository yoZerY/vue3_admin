<template>
  <el-dialog title='修改权限' :model-value='modelValue' @close='close'>
    <div v-if='modelValue'>
      <el-checkbox-group v-model='checkList'>
        <el-checkbox v-for='item in roleList' :key='item.id' :label='item.id'>
          {{ item.title }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <template #footer>
      <el-button @click='close'>取消</el-button>
      <el-button type='primary' @click='onConfirm'>确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { roleList as queryRoleList } from '@/api/role'
import { userRoles, updateRole } from '@/api/user-manage'
import { defineProps, defineEmits, watch, ref } from 'vue'

const loading = ref(false)
const checkList = ref([])
const roleList = ref([])

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userInfo: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

watch(() => props.modelValue, val => {
  checkList.value = []
  if (val) {
    getRoleList()
  }
})

watch(() => props.userInfo, async val => {
  const { _id } = val
  if (_id) {
    const result = await userRoles(_id)
    const { role = [] } = result
    checkList.value = role.map(item => item.id)
  }
})
const getRoleList = async () => {
  loading.value = true
  const res = await queryRoleList()
  roleList.value = res
  loading.value = false
}

const close = () => {
  emits('update:modelValue', false)
}
const onConfirm = async () => {
  const res = checkList.value.map(id => {
    return roleList.value.find(role => role.id === id)
  })
  await updateRole(props.userInfo._id, res)
  emits('update:modelValue', false)
}
</script>

<style scoped>

</style>

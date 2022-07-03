<template>
  <div v-loading='loading'>
    <el-table :data='tableData' style='width: 100%'>
      <el-table-column align='center' type='index' width='50' />
      <el-table-column
        align='center'
        prop='username'
        label='username'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='avatar'
        label='avatar'
        show-overflow-tooltip
      >
        <template #default='{ row }'>
          <el-avatar :size='40' :src='row.avatar'
          />
        </template>
      </el-table-column>
      <el-table-column
        align='center'
        prop='mobile'
        label='mobile'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='openTime'
        label='openTime'
        show-overflow-tooltip
      />
      <el-table-column align='center' width='200' label='操作'>
        <template #default='{ row }'>
          <el-button size='small' @click='view(row)'
          >查看
          </el-button
          >
          <el-button size='small' @click='setRole(row)'
          >角色
          </el-button
          >
          <el-button size='small' type='danger' @click='del(row)'
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <RoleDialog :userInfo='userInfo' v-model='dialogVisible'></RoleDialog>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { getUserManageList } from '../../api/user-manage'
import RoleDialog from './role.vue'

const tableData = ref([])
const loading = ref(false)
const dialogVisible = ref(false)
const userInfo = ref({})

onMounted(async () => {
  loading.value = true
  const res = await getUserManageList()
  tableData.value = res.list
  loading.value = false
})
const view = () => {
}
const setRole = (row) => {
  userInfo.value = row
  dialogVisible.value = true
}
const del = () => {
}
</script>
<style lang='scss' scoped></style>

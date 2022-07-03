<template>
  <div v-loading='loading'>
    <el-table border :data='tableData' row-key='id' default-expand-all
              :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column align='center' type='index' width='50' />

      <el-table-column
        align='center'
        prop='permissionName'
        label='权限名称'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='permissionMark'
        label='权限标识'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='permissionDesc'
        label='权限描述'
        show-overflow-tooltip
      />
      <el-table-column align='center' width='200' label='操作'>
        <template #default='scope'>
          <el-button size='small' @click='handleEdit(scope.row)'
          >Edit
          </el-button
          >
          <el-button size='small' type='danger' @click='handleDelete(scope.row)'
          >Delete
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { permissionList } from '../../api/permission'

const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const res = await permissionList()
  console.log(res)
  tableData.value = res
  loading.value = false
})
const handleEdit = () => {
}
const handleDelete = () => {
}
</script>
<style lang='scss' scoped></style>

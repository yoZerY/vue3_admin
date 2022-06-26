<template>
  <div v-loading="loading">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        label="id"
        width="50"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="permissionMark"
        label="permissionMark"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="permissionName"
        label="permissionName"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="permissionDesc"
        label="permissionDesc"
        show-overflow-tooltip
      />
      <el-table-column align="center" width="200" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >Edit</el-button
          >
          <el-button size="small" type="danger" @click="handleDelete(scope.row)"
            >Delete</el-button
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
  tableData.value = res
  loading.value = false
})
const handleEdit = () => {}
const handleDelete = () => {}
</script>
<style lang="scss" scoped></style>

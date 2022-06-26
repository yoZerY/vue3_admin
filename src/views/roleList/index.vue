<template>
  <div v-loading="loading">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        width="50"
        label="id"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="title"
        label="title"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="describe"
        label="describe"
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
import { roleList } from '../../api/role'
const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const res = await roleList()
  tableData.value = res
  loading.value = false
})
const handleEdit = () => {}
const handleDelete = () => {}
</script>
<style lang="scss" scoped></style>

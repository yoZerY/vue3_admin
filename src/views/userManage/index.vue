<template>
  <div v-loading="loading">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        label="id"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="username"
        label="username"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="avatar"
        label="avatar"
        show-overflow-tooltip
      >
        <template #default="{ row }">
          <el-avatar :size="40" :src="row.avatar"
        /></template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="mobile"
        label="mobile"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="openTime"
        label="openTime"
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
import { getUserManageList } from '../../api/user-manage'
const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const res = await getUserManageList()
  tableData.value = res.list
  loading.value = false
})
const handleEdit = () => {}
const handleDelete = () => {}
</script>
<style lang="scss" scoped></style>

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
        prop="title"
        label="title"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="author"
        label="author"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="ranking"
        label="ranking"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="desc"
        label="desc"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        prop="publicDate"
        label="publicDate"
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
import { getArticleList } from '../../api/article'
const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const res = await getArticleList()
  console.log('res', res)
  tableData.value = res.list
  loading.value = false
})
const handleEdit = () => {}
const handleDelete = () => {}
</script>
<style lang="scss" scoped></style>

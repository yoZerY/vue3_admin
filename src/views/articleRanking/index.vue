<template>
  <div v-loading='loading'>
    <el-table ref='tableRef' @row-click='rowClick' :data='tableData' style='width: 100%'>
      <el-table-column type='index' width='50' />
      <el-table-column
        align='center'
        prop='title'
        label='title'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='author'
        label='author'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='ranking'
        label='ranking'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='desc'
        label='desc'
        show-overflow-tooltip
      />
      <el-table-column
        align='center'
        prop='publicDate'
        label='publicDate'
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
import { getArticleList } from '../../api/article'
import useSort from './useSort'

const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  initData()
})
const initData = async () => {
  loading.value = true
  const res = await getArticleList()
  tableData.value = res.list
  loading.value = false
}
const handleEdit = () => {
}
const handleDelete = () => {
}
const rowClick = (row, column, event) => {
  console.log(row, column, event)
}
const {
  tableRef,
  initSort
} = useSort(tableData, initData)
onMounted(() => {
  initSort()
})
</script>
<style lang='scss' scoped>
</style>

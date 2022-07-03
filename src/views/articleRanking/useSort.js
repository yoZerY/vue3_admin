import Sortable from 'sortablejs'
import { ref } from 'vue'
import { articleSort } from '@/api/article'
import { ElMessage } from 'element-plus'

export default function useSort(tableData, initData) {
  const tableRef = ref(null)

  function initSort() {
    const el = tableRef.value.$el.querySelectorAll('.el-table__body > tbody')[0]
    Sortable.create(el, {
      ghostClass: 'sortable-ghost',
      onEnd: function(e) {
        const {
          oldIndex,
          newIndex
        } = e
        if (oldIndex === newIndex) return
        articleSort({
          initRanking: tableData.value[oldIndex].ranking,
          finalRanking: tableData.value[newIndex].ranking
        }).then(res => {
          initData && initData()
          ElMessage.success('修改排序成功')
        })
      }
    })
  }

  return {
    tableRef,
    initSort
  }
}

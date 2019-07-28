<template>
    <div class="table-pane">
        <el-table :data="$store.state.staffs" border style="width: 100%" height = "529px">
            <el-table-column prop="id" label="id" width="180">
            </el-table-column>
            <el-table-column prop="staffName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="staffEmail" label="email"></el-table-column>
            <el-table-column prop="staffPhone" label="电话号码"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" 
            :total="pageData.total" 
            :pager-count="pageData.pagerCount" 
            :page-size="pageData.pageSize">
        </el-pagination>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        total: 100,
        pagerCount: 5,
        pageSize: 10
      }
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.dispatch("fetchParkingStaffs");
  },

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss' >
.table-pane{
    height:650px;
    position: relative;
}
.el-pagination{
    position: absolute;
    bottom: 10px;
    right:10px;
    
}
</style>
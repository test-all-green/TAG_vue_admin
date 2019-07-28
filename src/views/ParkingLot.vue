<template>
    <div class="table-pane">
         <el-row>
            <el-button type="primary" @click="addUser" size="small ">新建</el-button>
        </el-row>
        <el-table :data="$store.state.parkingLots" border style="width: 100%" height = "529px">
            <el-table-column prop="id" label="id" ></el-table-column>
            <el-table-column prop="parkingName" label="名字" ></el-table-column>
            <el-table-column prop="parkingLotCapacity" label="大小" ></el-table-column>
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
    this.$store.dispatch("fetchParkingLots");
  },

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss' scoped>

</style>
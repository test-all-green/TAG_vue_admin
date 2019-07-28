<template>
  <div class="table-pane">
    <el-row>
      <el-button type="primary" @click="dialogFormVisible=true" size="small ">新建</el-button>
    </el-row>
    <el-table :data="$store.state.parkingLots.content" border style="width: 100%" height="529px">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="parkingLotName" label="名字"></el-table-column>
      <el-table-column prop="parkingLotCapacity" label="大小"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="$store.state.parkingLots.pageSize"
      layout="prev, pager, next, jumper"
      :total="$store.state.parkingLots.totalElements"
    ></el-pagination>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="停车场名称" :label-width="formLabelWidth">
          <el-input v-model="form.parkingLotName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="停车场容量" :label-width="formLabelWidth">
          <el-input v-model="form.parkingLotCapacity" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        parkingLotName: "",
        parkingLotCapacity: ""
      },
      formLabelWidth: "120px",
      pageData: {
        total: 100,
        pagerCount: 5,
        pageSize: 10
      },
      currentPage: 1
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.dispatch("fetchParkingLots", { page: 1, pageSize: 10 });
  },

  created() {},

  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$store.dispatch("fetchParkingLots", { page: val, pageSize: 10 });
    },
    onSubmit() {
      this.$store.dispatch("addParkingLot", {
        form: this.form,
        page: this.$store.state.parkingLots.number + 1,
        pageSize: 10
      });
      this.dialogFormVisible = false;
      this.form = {
        parkingLotName: "",
        parkingLotCapacity: ""
      };
    }
  },

  filters: {}
};
</script>
<style lang='scss' scoped>
</style>
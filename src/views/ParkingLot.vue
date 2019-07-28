<template>
  <div class="table-pane">
    <div class="table-top">
      <el-row  :gutter="10">
        <el-col :span="2">
          <el-button type="primary" @click="dialogFormVisible=true">新建</el-button>
        </el-col>
        <el-col :span="4" :offset="11">
          <el-input v-model="searchCondition.name" placeholder="搜索名称"></el-input>
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="searchCondition.min"
            placeholder="最小容量"
            oninput="value=value.replace(/[^\d]/g,'')"
          ></el-input>
        </el-col>
        <el-col :span="1">
          <span class="line">—</span>
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="searchCondition.max"
            placeholder="最大容量"
            oninput="value=value.replace(/[^\d]/g,'')"
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-button @click="searchPLs" type="primary">
            <i class="el-icon-search"></i>
          </el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="$store.state.parkingLots.content" border style="width: 100%" height="529px">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="parkingLotName" label="名字"></el-table-column>
      <el-table-column prop="parkingLotCapacity" label="大小"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
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
      currentPage3: 1,
      searchCondition:{
        name:'',
        min:'',
        max:''
      },
      condition:{}
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.dispatch("fetchParkingLots", { page: 1, pageSize: 10,condition:this.condition});
  },

  created() {},

  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$store.dispatch("fetchParkingLots", { page: val, pageSize: 10, condition:this.condition });
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
    },
    searchPLs(){
      this.condition = {
         name:this.searchCondition.name,
        min:this.searchCondition.min,
        max:this.searchCondition.max
      }
      this.$store.dispatch("fetchParkingLots", { page: 1, pageSize: 10, condition:this.condition });
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
</style>
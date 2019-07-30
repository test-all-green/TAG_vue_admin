<template>
  <div class="table-pane">
    <div class="table-top">
      <el-row :gutter="10">
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
      <!-- <el-table-column prop="remain" label="剩余容量"></el-table-column> -->
      <el-table-column prop="location" label="地址"></el-table-column>
      <el-table-column label="区域" width="150" align="center" prop="regionId">
        <template slot-scope="scope">{{$store.state.regions.filter(ei=>ei.id===scope.row.regionId)[0].regionName}}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="small" @click="edit(scope.row)"></el-button>
          <!-- <el-button type="primary" icon="el-icon-delete" circle size="small" style="background-color:red; border-color:red" @click="del(scope.row)"></el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="$store.state.parkingLots.pageSize"
      layout="prev, pager, next, jumper"
      :total="$store.state.parkingLots.totalElements"
    ></el-pagination>
    <el-dialog title="新增停车场" :visible.sync="dialogFormVisible">
      <el-row type="flex" justify="center">
        <el-col :span="16" >
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="停车场名称" :label-width="formLabelWidth" prop="parkingLotName">
              <el-input v-model="form.parkingLotName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="大小" :label-width="formLabelWidth" prop="parkingLotCapacity">
              <el-input v-model="form.parkingLotCapacity" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="停车场地址" :label-width="formLabelWidth" prop="location">
              <el-input v-model="form.location" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="区域" :label-width="formLabelWidth">
              <el-select v-model="form.regionId" placeholder="请选择区域" >
                <el-option
                  v-for="item in $store.state.regions"
                  :key="item.id"
                  :label="item.regionName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="停车场区域" :label-width="formLabelWidth" prop="regionId">
              <el-input v-model="form.regionId" autocomplete="off"></el-input>
            </el-form-item> -->
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改停车场" :visible.sync="dialogModifyFormVisible" @close="closeModify" width="60%">
      <el-row type="flex" justify="center">
        <el-col :span="16" >
          <el-form :model="form" label-width="120" ref="form">
            <el-form-item label="停车场名称" :label-width="formLabelWidth" prop="parkingLotName">
              <el-input v-model="form.parkingLotName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="大小" :label-width="formLabelWidth" prop="parkingLotCapacity">
              <el-input v-model="form.parkingLotCapacity" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModify">取 消</el-button>
        <el-button type="primary" @click="editPublicParkingLot()">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {updatePublicParkingLot} from '../api/parkingLot'
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogModifyFormVisible: false,
      form: {
        parkingLotName: "",
        parkingLotCapacity: "",
        location:"",
        regionId:""
      },
      formLabelWidth: "120px",
      pageData: {
        total: 100,
        pagerCount: 5,
        pageSize: 10
      },
      currentPage3: 1,
      searchCondition: {
        name: "",
        min: "",
        max: ""
      },
      condition: {},
      rules: {
        parkingLotName: [
          { required: true, message: "请输入停车场名称", trigger: "blur" }
        ],
        parkingLotCapacity: [
          { required: true, message: "请输入停车场容量", trigger: "blur" }
        ]
      }
    };
  },

    components: {},

    computed: {},

  mounted() {
    // this.$store.dispatch("fetchParkingLots", {
    //   page: 1,
    //   pageSize: 10,
    //   condition: {}
    // });
    // this.$store.dispatch("getRegion");
  },

    created() {},

  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$store.dispatch("fetchParkingLots", {
        page: val,
        pageSize: 10,
        condition: this.condition
      });
    },
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (!valid) {
          this.$message.error("输入的名称和容量不能为空!");
          return false;
        } 
      });
      this.$store.dispatch("addParkingLot", {
        condition: this.condition,
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
    searchPLs() {
      this.condition = {
        name: this.searchCondition.name,
        min: this.searchCondition.min,
        max: this.searchCondition.max
      };
      this.$store.dispatch("fetchParkingLots", {
        page: 1,
        pageSize: 10,
        condition: this.condition
      });
    },
    edit(row){
      // this.dialogText="修改用户";
      console.log(row)
      this.form = row;
      this.dialogModifyFormVisible = true;
      // this.editFlag = true;
    },
    closeModify(){
      // this.resetForm();
      this.dialogModifyFormVisible = false;
    },
    async editPublicParkingLot(){
      //请求 this.form
      await updatePublicParkingLot(this.form)
      // this.resetForm();
      this.dialogModifyFormVisible = false;
      this.$store.dispatch("fetchParkingLots", { page: 1, pageSize: 10 });
      this.currentPage = 1;
    }
  },

    filters: {}
};
</script>
<style lang='scss' >
</style>
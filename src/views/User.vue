<template>
  <div class="table-pane">
    <div class="table-top">
      <el-row>
          <el-col :span="2">
            <el-button type="primary" @click="dialogFormVisible = true" size="small ">新建</el-button>
          </el-col>
      </el-row>
    </div>
    <el-dialog title="新建用户" :visible.sync="dialogFormVisible" @close="closeAdd" width="60%">
      <el-row type="flex" justify="center">
        <el-col >
          <el-form :model="form" label-width="120" ref="form">
            <el-form-item label="工号" :label-width="formLabelWidth">
              <el-input v-model="form.employeeId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.employeeName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth"
              prop="email"
              :rules="[
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
              ]"
            >
              <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" :label-width="formLabelWidth"
              prop="phone"
              :rules="[
                { type: 'number', message: '年龄必须为数字值'}
              ]"
            >
              <el-input type="phone" v-model.number="form.phone" autocomplete="off"></el-input>
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
            <el-form-item label="角色" :label-width="formLabelWidth">
              <el-select v-model="form.roleId" placeholder="请选择角色" >
                <el-option
                  v-for="item in $store.state.characters"
                  :key="item.id"
                  :label="item.roleName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeAdd">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改用户" :visible.sync="dialogModifyFormVisible" @close="closeModify" width="60%">
      <el-row type="flex" justify="center">
        <el-col :span="16" >
          <el-form :model="form" label-width="120" ref="form">
            <el-form-item label="工号" :label-width="formLabelWidth">
              <el-input v-model="form.employeeId" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.employeeName" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="角色" :label-width="formLabelWidth">
              <el-select v-model="form.roleId" placeholder="请选择角色" >
                <el-option
                  v-for="item in $store.state.characters"
                  :key="item.id"
                  :label="item.roleName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModify">取 消</el-button>
        <el-button type="primary" @click="editUser()">修 改</el-button>
      </div>
    </el-dialog>
    <el-table :data="$store.state.staffs.content" border style="width: 100%" height="531px" size="small">
      <el-table-column prop="employeeId" label="工号" width="120"></el-table-column>
      <el-table-column prop="employeeName" label="姓名" width="150"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="phone" label="电话号码"></el-table-column>
      <el-table-column label="职位" width="150">
        <template slot-scope="scope">{{$store.state.characters.filter(ei=>ei.id===scope.row.roleId)[0].roleName}}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="small" @click="edit(scope.row)"></el-button> 
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="$store.state.staffs.pageSize"
      layout="prev, pager, next, jumper"
      :total="$store.state.staffs.totalElements"
    ></el-pagination>
  </div>
</template>

<script>
import {updateUser} from '../api/user'
export default {
  data() {
    return {
      pageData: {
        total: 100,
        pagerCount: 5,
        pageSize: 10
      },
      currentPage: 1,
      dialogFormVisible: false,
      dialogModifyFormVisible: false,
      form: {
        id:"",
        employeeId: "",
        employeeName: "",
        email: "",
        phone: "",
        roleId: ""
      },
      formLabelWidth: "120px"
    };
  },

  components: {},

  computed: {},

  // mounted() {
  //   this.$store.dispatch("fetchParkingStaffs", { page: 1, pageSize: 10 });
  //   this.$store.dispatch("getStaffCharacter");
  // },

  created() {},

  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$store.dispatch("fetchParkingStaffs", {
        page: val,
        pageSize: 10
      });
    },
    closeAdd(){
      this.resetForm();
      this.dialogFormVisible = false;
    },
    closeModify(){
      this.resetForm();
      this.dialogModifyFormVisible = false;
    },
    resetForm(){
      this.form = {
        id:"",
        employeeId: "",
        employeeName: "",
        email: "",
        phone: "",
        roleId: ""
      };
    },
    addUser() {
      console.log(this.form)
      this.$store.dispatch("addParkingStaffs", {
        form: this.form,
        page: this.$store.state.staffs.number + 1,
        pageSize: 10
      });
      this.resetForm();
      this.dialogFormVisible = false;
    },
    edit(row){
      this.dialogText="修改用户";
      console.log(row)
      this.form = row;
      this.dialogModifyFormVisible = true;
      // this.editFlag = true;
    },
    async editUser(){
      //请求 this.form
      await updateUser(this.form)
      this.resetForm();
      this.dialogModifyFormVisible = false;
      this.$store.dispatch("fetchParkingStaffs", { page: 1, pageSize: 10 });
      this.currentPage = 1;
    }
  },

  filters: {
    fil(val) {
      return val;
    }
  }
};
</script>
<style lang='scss' >
.table-pane {
  height: 650px;
  position: relative;
  .table-top {
    .el-row {
      height: 40px;
      margin-bottom: 2px;

      .line {
        display: inline-block;
        width: 100%;
        text-align: center;
        line-height: 32px;
      }
      & i {
        font-size: 20px;
      }
      .el-button {
        padding: 0;
        height: 32px;
        width: 100%;
        line-height: 32px;
      }
      .el-input {
        height: 32px;
      }
      .el-input__inner {
        padding-left: 12px;
        height: 32px;
      }
    }
  }
  .el-dialog {
    width: 33%;
  }
}
.el-pagination {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
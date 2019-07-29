<template>
  <div class="table-pane">
    <div class="table-top">
      <el-row>
          <el-col :span="2">
            <el-button type="primary" @click="dialogFormVisible = true" size="small ">新建</el-button>
          </el-col>
      </el-row>
    </div>
    <el-dialog title="新增员工" :visible.sync="dialogFormVisible" @close="close">
      <el-row type="flex" justify="center">
        <el-col :span="16" >
          <el-form :model="form" label-width="120">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.staffName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
              <el-input v-model="form.staffEmail" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" :label-width="formLabelWidth">
              <el-input v-model="form.staffPhone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="角色" :label-width="formLabelWidth">
              <el-select v-model="form.staffCharacter.id" placeholder="请选择角色" >
                <el-option
                  v-for="item in $store.state.characters"
                  :key="item.id"
                  :label="item.characterName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="addUser()" v-if="editFlag == false">确 定</el-button>
        <el-button type="primary" @click="editUser()" v-if="editFlag == true">修 改</el-button>
      </div>
    </el-dialog>

    <el-table :data="$store.state.staffs.content" border style="width: 100%" height="531px" size="small">
      <el-table-column prop="id" label="id" width="120" align="center"></el-table-column>
      <el-table-column prop="staffName" label="姓名" width="150" align="center"></el-table-column>
      <el-table-column prop="staffEmail" label="email" align="center"></el-table-column>
      <el-table-column prop="staffPhone" label="电话号码" align="center"></el-table-column>
      <el-table-column label="职位" width="150" align="center">
        <template slot-scope="scope">{{scope.row.staffCharacter.characterName}}</template>
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
      editFlag:false,
      dialogFormVisible: false,
      form: {
        id:"",
        staffName: "",
        staffEmail: "",
        staffPhone: "",
        staffCharacter: {}
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
    close(){
      this.resetForm();
      this.dialogFormVisible = false;
    },
    resetForm(){
      this.form = {
        id:"",
        staffName: "",
        staffEmail: "",
        staffPhone: "",
        staffCharacter:{}
      };
    },
    addUser() {
      this.$store.dispatch("addParkingStaffs", {
        form: this.form,
        page: this.$store.state.staffs.number + 1,
        pageSize: 10
      });
      this.resetForm();
      this.dialogFormVisible = false;
    },
    edit(row){
      console.log(row)
      this.form = row;
      this.dialogFormVisible = true;
      this.editFlag = true;
    },
    async editUser(){
      //请求 this.form
      await updateUser(this.form)
      this.resetForm();
      this.dialogFormVisible = false;
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
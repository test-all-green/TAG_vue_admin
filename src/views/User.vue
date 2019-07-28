<template>
    <div class="table-pane">
        <el-row>
            <el-button type="primary" @click="dialogFormVisible = true" size="small ">新建</el-button>
        </el-row>

        <el-dialog title="新增员工" :visible.sync="dialogFormVisible">
          <el-form :model="form">
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
              <el-select v-model="form.characterId" placeholder="请选择角色">
                <el-option v-for="item in $store.state.characters" :key="item.id" :label="item.characterName" :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser()">确 定</el-button>
          </div>
        </el-dialog>

        <el-table :data="$store.state.staffs.content" border style="width: 100%" height = "529px">
            <el-table-column prop="id" label="id" width="180">
            </el-table-column>
            <el-table-column prop="staffName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="staffEmail" label="email"></el-table-column>
            <el-table-column prop="staffPhone" label="电话号码"></el-table-column>
        </el-table>
        <el-pagination 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="$store.state.staffs.pageSize"
          layout="prev, pager, next, jumper"
          :total="$store.state.staffs.totalElements"
        >
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
      },
      currentPage3: 1,
      dialogFormVisible: false,
      form: {
        staffName: '',
        staffEmail: '',
        staffPhone: '',
        characterId: ''
      },
      formLabelWidth: '120px',
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.$store.dispatch("fetchParkingStaffs",{page:1,pageSize: 10});
    this.$store.dispatch("getStaffCharacter");
  },

  created() {},

  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.$store.dispatch("fetchParkingStaffs", { page: val, pageSize: 10 });
    },
    addUser(){
      this.$store.dispatch("addParkingStaffs",{
        form: this.form,
        page: this.$store.state.staffs.number+1,
        pageSize: 10
      })
      this.form={
        staffName: '',
        staffEmail: '',
        staffPhone: '',
        characterId: ''
      }
      this.dialogFormVisible=false
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
.table-pane {
  height: 650px;
  position: relative;
  .table-top{
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
        width: 80px;
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
}
.el-pagination {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
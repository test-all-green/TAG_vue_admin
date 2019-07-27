<template>
  <div class="main">
      <el-row>
          <el-col :span="4">
             <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"> 
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
          </el-col>
          <el-col :span="20">
            <div class="view">
            <router-view></router-view>
            </div>
          </el-col>
      </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  filters: {}
};
</script>
<style lang='scss' >
.main {
  margin-top: 20px;
  background: #fff;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
  .el-submenu {
    width: 240px;
  }
  .view {
    margin-left: 12px;
  }
}
</style>
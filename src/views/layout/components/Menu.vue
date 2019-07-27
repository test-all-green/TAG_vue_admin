<template>
  <div class="menu">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
<el-menu default-active="/user" class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse" :router="true"> 
  <el-menu-item index="/user">
    <i class="el-icon-user"></i>
    <span slot="title">员工管理</span>
  </el-menu-item>
  <el-menu-item index="/parkingLot" >
    <i class="el-icon-truck" ></i>
    <span slot="title">停车场管理</span>
  </el-menu-item>
  <el-menu-item index="/parkingOrder">
    <i class="el-icon-document"></i>
    <span slot="title">订单管理</span>
  </el-menu-item>
  
</el-menu>
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
       handleSelect(key, keyPath) {
        console.log(key)
        console.log(keyPath);
      }
    
  },

  filters: {}
};
</script>
<style lang='scss' >
.menu {
  //    border-right:1px solid #e6e6e6;
  .el-menu {
    // border: none;
    .el-menu-item {
        font-size:16px;
        // font-weight: bold;

        & i{
            font-size:20px;
        }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    height: 100%;
    min-height: 400px;
  }
  .el-submenu {
    width: 240px;
  }
}
</style>
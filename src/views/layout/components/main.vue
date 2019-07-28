<template>
  <div class="main">
      <el-row>
          <el-col :span="4">
            <Menu></Menu>
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
import Menu from './Menu'
export default {
  data() {
    return {
    };
  },

  components: {
    Menu,
  },

  computed: {},

  mounted() {},

  created() {},

  methods: {
    
  },

  filters: {}
};
</script>
<style lang='scss' >
.main {
  background: #fff;
  // width:100%;
  height:100%;  
  // padding: 0 240px;
  .view {
    // padding-left: 12px;
    padding:20px;
    border-left:1px solid #e6e6e6;
  }
}
</style>
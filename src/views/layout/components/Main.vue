<template>
  <div class="main">
  
      <el-row>
          <el-col :span="4">
            <meun></meun>
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
import Meun from './Menu'
export default {
  data() {
    return {
    };
  },

  components: {
    Meun
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
  .view {
    // padding-left: 12px;
    padding:20px;
    border-left:1px solid #e6e6e6;
  }
}
</style>

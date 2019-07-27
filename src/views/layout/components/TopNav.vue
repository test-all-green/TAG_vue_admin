<template>
  <div class="top">
      <el-row type="flex" justify="space-between" align="middle">
        <el-image :src="logo"></el-image>
        <div class="info">
          <span>{{'名字'}}</span>          
        </div>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../../assets/logo.png")
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss'>
.top {
  height: 100%;
  line-height: 80px;
  background: #001529;
  color:#FFF;
  .el-image {
    height: 50px;
    width: 50px;
    padding:0 80px;
  }
  .info{
    padding:0 80px;
  }
    
}
</style>
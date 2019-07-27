<template>
  <div class="layout">
    <el-container>
        <el-header>
            <div class="container">
                <top-nav></top-nav>
            </div>
        </el-header>
    <el-container>
        <el-main>
            <div class="container">
                <Main></Main>
            </div>
        </el-main>
    </el-container>
</el-container>
      
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import Main from "./components/main";
export default {
  data() {
    return {};
  },

  components: {
    TopNav,
    Main
  },

  computed: {},

  mounted() {},

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss' >
.layout {
    background: #f0f2f5;
    height:100%;
  .el-header {
    height: 60px !important;
    padding: 0;
  }
  .el-main {
    height: 680px !important;
    padding: 0;
    margin-top:20px;
    overflow: hidden;
  }
  .container {
    padding: 0 240px;
  }
}
</style>
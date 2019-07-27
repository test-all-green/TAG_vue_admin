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
  .el-header {
    height: 80px !important;
    padding: 0;
  }
  .el-main {
    height: 560px !important;
    padding: 0;
  }
  .container {
    padding: 0 240px;
  }
}
</style>
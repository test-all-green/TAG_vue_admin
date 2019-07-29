<template>
  <div class="top">
      <el-row type="flex" justify="space-between" align="middle">
        <el-image :src="logo" style="width:80px;height:80px;"></el-image>
        <div class="info">
          <span>Admin</span>
          <!-- <i class="el-icon-arrow-down"></i> -->
          <!-- <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-promotion">登出</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown> -->
        </div>
      </el-row>
  </div>
</template>

<script>
import { getToken } from "@/utils/token";
export default {
  data() {
    return {
      logo: require("../../../assets/newlogo.png")
    };
  },

  components: {},

  computed: {
    name() {
      return getToken().name || "名字";
    }
  },

  mounted() {},

  created() {},

  methods: {},

  filters: {}
};
</script>
<style lang='scss'>
.top {
  height: 100%;
  line-height: 60px;
  background: #026cd2;
  color: #fff;
  padding: 0 240px;
  .el-image {
    height: 50px;
    width: 50px;
    padding-left: 80px;
  }
  .info {
    padding-right: 60px;
    font-size: 22px;

    & i {
      font-size: 20px;
      margin-left: 15px;
      line-height: 22px;
      position: relative;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
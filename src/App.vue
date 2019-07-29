<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {
    this.$store.dispatch("fetchParkingStaffs", { page: 1, pageSize: 10 });
    this.$store.dispatch("getStaffCharacter");

    this.$store.dispatch("fetchParkingLots", {
      page: 1,
      pageSize: 10,
      condition: {}
    });

    this.$store.dispatch("fetchParkingOrders", { page: 1, pageSize: 10 });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;;
  color: #2c3e50; 
  height: 100%;
}
</style>

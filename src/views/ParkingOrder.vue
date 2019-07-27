<template>
    <div>
        <el-table :data="$store.state.parkingOrders" border style="width: 100%">
            <el-table-column prop="id" label="id" ></el-table-column>
            <el-table-column prop="carNumber" label="车牌号" ></el-table-column>
            <el-table-column prop="parkingOrderType" label="类型"></el-table-column>
            <el-table-column prop="parkingOrderStatus" label="状态"></el-table-column>        
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {
        this.$store.dispatch('fetchParkingOrders').then(()=>{
            console.log("this.$store.state.parkingLots :", this.$store.state.parkingLots);
        })
    },

    created() {},

    methods: {},

    filters: {}
};
</script>
<style lang='scss' scoped>
</style>
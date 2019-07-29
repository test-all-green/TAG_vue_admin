<template>
    <div class="table-pane">
        <div class="table-top">
            <el-row></el-row>
        </div>
        <el-table
            :data="$store.getters.showParkingOrders"
            border
            style="width: 100%"
            height="529px"
        >
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="carNum" label="车牌号"></el-table-column>
            <el-table-column prop="parkingOrderType" label="类型"></el-table-column>
            <el-table-column prop="parkingOrderStatus" label="状态"></el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="$store.state.parkingOrders.pageSize"
            layout="prev, pager, next, jumper"
            :total="$store.state.parkingOrders.total"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageData: {
                total: 100,
                pagerCount: 5,
                pageSize: 10
            },
            currentPage: 1
        };
    },

    components: {},

    computed: {},

    // mounted() {
    //     this.$store.dispatch("fetchParkingOrders", { page: 1, pageSize: 10 });
    // },

    created() {},

    methods: {
        handleSizeChange(val) {},
        handleCurrentChange(val) {
            this.$store.dispatch("fetchParkingOrders", {
                page: val,
                pageSize: 10
            });
        }
    },

    filters: {}
};
</script>
<style lang='scss' scoped>
</style>
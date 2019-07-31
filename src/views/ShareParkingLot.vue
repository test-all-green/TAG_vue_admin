<template>
    <div class="table-pane">
        <div class="table-top">
            <el-row :gutter="10"></el-row>
        </div>
        <el-table
            :data="$store.getters.showShareParkingLots"
            border
            style="width: 100%"
            height="529px"
        >
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="parkingLotName" label="名字"></el-table-column>
            <el-table-column prop="status" label="发布状态"></el-table-column>
            <el-table-column prop="price" label="价格(元/小时)"></el-table-column>
            <el-table-column prop="beginTime" label="开始时间"></el-table-column>
            <el-table-column prop="endTime" label="结束时间"></el-table-column>
            <el-table-column label="区域" align="center" prop="regionId">
                <template
                    slot-scope="scope"
                >{{$store.state.regions.filter(ei=>ei.id===scope.row.regionId)[0].regionName}}</template>
            </el-table-column>
        </el-table>
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
    }
};
</script>

<style lang="" scoped>
</style>
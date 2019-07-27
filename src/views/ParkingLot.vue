<template>
    <div>
        <el-table :data="$store.state.parkingLots" border style="width: 100%">
            <el-table-column prop="id" label="id" ></el-table-column>
            <el-table-column prop="parkingName" label="名字" ></el-table-column>
            <el-table-column prop="parkingLotCapacity" label="大小" ></el-table-column>
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
        this.$store.dispatch('fetchParkingLots')
    },

    created() {},

    methods: {},

    filters: {}
};
</script>
<style lang='scss' scoped>
</style>
<template>
    <div>
        <el-table :data="$store.state.staffs" border style="width: 100%">
            <el-table-column prop="id" label="id" width="180">
            </el-table-column>
            <el-table-column prop="staffName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="staffEmail" label="email"></el-table-column>
            <el-table-column prop="staffPhone" label="电话号码"></el-table-column>
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
        this.$store.dispatch('fetchParkingStaffs')
    },

    created() {},

    methods: {},

    filters: {}
};
</script>
<style lang='scss' scoped>
</style>
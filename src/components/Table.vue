<template>
  <el-row>
    <el-col :span="24">
      <el-table :data="news" style="width: 100%" stripe :show-header="false">
        <el-table-column>
          <template slot-scope="scope" align="center">
            <span>{{ scope.row.updated }} |</span>
            <el-button
              type="text"
              @click="
                changeRouter(
                  `/article?type=${scope.row.type}&id=${scope.row.id}`
                )
              "
              >{{ scope.row.title }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24" class="pt-2" type="flex" align="center">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="pageTotal"
        :page-size="pageSize"
        background
        @current-change="changePage"
      >
      </el-pagination>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["tableData"],
  data() {
    return {
      news: [],
      pageSize: 10,
      pageTotal: 0,
    };
  },
  mounted() {
    this.pageTotal = this.tableData.length;
    this.pagination(1, this.pageSize, this.tableData);
  },
  methods: {
    pagination(pageNo, pageSize, array) {
      var offset = (pageNo - 1) * pageSize;
      this.news =
        offset + pageSize >= array.length
          ? array.slice(offset, array.length)
          : array.slice(offset, offset + pageSize);
    },
    changePage(v) {
      this.pagination(v, this.pageSize, this.tableData);
    },
    changeRouter(router) {
      window.scrollTo(0, 0);
      if (this.$route.path !== router) {
        this.$router.push({ path: router });
      }
    },
  },
};
</script>
<style scoped>
button {
  color: #606266;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: start;
  padding: 0px;
}
</style>
<template>
  <el-row>
    <el-col :span="24">
      <el-table :data="news" style="width: 100%" stripe :show-header="false">
        <el-table-column>
          <template slot-scope="scope" align="center">
            <a :href="scope.row.url || ''" target="_blank">{{
              scope.row.title
            }}</a>
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
  },
};
</script>
<style scoped>
a:link {
  color:#606266
}
a:visited {
  color:#606266
}
a:active {
  color:#606266
}
</style>
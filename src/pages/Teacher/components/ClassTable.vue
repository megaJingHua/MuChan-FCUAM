<template>
  <table width="100%">
    <thead>
      <tr>
        <th v-for="(week, index) in this.weeks" :key="index">{{ week }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(period, rowIndex) in this.periods" :key="rowIndex">
        <td>
          {{ period.period }}
          <p>{{ period.time1 }}</p>
          <p>|</p>
          <p>{{ period.time2 }}</p>
        </td>
        <td v-if="newDatas[rowIndex * 5 + 1]">
          {{ newDatas[rowIndex * 5 + 1].sub_name }}
          <p>{{ newDatas[rowIndex * 5 + 1].cls_name }}</p>
        </td>
        <td v-else>-</td>
        <td v-if="newDatas[rowIndex * 5 + 2]">
          {{ newDatas[rowIndex * 5 + 2].sub_name }}
          <p>{{ newDatas[rowIndex * 5 + 2].cls_name }}</p>
        </td>
        <td v-else>-</td>
        <td v-if="newDatas[rowIndex * 5 + 3]">
          {{ newDatas[rowIndex * 5 + 3].sub_name }}
          <p>{{ newDatas[rowIndex * 5 + 3].cls_name }}</p>
        </td>
        <td v-else>-</td>
        <td v-if="newDatas[rowIndex * 5 + 4]">
          {{ newDatas[rowIndex * 5 + 4].sub_name }}
          <p>{{ newDatas[rowIndex * 5 + 4].cls_name }}</p>
        </td>
        <td v-else>-</td>
        <td v-if="newDatas[rowIndex * 5 + 5]">
          {{ newDatas[rowIndex * 5 + 5].sub_name }}
          <p>{{ newDatas[rowIndex * 5 + 5].cls_name }}</p>
        </td>
        <td v-else>-</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    datas: Array,
  },
  mounted() {
    this.reorganizeData();
  },
  data() {
    return {
      loading: false,
      newDatas: [],
      weeks: ["", "星期一", "星期二", "星期三", "星期四", "星期五"],
      periods: [
        { period: "【1】", time1: "08:10", time2: "09:00" },
        { period: "【2】", time1: "09:10", time2: "10:00" },
        { period: "【3】", time1: "10:10", time2: "11:00" },
        { period: "【4】", time1: "11:10", time2: "12:00" },
        { period: "【5】", time1: "12:10", time2: "13:00" },
        { period: "【6】", time1: "13:10", time2: "14:00" },
        { period: "【7】", time1: "14:10", time2: "15:00" },
        { period: "【8】", time1: "15:10", time2: "16:00" },
        { period: "【9】", time1: "16:10", time2: "17:00" },
        { period: "【10】", time1: "17:10", time2: "18:00" },
        { period: "【11】", time1: "18:10", time2: "19:00" },
        { period: "【12】", time1: "19:10", time2: "20:00" },
        { period: "【13】", time1: "20:10", time2: "21:00" },
        { period: "【14】", time1: "21:10", time2: "22:00" },
      ],
    };
  },
  watch: {
    datas() {
      this.reorganizeData();
    },
  },
  methods: {
    reorganizeData: function () {
      const data = this.datas;
      let newDatas = {};
      for (let i = 0; i < data.length; i++) {
        var id = (data[i].period - 1) * 5 + data[i].week;
        newDatas[id] = {
          week: data[i].week,
          period: data[i].period,
          cls_name: data[i].cls_name,
          sub_name: data[i].sub_name,
        };
      }
      this.newDatas = newDatas;
      this.loading = true;
    },
  },
};
</script>
<style scoped>
tr {
  border: 1px #adadad solid;
}
td {
  width: 16%;
}
table {
  text-align: center;
}
p {
  margin: 0px;
}
</style>

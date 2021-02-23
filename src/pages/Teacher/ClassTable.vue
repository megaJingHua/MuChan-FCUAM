<template>
  <div class="tableCss">
    <table>
      <thead>
        <tr style="">
          <th style="width:120px; padding: 15px 0px" v-for="(week, index) in this.weeks" :key="index">{{week}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tbodyCss" v-for="(period, rowIndex) in this.periods" :key="rowIndex">
          <td>{{period.period}}
            <p>{{period.time}}</p>
          </td>
          <td v-if="newDatas[(rowIndex*5+1)]">{{newDatas[(rowIndex*5+1)].sub_name}}
            <p>{{newDatas[(rowIndex*5+1)].cls_name}}</p>
          </td>
          <td v-else>-</td>
          <td v-if="newDatas[(rowIndex*5+2)]">{{newDatas[(rowIndex*5+2)].sub_name}}
            <p>{{newDatas[(rowIndex*5+2)].cls_name}}</p>
          </td>
          <td v-else>-</td>
          <td v-if="newDatas[(rowIndex*5+3)]">{{newDatas[(rowIndex*5+3)].sub_name}}
            <p>{{newDatas[(rowIndex*5+3)].cls_name}}</p>
          </td>
          <td v-else>-</td>
          <td v-if="newDatas[(rowIndex*5+4)]">{{newDatas[(rowIndex*5+4)].sub_name}}
            <p>{{newDatas[(rowIndex*5+4)].cls_name}}</p>
          </td>
          <td v-else>-</td>
          <td v-if="newDatas[(rowIndex*5+5)]">{{newDatas[(rowIndex*5+5)].sub_name}}
            <p>{{newDatas[(rowIndex*5+5)].cls_name}}</p>
          </td>
          <td v-else>-</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      datas: Array
    },
    data() {
      return {
        loading: false,
        newDatas:[],
        weeks: ["節／星期", "星期一", "星期二", "星期三", "星期四", "星期五"],
        periods: [
          { period: "第一節", time: "08:10~09:00"},
          { period: "第二節", time: "09:10~10:00"},
          { period: "第三節", time: "10:10~11:00"},
          { period: "第四節", time: "11:10~12:00"},
          { period: "第五節", time: "12:10~13:00"},
          { period: "第六節", time: "13:10~14:00"},
          { period: "第七節", time: "14:10~15:00"},
          { period: "第八節", time: "15:10~16:00"},
          { period: "第九節", time: "16:10~17:00"},
          { period: "第十節", time: "17:10~18:00"},
          { period: "第十一節", time: "18:10~19:00"},
          { period: "第十二節", time: "19:10~20:00"},
          { period: "第十三節", time: "20:10~21:00"},
          { period: "第十四節", time: "21:10~22:00"},
        ]
      }
    },
    created () {
      this.reorganizeData();
    },
    methods:{
      reorganizeData: function () {
        const data = this.datas;
        let newDatas={};
        for (let i = 0; i < data.length; i++) {
          var id = (data[i].period-1)*5 + data[i].week;
          newDatas[id] = {week:data[i].week, period:data[i].period, cls_name:data[i].cls_name, sub_name:data[i].sub_name};
        }
        this.newDatas=newDatas;
        this.loading = true;
      }
    }
  }
</script>
<style scoped>
#my-table {
  letter-spacing: 1.3px;
}
.tableCss {
  padding: 10px;
  border: solid 1.3px #4b2e83;
  border-radius: 10px;
  text-align: center;
}
.tbodyCss {
  border-top: solid 1.3px #4b2e83;
}
td {
  padding: 25px 10px;
}
p {
  margin: 0px;
}
</style>
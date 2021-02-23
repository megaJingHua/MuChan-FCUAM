<template>
  <div class="row" style="background:#4b2e83;color:white;display:flex;justify-content:center">
    <div style="margin:auto 0px;font-weight:600;">本系亮點：</div>
    <marquee direction="up" scrollamount="1" class="text_run">
      <a href="./#/article?heighlight&index=0" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[0].title}}</a><br>
      <a href="./#/article?heighlight&index=1" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[1].title}}</a><br>
      <a href="./#/article?heighlight&index=2" style="padding-left:10px;color:white">▶{{HighlightCSV.datas[2].title}}</a>
    </marquee>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HighlightCSV:{"datas":[]}
    }
  },
  created(){
    this.getHighlightData();
  },
  methods:{
    getHighlightData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1317431680&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.HighlightCSV,'datas',csv.data);
      })
    }
  }
}
</script>

<style>
.text_run{
  font-size: 110%;
  display:block;
  margin: 8px;
  border-radius: 10px;
  width:70%;
  height: 25px;
}
</style>
<template>
	<div class="news-table">
    <b-tabs content-class="mt-3" >
      <b-tab title="本系亮點" :active='heighlight' :title-link-class="'tab-title'">
        <TablePage :datas=HighlightCSV article="heighlight" :perPage=8 />
      </b-tab>
      <b-tab title="最新消息" :active='news' :title-link-class="'tab-title'">
        <TablePage :datas=NewsCSV :perPage=8 />
      </b-tab>
      <b-tab title="選課通知" :active='action' :title-link-class="'tab-title'">
        <TablePage :datas=ActionCSV article="action" :perPage=8 />
      </b-tab>
      <b-tab title="學術演講" :active='speech' :title-link-class="'tab-title'">
        <TablePage :datas=SpeechCSV article="speech" :perPage=8 />
      </b-tab>
    </b-tabs>
	</div>
</template>

<script>
import TablePage from '@/components/TablePage'

export default {
	components: {
    TablePage
  },
  data () {
    return { 
      heighlight:false,
      news:false,
      speech:false,
      action:false,
      ActionCSV:{"datas":[]},
      NewsCSV:{"datas":[]},
      SpeechCSV:{"datas":[]},
      HighlightCSV:{"datas":[]}
    }
  },
  created () {
    this.getActionData();
    this.getNewsData();
    this.getHighlightData();
    this.getSpeechData();
  },
  mounted () {
    this.eventTab();
  },
  methods:{
    eventTab: function(){
      switch (localStorage.newsActive) {
        case 'heighlight':this.heighlight=true;break;
        case 'news':this.news=true;break;
        case 'speech':this.speech=true;break;
        case 'action':this.action=true;break;
        default:this.heighlight=true;break;
      }
      localStorage.newsActive=''
    },
    getActionData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=850778207&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.ActionCSV,'datas',csv.data);
      })
    },
    getNewsData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1354493919&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.NewsCSV,'datas',csv.data);
      })
    },
    getHighlightData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=1317431680&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.HighlightCSV,'datas',csv.data);
      })
    },
    getSpeechData () {
      this.$axios.get('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vSMr1RmWmfPaHS4RxYU5X5UHh0Lh9e5Lp4AEYOgF7ye9jtLoPWUnkX8IPOl5CRDD-5ZzY3j05P-ZbRs/pub?gid=595304138&single=true&output=csv').then(res=>{       
        const csv = this.$papa.parse( res.data, {
          header: true
        })
        this.$set(this.SpeechCSV,'datas',csv.data);
      })
    },
  }
}
</script>

<style>
.tab-title {
    font-size: 17px;
    padding: 5px;
}
</style>


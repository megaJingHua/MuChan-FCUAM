<template>
    <div class="container">
    <TitleCard title="本系亮點" img="idea.svg"/>
      <b-tabs content-class="mt-3"><TablePage :datas=HighlightCSV :perPage='10' :article="'heighlight'"/></b-tabs>
    </div>
</template>

<script>
import TablePage from '@/components/TablePage'
import TitleCard from '@/components/TitleCard'

export default {
	components: {
    TablePage,
    TitleCard
  },
  data () {
    return { 
      HighlightCSV:{"datas":[]}
    }
  },
  created () {
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
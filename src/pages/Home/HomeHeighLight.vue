<template>
<HeighLight :datas=HighlightCSV article="heighlight"/>
</template>

<script>
import HeighLight from '@/components/Accordion'
export default {
  name: 'Home',
  components: {
    HeighLight
    
  },
  data(){
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
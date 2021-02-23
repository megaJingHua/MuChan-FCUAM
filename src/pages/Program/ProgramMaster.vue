<template>
  <div class="container">
    <TitleCard title="學分學程-碩士班" img="diploma_for.svg"/>
    <div><TablePage :datas=Program :perPage=10 article="program"/></div>
  </div>
</template>

<script>
import Program from '@/datas/ProgramMaster'
import TitleCard from '@/components/TitleCard'
import TablePage from '@/pages/Program/ProgramTablePage'

export default {
  components: {
    TitleCard,
    TablePage
  },
  data() {
    return{
      Program
    }
    
  }
}
</script>

<style scoped>
li {
  list-style:none;
}
</style>
<template>
  <div class="container">
    <TitleCard title="學分學程-大學部" img="diploma_for.svg"/>
    <div><TablePage :datas=Program :perPage=10 article="program"/></div>
  </div>
</template>

<script>
import TablePage from '@/pages/Program/ProgramTablePage'
import Program from '@/datas/Program'
import TitleCard from '@/components/TitleCard'

export default {
  components: {
    TablePage,
    TitleCard
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
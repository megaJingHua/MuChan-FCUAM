<template>
  <div class="container">
    <b-row class="justify-content-md-center title m-0">
      <b-col lg="12" sm="12" md="12">
        <TitleCard title="學分學程" img="diploma_for.svg"/>
      </b-col>
    </b-row> 
    <b-row align-h="center">
      <b-col xl="3" lg="3" md="3" sm="12"><Card title="大學部" href="./#/programUniversity" :img="'book_left.svg'" /></b-col>
      <b-col xl="3" lg="3" md="3" sm="12"><Card title="碩士班" href="./#/programMaster" :img="'book_right.svg'" /></b-col>
    </b-row>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import Card from '@/components/CardOverlay'

export default {
  components: {
    TitleCard,
    Card
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
li {
    list-style:none;
    width: 30%;
}
</style>
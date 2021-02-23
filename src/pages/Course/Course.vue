
<template>
  <div class="container">
    <b-row class="justify-content-md-center title m-0">
      <b-col lg="12" sm="12" md="12">
        <TitleCard title="課程列表" img="book_for.svg"/>
      </b-col>
    </b-row> 
    <b-row align-h="center">
      <b-col xl="3" lg="3" md="3" sm="12"><Card :title=courseData.datas[0].title :href="'./#/course/containe?'+ courseData.datas[0].href " img="library_left.svg" /></b-col>
      <b-col xl="3" lg="3" md="3" sm="12"><Card :title=courseData.datas[1].title :href="'./#/course/containe?'+ courseData.datas[1].href " img="library_right.svg" /></b-col>
    </b-row>
	</div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import Card from '@/components/CardOverlay'
import courseData from '@/datas/Course'
export default {
  components: {
    TitleCard,
    Card
  },
  data() {
    return{
      courseData
    }
    
  }
}
</script>

<style scoped>
li {
  list-style:none;
}
</style>
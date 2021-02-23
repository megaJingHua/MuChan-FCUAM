<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center title">
        <b-col>
          <TitleCard title="獎助學金" img="money_for.svg"/>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col xl="4" lg="4" md="4" sm="12"><Card :title=ScholarshipData.datas[0].title :content=ScholarshipData.datas[0].content :href="'./#/scholarship/containe?'+ ScholarshipData.datas[0].href " :img="'pexels-photo-1112048.jpeg'" /></b-col>
        <b-col xl="4" lg="4" md="4" sm="12"><Card :title=ScholarshipData.datas[1].title :content=ScholarshipData.datas[1].content :href="'./#/scholarship/containe?'+ ScholarshipData.datas[1].href " :img="'pexels-photo-1112048.jpeg'" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import ScholarshipData from '@/datas/Scholarship'
import Card from '@/components/CardOverlay'

export default {
  components: {
    TitleCard,
    Card
  },
  data() {
    return {
      ScholarshipData
    }
  }
}
</script>

<style scoped>
li {
    list-style:none;
    width: 30%;
}
.button_css {
  width: 100px;
  height: 100px;
  margin: 5%;
  justify-content: center;
}
</style>
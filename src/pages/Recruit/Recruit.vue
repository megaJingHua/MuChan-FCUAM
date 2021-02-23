<template>
	<b-container>
      <b-row class="justify-content-md-center title m-0">
        <b-col lg="12" sm="12" md="12">
          <TitleCard title="招生資訊" img="school.svg"/>
        </b-col>
        </b-row>
      <b-row align-v="center" align-h="center" class="m-0">
        <b-col xl="4" lg="4" md="4" sm="12" xs="12" ><Card :title="RecruitData.datas[0].title" :href="'./#/recruit/containe?'+RecruitData.datas[0].href" :img="'pexels-photo-247899.jpeg'" /></b-col>
        <b-col xl="4" lg="4" md="4" sm="12" ><Card :title="RecruitData.datas[1].title" href="http://www.math.fcu.edu.tw/ds/#/" :img="'pexels-photo-710744.jpeg'" /></b-col>    
      </b-row>
      
	</b-container>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import Card from '@/components/CardOverlay'
import RecruitData from '@/datas/Recruit'
export default {
	components: {
    TitleCard,
    Card
  },
  data () {
    return { 
      RecruitData
    }
  }
}
</script>

<style scoped>
li {
    list-style:none;
}
</style>
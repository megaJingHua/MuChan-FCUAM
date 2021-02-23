<template>
<div>
    <b-container>
    <b-row style="height:50%">
        <b-col><Card :title="RecruitData.datas[0].title" :href="'./#/recruit/containe?'+RecruitData.datas[0].href" :img="'pexels-photo-247899.jpeg'" /></b-col>
    </b-row>
        <b-row style="height:50%">
        <b-col><Card :title="RecruitData.datas[1].title" :href="'./#/recruit/containe?'+RecruitData.datas[1].href" :img="'pexels-photo-710744.jpeg'" /></b-col>    
    </b-row >
    </b-container>
</div>
</template>

<script>
import Card from '@/components/CardOverlay'
import RecruitData from '@/datas/Recruit'
export default {
    components: {
        Card,
    },
    data(){
        return{
            RecruitData
        }
    }
}
</script>
<style scoped>
li {
    list-style:none;
}
h5 {
  text-align: center;
  color: #333;
  text-shadow: 0.1em 0.1em 0.1em #efece4;
}
</style>>


          
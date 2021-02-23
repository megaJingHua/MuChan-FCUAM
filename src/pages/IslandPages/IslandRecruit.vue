<template>
<Card title="大學部招生公告" :content="RecruitData.datas[0].content" :href="'./#/recruit/containe?'+RecruitData.datas[0].href" :img="'pexels-photo-247899.jpeg'" />
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


          
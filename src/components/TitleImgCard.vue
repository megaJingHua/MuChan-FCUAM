<template>
    <div>
        <div class="title-img-card" v-if="!phone">
            <h2 class="m-0 p-0">夢想從此啟程</h2>
            <p>本系以優質教學為核心，提供多元教學及數位教學平台，強調特色化、證照化、與專業化，鼓勵學生學習第二專長，培育優質數學種子及未來高科技人才。</p>
        </div>
        <div class="title-img-card-phone" v-else>
            <p class="pb-1" style="color:#4b2e83;font-weight:600;">夢想從此啟程</p>
            <p style="font-weight:200;font-size:80%;">本系以優質教學為核心，提供多元教學及數位教學平台，強調特色化、證照化、與專業化，鼓勵學生學習第二專長，培育優質數學種子及未來高科技人才。</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        phone:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.title-img-card{
    position: absolute;
    width:100%;
    background:rgba(255, 255, 255,0.7);
    right:0px;
    bottom:0px;
    z-index:999;
    font-weight: 400;
    padding:30px;
}
.title-img-card h2 {
    color:#4b2e83;
    padding-top: 10px;
}
.title-img-card p {
    font-weight: 600;
}
.title-img-card-phone{
    position: absolute;
    background:rgba(236, 233, 226,0.7);
    right:0px;
    bottom:0px;
    z-index:999;
    font-weight: 400;
    padding:10px;
}
.title-img-card-phone p{
    padding:0px;
    margin:0px;
}
</style>
<template>
    <div>
        <div class="home-title-img-card" v-if="!phone">
            <h2 class="m-0 p-0">學生在全新落成的電腦教室進行期末簡報</h2>
        </div>
        <div class="home-title-img-card-phone" v-else>
            <p class="pb-1" style="color:#4b2e83;font-weight:600;">學生在全新落成的電腦教室進行期末簡報</p>
            <p style="font-weight:200;font-size:80%;"></p>
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
.home-title-img-card{
    position: absolute;
    width:100%;
    height: 90px;
    background:rgb(255, 255, 255, 0.7);
    right:0px;
    bottom:0px;
    z-index:999;
    font-weight: 400;
    padding:30px;
}
.home-title-img-card h2 {
    color:#4b2e83;
    /* padding-top: 10px; */
}
.home-title-img-card p {
    font-weight: 600;
}
.home-title-img-card-phone{
    position: absolute;
    background:rgba(236, 233, 226,0.7);
    right:0px;
    bottom:0px;
    z-index:999;
    font-weight: 400;
    padding:10px;
}
.home-title-img-card-phone p{
    padding:0px;
    margin:0px;
}
</style>
<template>
<div id="card">
  <b-card
      rounded
      class="Card_hover animated bounceIn"
      style="text-align:center;border:0px"
  >
  <b-img :src="require('@/assets/icon/'+img)" style="width:98%;height:100px;border-radius:5px"></b-img>
  <hr class="_hr">
  <h2>{{title}}</h2>    
  <b-card-text class="cardText">
    {{text}}
  </b-card-text>
</b-card>
</div>
</template>

<script>
export default {
    props: {
        title:String,
        subTitle:String,
        text:String,
        img: String
    },
    components: {
    },
    data(){
        return{
            imageSrc:[]
        }
    },
    methods: {
      eventPhone: function () {
        var src = this.img;
        try {
          this.imageSrc =  require('@/assets/'+ src);
        } catch (err) {
          return;
        }
      }
    },
    created(){
      this.eventPhone();
    }
}
</script>

<style scoped>
#card {
    margin-bottom: 10px;
    letter-spacing: 1.5px;
    position: relative;
}
.Card_hover:hover hr{
  width: 100%;
}
.card-subtitle {
  font-size: 13px;
}
hr {
  transition: 0.8s;
}
._hr {
  width: 100px;
  border: solid 1px #ece9e2;
  background-color: #ece9e2;
}
</style>
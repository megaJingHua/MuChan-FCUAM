<template>
<div id="card">
    <b-container>
        <b-card
            rounded
            class="Card_hover animated bounceIn"
            style="text-align:center"
        >
        <b-img v-if="window.width>576" :src="getPhoto(img)" style="width:10vw;border-radius:5px"></b-img>
        <b-img v-if="window.width<=576" :src="getPhoto(img)" style="width:50vw;border-radius:5px"></b-img>
        <hr class="_hr">
        <h3>{{title}} <span>{{tit}}</span> </h3>
        <b-card-text class="cardText">
          <p class="m-1">
            信箱：{{text.email[0]}}
            <b-img :src="require('@/assets/email.png')" class="rounded-0 emailCss"></b-img>
            {{text.email[1]}}
          </p>
          <p class="m-0">
            分機：{{text.phone}}
          </p>
        </b-card-text>

    </b-card>
    </b-container>
</div>
</template>

<script>
export default {
  props: {
    title:String,
    tit: String,
    subTitle: String,
    text: Object,
    img: String
  },
  components: {
  },
  created () {
    this.eventNavHome();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  data(){
    return{
      imageSrc:[],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods:{
    eventNavHome() {
      localStorage.homePage = '';
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
    getPhoto(src) {
      try {
        return require("@/assets/teacher-photo/" + src);
      } catch (err) {
        return require("@/assets/teacher-photo/undefind.jpg");
      }
    }
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
  border: solid 1px #fec526;
  background-color: #fec526;
}
span {
  font-size: 13px;
}
.emailCss {
  width: 13px;
}
</style>
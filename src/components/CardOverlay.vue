<template>
<div>
  <b-card
    :title="title"
    :img-src="imageSrc"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 300px;margin-left: auto;margin-right: auto;"
    class="mb-3 text-center overlay_card_title"
    overlay
    text-variant="white"
  >
    <b-card-text>
      <p v-html="content"></p>
      <b-button class="overlay_card_button" size="sm" pill variant="info" :href="href">see more</b-button>
    </b-card-text>
</b-card>
</div>
</template>

<script>
  export default {
    props:{
      title:String,
      content: String,
      href: String,
      img: String
    },
    data() {
      return {
        imageSrc:[]
      }
    },
    methods: {
      eventPhone: function () {
        var src = this.img;
        if (src) {
          this.imageSrc = require('@/assets/'+ src);
        }
      }
    },
    created(){
      this.eventPhone();
    }
  }
</script>

<style scoped>
.overlay_card_title {
  font-size: 80% !important;
  font-weight: 800;
  -webkit-box-shadow: 0 4px 10px -5px rgba(0,0,0,.5)!important;
  box-shadow: 0 4px 10px -5px rgba(0,0,0,.5)!important;
  text-shadow: 0.2em 0.2em 0.1em rgba(0,0,0,.5)!important;
}
.overlay_card_button {
  font-size: 80% !important;
  background-color: #01a5d9;
  -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.5)!important;
  box-shadow: 0 4px 0 0 rgba(0,0,0,.5)!important;
  text-shadow: 0em 0em 0em rgba(0,0,0,.5)!important;
  margin: 10px;
}

p {
  font-size: 100%;
  letter-spacing: 1.5px;
}
</style>
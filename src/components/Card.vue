<template>
<div>
  <b-card
    :title="title"
    :img-src="imageSrc"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 15rem;"
    class="mb-2 text-center"
  >
    <b-card-text>
      {{content}}
    </b-card-text>

<b-button size="sm" variant="outline-info" :href="href">MORE</b-button>  </b-card>
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

</style>
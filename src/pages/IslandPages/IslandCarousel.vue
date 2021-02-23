<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- page 1 -->
      <b-carousel-slide img-src="../assets/carousel_1.jpg" >
        <h1>{{PageData.image[0].title}}</h1>
        <p>{{PageData.image[0].content}}</p>
      </b-carousel-slide>
      <!-- page 2 -->
      <b-carousel-slide img-src="../assets/carousel_2.jpg" >
        <h1>{{PageData.image[1].title}}</h1>
        <p>{{PageData.image[1].content}}</p>
      </b-carousel-slide>
      <!-- page 3 -->
      <b-carousel-slide img-src="../assets/carousel_3.jpg" >
        <h1>{{PageData.image[2].title}}</h1>
        <p>{{PageData.image[2].content}}</p>
      </b-carousel-slide>
      <!-- page 4 -->
      <b-carousel-slide img-src="../assets/carousel_4.jpg" >
        <h1>{{PageData.image[3].title}}</h1>
        <p>{{PageData.image[3].content}}</p>
      </b-carousel-slide>
      <!-- page 5 -->
      <b-carousel-slide img-src="../assets/carousel_5.jpg" >
        <h1>{{PageData.image[4].title}}</h1>
        <p>{{PageData.image[4].content}}</p>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  import PageData from '@/datas/Carousel'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        PageData
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
li {
    list-style:none;
}
.carousel-indicators li {
  background-color: #01a5d9 !important;
}
</style>>
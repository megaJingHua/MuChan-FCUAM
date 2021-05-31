<template>
  <el-carousel indicator-position="outside" height="400px" class="hidden-md-and-down" :autoplay="false">
    <el-carousel-item v-for="(item, i) in videoData" :key="i" trigger="click">
      <iframe
        width="1110"
        height="400"
        :src="item.url"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  props: ["videoData"],
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0;
  height: 100%;
  object-fit: cover;
}
</style>

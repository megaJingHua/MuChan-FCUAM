<template>
  <el-carousel indicator-position="outside" height="200px" class="hidden-md-and-up">
    <el-carousel-item v-for="(item, i) in imgData" :key="i" trigger="click">
      <img :src="item.url" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  props: ["imgData"],
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

<template>
  <div>
    <Header title="創新學制" />
    <div class="container">
      <div class="hidden-md-and-down">
        <img :src="require('@/assets/innovation/system1.jpg')" />
        <img :src="require('@/assets/innovation/system2.jpg')" />
        <img :src="require('@/assets/innovation/system3.jpg')" />
      </div>
      <div class="hidden-md-and-up">
        <img :src="require('@/assets/innovation/system_mobile1.jpg')" />
        <img :src="require('@/assets/innovation/system_mobile2.jpg')" />
        <img :src="require('@/assets/innovation/system_mobile3.jpg')" />
        <img :src="require('@/assets/innovation/system_mobile4.jpg')" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: { Header },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>

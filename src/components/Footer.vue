<template>
  <div class="container">
    <div class="footer">
      <el-divider></el-divider>
      <h4>ABOUT</h4>
      <ul>
        <li v-if="text.title">
          <h5>{{ text.title }}</h5>
        </li>
        <li v-if="text.phone">
          連絡電話：<a :href="`tel:${text.phone}`">{{ text.phone }}</a>
        </li>
        <li v-if="text.email">
          連絡信箱：<a :href="'mailto:' + text.email">{{ text.email }}</a>
        </li>
        <li v-if="text.service_hours">服務時間：{{ text.service_hours }}</li>
        <li v-if="text.address">地址：{{ text.address }}</li>
        <li v-if="text.updated">更新時間：{{ text.updated }}</li>
      </ul>
      <el-divider></el-divider>
      <p v-if="text.copyright">Copyright © {{ text.copyright }}</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getFooter();
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    getFooter() {
      this.$axios("get", "/footer")
        .then((res) => {
          this.text = res.data
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style>
.footer {
  text-align: center;
}
.footer ul {
  list-style-type: none;
  padding: 0;
}
</style>

<template>
      <b-card bg-variant="light" text-variant="dark" :header="title" class="text-center " header-class="title">
        <b-card-text>{{content}}</b-card-text>
        <b-button class="button" pill variant="outline-secondary" size="sm" :href="href" target="_blank">MORE</b-button>
      </b-card>
</template>

<script>
  export default {
    props:{
      title:String,
      content: String,
      href: String
    },
    data() {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.button {
  font-size: 90%;
}
.title {
  font-size: 120%;
  font-weight: 400;
}
</style>
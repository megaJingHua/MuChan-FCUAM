<template>
  <b-row role="tablist">
    <b-col xl="6" lg="6" md="6" sm="12">
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{data[0].title}}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{data[0].content}}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>      
    </b-col>
    <b-col xl="6" lg="6" md="6" sm="12">
      <b-card no-body>
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="light">{{data[1].title}}</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{data[1].content}}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>      
    </b-col>


  </b-row>
</template>

<script>
export default {
  props:{
    datas: Object
  },
  data() {
    return {
      data: this.datas.datas
    }
  }
}
</script>

<style scoped>

</style>
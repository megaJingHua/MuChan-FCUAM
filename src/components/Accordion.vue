<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{data[0].title}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p v-html="data[0].content"></p>
            <b-img v-if="image[0] !== ''" :src="image[0]" fluid alt="Responsive image"></b-img>
            ...<b-link :href="'./#/article?'+article+'&index=0'" class="card-link" >see more</b-link>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="light">{{data[1].title}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p v-html="data[1].content"></p>
            <b-img v-if="image[1] !== ''" :src="image[1]" fluid alt="Responsive image"></b-img>
            ...<b-link :href="'./#/article?'+article+'&index=1'" class="card-link" >see more</b-link>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="light">{{data[2].title}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p v-html="data[2].content"></p>
            <b-img v-if="image[2] !== ''" :src="image[2]" fluid alt="Responsive image"></b-img>
            ...<b-link :href="'./#/article?'+article+'&index=2'" class="card-link" >see more</b-link>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    props:{
      datas:Object,
      article:String
    },
    data() {
      return {
        data: this.datas.datas,
        image:''
      }
    },
    methods:{
      imageName :function(){
        let imageData = [];
        for (let i = 0; i <= 2; i++) {
          const url = this.data[i].image[0];
          url !== '' ? imageData.push(require('../assets/'+url)) : imageData.push('');
        }
        this.image = imageData;
      }
    },
    mounted () {
      this.imageName ();
    },
  }
</script>
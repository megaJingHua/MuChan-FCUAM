<template>
  <div class="container">
      <b-row class="justify-content-md-center title m-0">
        <b-col>
          <TitleCard title="核心能力" img="molecule_for.svg"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center m-0">
        <b-card-group deck class="col-lg-12 col-md-12 col-sm-12">
          <b-card
            v-for="(data, index) in capabilityData.datas" :key="index" class="Card_hover">
            <b-card-title title-tag="h3" class="dataTitle">{{data.title}}</b-card-title>
            <hr class="senior_hr">
            <!-- <b-img class="m-2" :src="require('@/assets/icon/'+data.image)" style="width:100%;border-radius:5px"></b-img> -->
            <b-card-text text-tag="li" v-for="(text, index) in data.capability" :key="index"
              >{{text}}</b-card-text>
          </b-card>
        </b-card-group>
      </b-row>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import capabilityData from '@/datas/Capability'

export default {
  components: {
    TitleCard
  },
  data() {
    return {
      capabilityData
    }
  }
}
</script>

<style scoped>
.Card_hover:hover hr{
  width: 100%;
}
hr {
  transition: 0.8s;
}
.university_hr {
  width: 100px;
  border: solid 1px #01a5d9;
  background-color: #01a5d9;
}
.senior_hr {
  width: 100px;
  border: solid 1px #4b2e83;
  background-color: #4b2e83;
}
.parent_hr {
  width: 100px;
  border: solid 1px #00b1b0;
  background-color: #00b1b0;
}
.general_hr {
  width: 100px;
  border: solid 1px #f29439;
  background-color: #f29439;
}

.dataTitle{
  text-align: center;
  font-weight: 600;
  color: #4b2e83;
}
</style>
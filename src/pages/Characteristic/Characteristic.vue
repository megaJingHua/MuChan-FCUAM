<template>
  <div class="characteristicCss container">
      <b-row class="justify-content-md-center title m-0">
        <b-col>
          <TitleCard title="系所特色" img="feature_for.svg"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center m-0">
        <b-col >
          <b-card class="cardCss m-3" v-for="(data, index) in CharacteristicData.contents" :key="index">
            <b-media no-body tag="ui">
              <b-media-aside tag="li">
              </b-media-aside>
              <b-media-body class="p-3">
                <b-img :src="require('@/assets/icon/'+data.image)" style="width:100%;"></b-img>
                <div class="p-2 pt-4">
                  <h4>{{data.title}}</h4>
                  <p>{{data.content}}</p>
                </div>
              </b-media-body>
            </b-media>
          </b-card>
        </b-col>
      </b-row>

  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import CharacteristicData from '@/datas/Characteristic'

export default {
  components:{
    TitleCard
  },
  data() {
    return {
      CharacteristicData
    }
  }
}
</script>

<style scoped>
.characteristicCss {
  letter-spacing: 1.3px;
}
.cardCss {
  margin-bottom: 15px;
  border: 0px;
}
p {
  margin: 0px;
}
h4 {
  font-weight: 600;
  color:#4b2e83
}
</style>
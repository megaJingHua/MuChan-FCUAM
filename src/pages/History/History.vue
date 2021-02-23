<template>
  <div class="historyCss container">
    <b-container>
    <TitleCard :title="historyData.title" img="school2.svg" />
      <b-row class="justify-content-md-center m-0">
        <b-col>
          <b-media no-body class="mediaCss" v-for="(data, index) in historyData.contents" :key="index">
            <b-media-aside>
              <b-img blank blank-color="#ccc" width="3" height="20"></b-img>
            </b-media-aside>
            <b-media-body class="ml-2">
              <h6>{{ data.title }}</h6>
              <Accordion v-if="data.style == 'accordion'" :datas="data" />
              <div v-else-if="data.style == 'text'">
              <p v-html="data.content"></p>
              <b-img class="m-2" :src="require('@/assets/icon/'+data.image)" style="width:100%;border-radius:5px"></b-img>
              </div>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center pt-3 pb-5">
        <div style="width: 100%;">
          <div class="enter-card enter-area mt-3">
            <h4>{{historyData.history[0].title}}</h4>
            <p>{{historyData.history[0].content}}</p>
            <a href="./#/article?history&index=0"><button>MORE<div> > </div></button></a>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import Accordion from '@/components/Accordion2'
import historyData from '@/datas/History'

export default {
  components: {
    TitleCard,
    Accordion
  },
  data() {
    return {
      historyData
    }
  }
}
</script>

<style scoped>
.historyCss {
  letter-spacing: 1.3px;
}
.mediaCss {
  margin-bottom: 15px;
}
.cardCss {
  margin-bottom: 15px;
}
.enter-area {
	border-radius: 3px;
	margin: 10px;
	background:#ECE9E2;
}
.enter-card {
	padding:30px;
	margin:5px;
}
.enter-card h4{
	color:rgb(72, 46, 179);
	font-weight: 600;
}

.enter-card button {
	font-size: 90%;
	display:flex;
	justify-content:flex-end;
	padding:0px 0px 0px 6px;
	background:white;
	border:none;
}

.enter-card button div{
	color:white;
	margin-left:5px;
	background: rgb(72, 46, 179);
	padding:0px 5px;
	border-left: 4px solid rgb(175, 164, 218);
}
</style>
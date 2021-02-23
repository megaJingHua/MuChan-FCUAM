<template>
	<div class="container">
    <TitleCard :title="'招生資訊-'+data.title" img="school.svg"/>
    <b-container>
      <div>
        <li v-for="item in this.data.video" :key='item'>
          <iframe width="100%" height="300" :src="'https://www.youtube.com/embed/'+item" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </li>
        <hr>
        <b-row class="justify-content-md-center pt-3 pb-5">
          <div style="width: 100%;" v-for="(text, index) in this.data.inner" :key="index">
            <div class="enter-card enter-area mt-3">
              <h4 v-html="text.title"></h4>
              <p>{{text.content}}</p>
              <a :href="text.href"><button>MORE<div> > </div></button></a>
            </div>
          </div>
        </b-row>
      </div>
    </b-container>
		<TablePage :datas="tableData" :perPage=10 :article="'recruit&'+data.href" />
	</div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import RecruitData from '@/datas/Recruit'
import TablePage from '@/components/TablePage'
import UniversityData from '@/datas/RecruitUniversity'
import MasterData from '@/datas/RecruitMaster'
export default {
	components: {
    TitleCard,
    TablePage
  },
  data () {
    return { 
      RecruitData,
      data:[],
      tableData:[],
      UniversityData,
      MasterData,
      type: ''
    }
  },
  created(){
    this.eventData();
  },
  methods: {
    eventData: function () {
      const type = location.hash;
      const allData = this.RecruitData.datas;
        for (let i = 0; i < allData.length; i++) {
          if(type.indexOf(allData[i].href)!==-1){
            this.data = allData[i];
          }
        }
        this.tableData = type.indexOf('master') !== -1 ? MasterData : UniversityData;
        this.type = type.indexOf('master') !== -1 ? 'master' : 'univer';
    }
  }
}
</script>

<style scoped>
li {
    list-style:none;
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
</style>>
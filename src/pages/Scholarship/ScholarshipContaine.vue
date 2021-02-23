<template>
  <div class="container">
    <TitleCard :title="'獎助學金 - ' + data.title" img="money_for.svg"/>
    <b-container>
      <TablePage 
        :datas="tableData" 
        :perPage=10 
        :article="'scholarship&'+data.href" />
    </b-container>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import TablePage from '@/components/TablePage'
import ScholarshipData from '@/datas/Scholarship'
import UniversityData from '@/datas/ScholarshipUniversity'
import MasterData from '@/datas/ScholarshipMaster'

export default {
	components: {
    TitleCard,
    TablePage
  },
  data() {
    return {
      ScholarshipData,
      data:[],
      tableData:[],
      UniversityData,
      MasterData
    }
  },
  created() {
    this.eventData();
  },
  methods: {
    eventData: function() {
      const type = location.hash;
      const allData = this.ScholarshipData.datas;
      for (let i=0 ; i < allData.length ; i++){
        if ( type.indexOf(allData[i].href) !== -1){
          this.data = allData[i];
        }
      this.tableData = type.indexOf("master") !== -1 ? MasterData : UniversityData;
      }
    }
  }
}
</script>
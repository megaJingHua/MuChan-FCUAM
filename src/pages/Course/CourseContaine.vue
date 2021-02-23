<template>
  <div class="container">
    <TitleCard :title="'課程列表 - ' + data.title" img="book_for.svg"/>
    <div>
      <TablePage :datas=tableData :perPage=10 :article="'course&'+data.href" />
    </div>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import TablePage from '@/pages/Course/CourseTablePage'
import CourseData from '@/datas/Course'
import UniversityData from '@/datas/CourseUniversity'
import MasterData from '@/datas/CourseMaster'

export default {
  components: {
    TitleCard,
    TablePage
  },
  data() {
    return {
      CourseData,
      UniversityData,
      MasterData,
      data: [],
      tableData: []
    }
  },
  created() {
    this.eventData();
  },
  methods: {
    eventData: function(){
      const type = location.hash;
      const allData = this.CourseData.datas;
      for (let i=0 ; i < allData.length ; i++) {
        if ( type.indexOf(allData[i].href) !== -1 ){
          this.data = allData[i];
        }
        if ( type.indexOf("master") !== -1 ){
          this.tableData = MasterData;
        } else {
          this.tableData = UniversityData;
        }
      }      
    }
  }
}
</script>
<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center title">
        <b-col>
          <TitleCard title="師資介紹" img="teacher_for.svg"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col lg="4" md="4" sm="12" class="colCss colButton">
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher_am">
            <h5>應數系</h5>
            <hr class="am_hr">
          </b-button>
        </b-col>
        <!-- <b-col lg="4" md="4" sm="12" class="colCss colButton">
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher_calculus">
            <h5>微積分中心</h5>
            <hr class="calculus_hr">
          </b-button>
        </b-col> -->
        <b-col lg="4" md="4" sm="12" class="colCss colButton">
          <b-button squared class="buttonCss animated zoomIn m-3" variant="light" href="#/teacher_office">
            <h5>系辦公室</h5>
            <hr class="office_hr">
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import TitleCard from '@/components/TitleCard'
export default {
  components: {
    TitleCard
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.buttonCss {
  width: 90%;
  text-shadow: 0.1em 0.1em 0.1em #efece4;
}
.buttonCss:hover hr{
  width: 100%;
}
hr {
  transition: 0.8s;
}
.am_hr {
  width: 100px;
  border: solid 1px #f29439;
  background-color: #f29439;
}
.office_hr {
  width: 100px;
  border: solid 1px #01a5d9;
  background-color: #01a5d9;
}
</style>
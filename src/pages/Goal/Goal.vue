<template>
<div>
  <div class="container">
      <b-row class="m-0">
        <b-col>
          <TitleCard title="教育目標" img="target_for.svg"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center m-0" style="padding-top: 10px">
        <img v-if="window.width>=576" :src="require('@/assets/icon/goal.jpg')" style="width:70%;">
      </b-row>
  </div>
  <img v-if="window.width<576" :src="require('@/assets/icon/m_goal.jpg')" style="width:100%;">
</div>
</template>

<script>
import TitleCard from '@/components/TitleCard'

export default {
  components: {
    TitleCard
  },
  data() {
    return{
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
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
  border: solid 1px #fec526;
  background-color: #fec526;
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

.card-contain{
  text-align:center;
}

.card-contain h5 {
  font-weight: 600;
}
</style>
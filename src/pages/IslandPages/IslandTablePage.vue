<template>
  <div class="overflow-auto action_card">
    <b-table
      class="islandTable"
      id="my-table"
      :fields="fields"
      :items=newDatas
      :per-page="perPage"
      :current-page="currentPage"
      caption-top
    >
      <template v-slot:cell(title)="data" >
        <b-link class="link" :href="'./#/article?'+article+'&index='+data.index">{{ data.value}}</b-link>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    props: {
        datas: Object,
        perPage: {
          type:Number,
          default: 20
        },
        article: {
          type:String,
          default: 'news'
        }
    },
    data() {
      return {
        currentPage: 1,
        newDatas:[],
        fields:[{ key:'title', label:'最新消息'}]
      }
    },
    created () {
      this.reorganizeData();
    },
    computed: {
      rows() {
        return this.datas.datas.length
      }
    },
    methods:{
      reorganizeData: function () {
        const data = this.datas.datas;
        let newDatas=[];
        for (let i = 0; i < data.length; i++) {
          newDatas.push({title:data[i].title, date:data[i].date})
        }
        this.newDatas=newDatas;
      }
    }
  }
</script>
<style scoped>
.link {
  vertical-align:middle;
  color: #495057;
  -webkit-line-clamp: 1; /* 設置超出多少行隐藏 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-inline-box;
  letter-spacing: 1.5px;
  /* 設置 display 為 -webkit-box 或者 -webkit-inline-box 時為隐藏狀態 */
}
#my-table {
  letter-spacing: 1.3px;
}
.islandTable{
  background-color:#ECE9E2;
  color:#4b2e83;
  font-size:110%;
}

::-webkit-scrollbar-track {
background-color: transparent;
border-radius: 8px;
}
::-webkit-scrollbar {
  margin: 5px;
  width: 3px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #4b2e83;
}
</style>
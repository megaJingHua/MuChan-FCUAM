<template>
  <div class="overflow-auto">
    <b-table
      id="my-table"
      :fields="fields"
      :items=newDatas
      :per-page="perPage"
      :current-page="currentPage"
      caption-top
    >
      <template v-slot:cell(title)="data">
        <b-link class="link" :href="data.item.href" target="_blank" >{{ data.item.title}}</b-link>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    props: {
        datas: Object,
        perPage: {
          type:Number,
          default: 6
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
        fields:[{ key:'title', label:'標題', thStyle: {color: '#4b2e83'}}]
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
          newDatas.push({title:data[i].title, date:data[i].date,href:data[i].href})
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
</style>
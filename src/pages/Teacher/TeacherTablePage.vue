<template>
  <div>
    <b-table
      id="my-table"
      :fields="fields"
      :items="datas"
      caption-top
    >
      <template v-slot:table-colgroup="scope">
        <col
          v-for="field in fields" :key="field.key"
          :style="{ width: (field.key === date) || (field.key === end_date) ? '135px' : 'auto'}"
        >
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    props: {
      datas: Array,
      fields: [Array],
      date: {
        type: String,
        default: 'proj_start_date'
      },
      end_date: {
        type: String,
        default: 'proj_end_date'
      },
      article: {
        type:String,
        default: 'news'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      rows() {
        return this.datas.length
      }
    }
  }
</script>
<style scoped>
#my-table {
  letter-spacing: 1.3px;
}
</style>
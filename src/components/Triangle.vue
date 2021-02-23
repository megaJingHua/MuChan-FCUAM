<template>
<div class="tringle" :style="{ 'border-color': 'transparent ' + color +' transparent transparent','border-width':'0 ' + size + 'px ' + size + 'px 0', 'left': left + 'px', 'top': top + 'px'}"></div>
</template>

<script>
export default {
  props: {
    size:String,
    color:String,
    left:String,
    top:String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.tringle {
    position: relative;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 120px 120px 0;
    border-color: transparent #fec426 transparent transparent;
}
</style>
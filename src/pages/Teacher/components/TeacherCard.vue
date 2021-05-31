<template>
  <el-row :gutter="10" class="ma-0 pa-0" style="align-items: stretch">
    <el-col
      type="flex"
      :span="6"
      :xs="24"
      class="pb-2"
      v-for="(item, i) in teacher"
      :key="i"
    >
      <el-card :body-style="{ padding: '0px' }">
        <div style="height: 350px">
          <img
            :src="`http://www.math.fcu.edu.tw/2021_new_website/data/img/teacher/${item.name}.jpg`"
          />
        </div>
        <div style="padding: 16px">
          <h5>{{ item.name }}</h5>
          <span> | {{ item.specail.slice(2) }}</span>
          <el-button size="mini" style="margin: 0px 10px; padding: 4px"
            ><router-link :to="`/teacher-container?id=${item.emp_id}`"
              >More</router-link
            ></el-button
          >
          <hr />
          <li v-if="item.emp_email">
            個人信箱：<span style="display: inline-block"
              >{{ eventEmail(item.emp_email, true) }}<i class="fa fa-at"></i
              >{{ eventEmail(item.emp_email, false) }}</span
            >
          </li>
          <li v-if="item.skill.length">
            專長：
            <span
              v-for="(skillItem, i) in item.skill"
              :key="i"
              style="display: inline-block"
              >{{ skillItem.ski_desc_c }}|</span
            >
          </li>
          <li v-if="item.emp_ext && item.emp_ext !== ' '">
            分機：<span>{{ item.emp_ext }}</span>
          </li>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["teacher"],
  methods: {
    eventEmail(email, type) {
      if (!email) return;
      if (type) {
        return email.split("@")[0];
      }
      return email.split("@")[1];
    },
  },
};
</script>

<style scoped>
h5 {
  display: inline;
}
span {
  display: inline;
  font-size: 14px;
}
.el-row {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0px;
}

.el-card {
  height: 100%;
}
.el-card h5 {
  font-weight: 600;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0;
  height: 100%;
  object-fit: cover;
}
li {
  display: inline-block;
  list-style-type: none;
  padding: 0;
}
</style>


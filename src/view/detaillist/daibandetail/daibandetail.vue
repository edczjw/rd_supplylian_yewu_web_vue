<template>
  <div>
    <div class="outpadding">
       <!-- <p class="xiangqingtitle"><i class="el-icon-location-outline"></i>北京华域</p> -->

      <el-tabs v-model="tabname" type="card">
        <!-- 有两大板块，分别来自不同的页面 -->
        <el-tab-pane label="基本信息" name="daibanuserbase"></el-tab-pane>
        <el-tab-pane label="文件信息下载" name="userdownload"></el-tab-pane>
      </el-tabs>
      <daibanuserbase v-if="tabname=='daibanuserbase'"></daibanuserbase>
      <userdownload v-if="tabname=='userdownload'"></userdownload>
    </div>
  </div>
</template>
<script>
import daibanuserbase from "./daibanuserbase/daibanuserbase";
import userdownload from "../detailbase/userbase/userdownload";

export default {
  data() {
    return {
      detail: {},
      tabname: "daibanuserbase",//默认打开的是基本信息
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
  watch: {},
  components: {
    daibanuserbase,
    userdownload
  }
};
</script>

 <style lang='less' scoped>

.outpadding {
  padding: 30px 20px;

  background-color: rgb(252, 249, 249);
}
</style>

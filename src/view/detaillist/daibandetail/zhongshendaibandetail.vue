<template>
  <div>
    <div class="line-bin">
          我的待办<i class="el-icon-arrow-right"></i>
          <router-link to="/mydaiban/mydaiban">我的待办</router-link>
          <i class="el-icon-arrow-right"></i>企业详情
      </div>
    <div class="outpadding">
       <!-- <p class="xiangqingtitle"><i class="el-icon-location-outline"></i>北京华域</p> -->

      <el-tabs v-model="tabname" type="card">
        <!-- 有两大板块，分别来自不同的页面 -->
        <el-tab-pane label="基本信息" name="chushendaibanuserbase"></el-tab-pane>
        <el-tab-pane label="文件信息下载" name="userdownload"></el-tab-pane>
      </el-tabs>
      <chushendaibanuserbase v-if="tabname=='chushendaibanuserbase'"></chushendaibanuserbase>
      <userdownload v-if="tabname=='userdownload'"></userdownload>
    </div>
  </div>
</template>
<script>
import chushendaibanuserbase from "./daibanuserbase/chushendaibanuserbase";
import userdownload from "../detailbase/userbase/userdownload";

export default {
  data() {
    return {
      detail: {},
      tabname: "chushendaibanuserbase",//默认打开的是基本信息
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
  watch: {},
  components: {
    chushendaibanuserbase,
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

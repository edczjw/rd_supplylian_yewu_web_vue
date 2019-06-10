<template>
<!-- template必须包裹一个div，否则会报错 -->
<div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
   <el-row>
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#2a3542" text-color="rgb(226, 228, 229)" active-text-color="rgb(68, 196, 235)"
        :collapse="this.$store.state.isLeftHiden" unique-opened>

            <el-submenu index="1">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-webicon07"></use>
              </svg>
                <span>企业管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/qiyejianguan/jianguanlist" >
                      <el-menu-item index="1-1">企业列表</el-menu-item>
                  </router-link>
                  <router-link to="/qiyejianguan/countcheck" >
                      <el-menu-item index="1-2">开户审核</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="2">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zuoyeanjian"></use>
              </svg>
                <span>案件信息</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/anjianxinxi/anjianguanli" >
                      <el-menu-item index="2-1">案件管理</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daibanshixiang"></use>
              </svg>
                <span>我的待办</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/mydaiban/mydaiban" >
                      <el-menu-item index="3-1">我的待办</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huankuan"></use>
              </svg>
                <span>入账审核</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/ruzhangshenhe/shougongruzhang" >
                      <el-menu-item index="4-1">手工入账</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caiwu"></use>
              </svg>
                <span>账务数据</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/caiwushuju/fangkuanjilu" >
                      <el-menu-item index="5-1">放款记录</el-menu-item>
                  </router-link>
                  <router-link to="/caiwushuju/huankuanjilu" >
                      <el-menu-item index="5-2">还款记录</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-daibanshixiang1"></use>
              </svg>
                <span>逾期管理</span>
              </template>
              <el-menu-item-group>
                  <router-link to="/yuqiguanli/yuqianjian" >
                      <el-menu-item index="6-1">逾期案件</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>



        </el-menu>
  </el-col>
   </el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped  lang=less>
  .el-menu {
      border-color: #2a3542;
  }

/* 菜单 */
.side {
  position: fixed;

  width: 200px;
  height: 100%;
  transition: all .5s;

  background-color: #2a3542;
}

.side-menu {
  width: 64px;
  transition: all .5s;
  background-color: #2a3542;
}

/* 修边 */
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  margin: -.2px !important;
}

.el-menu-item {
  text-align: center;
}
/* 图标样式 */
svg {
  padding: 3px 10px;
}

</style>
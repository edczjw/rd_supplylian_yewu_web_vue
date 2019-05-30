<template>
  <div class="topBanner">
    <div class="line-bin">
          入账审核<i class="el-icon-arrow-right"></i>
          <router-link to="/shougongruzhang/detail">手工入账</router-link>
          <i class="el-icon-arrow-right"></i>入账详情
      </div>
    <div class="content">
      <div class="searcharea">
        <!-- el-form接收一个model，必须配合el-form-item一起使用，并且在el-form-item上绑定prop属性 -->
        <el-form ref="searchform" :model="searchform" label-width="180px" size="mini">
          <el-row :gutter="30">
            <el-col :span="6">
              <el-form-item label="客户实还金额" prop="processNo">
                <el-input v-model="searchform.processNo" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="客户实还款时间" prop="name">
                <el-input v-model="searchform.name" clearable></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="5">
              <div class="di">
                <div class="wrapper">
                  <el-button type="primary" plain @click="search()" size="mini">提交</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- =============================== 展示表格数据框 =================================== -->
      <table class="jititable" border style="word-wrap:break-word; word-break:break-all;">
        <tr>
          <td>应还款总额</td>
          <td></td>
          <td>应还款本金</td>
          <td></td>
        </tr>

        <tr>
          <td>应还款利息</td>
          <td></td>
          <td>应还款日期</td>
          <td></td>
        </tr>

        <tr>
          <td>逾期天数</td>
          <td></td>
          <td>罚息</td>
          <td></td>
        </tr>

        <tr>
          <td>查看还款凭证</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0, //总信息数
      listLoading: false, //加载样式
      pageIndex: 1, //初始页
      pageSize: 50, //显示当前行的条数

      searchform: {
        channelCd: "", //进件渠道
        productCd: "", //渠道产品
        approveStatusType: "", //审批结果
        beginDate: "", //开始时间
        endDate: "", //至
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      }
    };
  }
};
</script>
<style lang="less" scoped>
/* 计提表格 */
.jititable {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  border: 1px solid rgb(196, 197, 199);
  margin-top: 30px;
}

.jititable th {
  height: 50px;
}

.jititable td {
  height: 50px;
  width: 110px;
}
</style>

<template>
  <div class="topBanner">
      <div class="line-bin">
          财务数据<i class="el-icon-arrow-right"></i>
          <router-link to="/caiwushuju/huankuanjilu">还款记录</router-link>
          <i class="el-icon-arrow-right"></i>还款详情
      </div>
      <!-- =============================== 展示表格数据框 =================================== -->
      <table class="jititable" border style="word-wrap:break-word; word-break:break-all;">
        <tr>
          <td>已还总总额</td>
          <td></td>
          <td>剩余总金额</td>
          <td></td>
        </tr>

        <tr>
          <td>已还本金</td>
          <td></td>
          <td>剩余未还本金</td>
          <td></td>
        </tr>

        <tr>
          <td>已还利息</td>
          <td></td>
          <td>剩余未还利息</td>
          <td></td>
        </tr>

        <tr>
          <td>已还罚息</td>
          <td></td>
          <td>剩余未还罚息</td>
          <td></td>
        </tr>

        <tr>
          <td>逾期天数</td>
          <td></td>
          <td>查看还款凭证</td>
          <td></td>
        </tr>

        <tr>
          <td>应还款日期</td>
          <td></td>
          <td>客户实还款时间</td>
          <td></td>
        </tr>
      </table>
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

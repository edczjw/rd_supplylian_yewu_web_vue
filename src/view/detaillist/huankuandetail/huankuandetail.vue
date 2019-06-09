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
          <td>还款审核</td>
          <td colspan="1" style="color:red">
            <span v-if="this.checkResult=='2'">通过</span>
            <span v-if="this.checkResult=='3'">拒绝</span>
            </td>
            <td></td>
            <td></td>
        </tr>

        <tr>
          <td>已还总金额</td>
          <td>{{detail.totalMoney}}</td>
          <td>剩余总金额</td>
          <td>{{detail.surplusTotalMoney}}</td>
        </tr>

        <tr>
          <td>已还本金</td>
          <td>{{detail.paidPrincipal}}</td>
          <td>剩余未还本金</td>
          <td>{{detail.surplusPrincipal}}</td>
        </tr>

        <tr>
          <td>已还利息</td>
          <td>{{detail.paidInterest}}</td>
          <td>剩余未还利息</td>
          <td>{{detail.surplusInterest}}</td>
        </tr>

        <tr>
          <td>已还罚息</td>
          <td>{{detail.paidPenalty}}</td>
          <td>剩余未还罚息</td>
          <td>{{detail.paidPenalty}}</td>
        </tr>

        <tr>
          <td>逾期天数</td>
          <td>{{detail.overdueDates}}</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>查看还款凭证</td>
          <td colspan="1"><a :href='detail.imagesUrl' target="_blank">预览</a></td>
          <td></td>
            <td></td>
        </tr>

        <tr>
          <td>应还款日期</td>
          <td>{{detail.loanExpireDate}}</td>
          <td>客户实还款时间</td>
          <td>{{detail.repayTime}}</td>
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

      checkResult:"",
      detail:{},
      searchform: {
        processNo:"",
      }
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    //获取详情
    getdetail(){
      this.searchform.processNo = this.$route.query.processNo;
      this.checkResult = this.$route.query.checkResult;
      this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/manage/orderInfo",
                    data: this.searchform,
                })
                .then(
                    response => {
                    if(response.data.code==0){
                          this.detail = response.data.detail.result;
                    }else{
                        this.$message.error(response.data.msg);
                    }
                    }
                  ).catch(
                    error => {
                    this.$message({
                          dangerouslyUseHTMLString: true,//表示提示的是html片段
                          message: '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> '+
                          error.response.data.message,
                          type: "error"
                        });
                    }
                  )
          }
  },
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
  font-family: '宋体'
}

.jititable th {
  height: 50px;
}

.jititable td {
  height: 50px;
  width: 110px;
}
</style>

<template>
  <div>

    <div class="el-table">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jibenxinxi"></use>
            </svg>借款信息
          </th>
        </tr>
        <ul>
          <li>
            <label >本次申请借款总额（元）：</label>{{detail.totalApplication}}
          </li>
          <li>
            <label >本次申请借款最长期限（天）：</label>{{detail.applicationDeadline}}</li>
        </ul>
      </table>
    </div>

    <div class="el-table">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jibenxinxi"></use>
            </svg>企业基本信息栏
          </th>
        </tr>

        <ul>
          <li>
            <label>企业名称：</label>
            {{detail.enterpriseName}}
          </li>
          <li>
            <label>注册资本：</label>
            {{detail.registeredCapital}}
          </li>
          <li>
            <label>实缴资本：</label>
            {{detail.paidCapital}}
          </li>
          <li>
            <label>成立开始日：</label>
            {{detail.startingDate}}
          </li>
          <li>
            <label>成立有效截止日：</label>
            {{detail.endingDate}}
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="detail.generalTaxpayers == '1'">是</span>
            <span v-if="detail.generalTaxpayers == '0'">否</span>
          </li>

          <li>
            <label>法定代表人姓名：</label>
            {{detail.legalName}}
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            {{detail.legalIdCard}}
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            {{detail.legalPhone}}
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            {{detail.socialCode}}
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            {{detail.registeredAddress}}
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            {{detail.businessAddress}}
          </li>

          <div class="tab-dd">
            <el-table
              :data="this.detail.controlList"
              size="mini"
              border
              style="font-size:8px"
            >
              <el-table-column prop="controlName" label="实际控制人姓名" align="center"></el-table-column>
              <el-table-column prop="controlIdCard" label="实际控制人身份证号码" align="center"></el-table-column>
              <el-table-column prop="controlPhone" label="实际控制人联系电话" align="center"></el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table
              :data="this.detail.businessList"
              size="mini"
              border
              style="font-size:8px"
            >
              <el-table-column prop="businessName" label="业务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="this.detail.financeList" size="mini" border style="font-size:8px">
              <el-table-column prop="financeName" label="财务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </div>
        </ul>
      </table>
    </div>

    <div class="el-table el-table--fit  el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhangqia"></use>
            </svg>银行卡信息</th>
        </tr>
        <ul>
          <li>
            <label >银行卡卡号：</label>{{detail.cardNo}}</li>
          <li>
            <label >银行名称：</label>{{detail.bankName}}</li>
          <li>
            <label >账户户名：</label>{{detail.accountName}}</li>
          <li>
            <label >银行支行名称：</label>{{detail.bankBranchName}}</li>
          
        </ul>
      </table>
    </div>

    <div class="el-table el-table--fit  el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shengpi"></use>
            </svg>企业财务信息栏</th>
        </tr>
        <ul class="place">
          <li style="width:100%">
                <el-table :data="detail.threeYearDevelopmentSituation" border highlight-current-row size="mini">
                  <el-table-column prop="nearlyYears" label="年份" align="center">
                  </el-table-column>
                  <el-table-column prop="incomeSum" label="经营收入金额（元）" align="center">                          
                  </el-table-column>
                  <el-table-column prop="profitSum" label="利润金额（元）" align="center">
                  </el-table-column>
                  <el-table-column prop="invoiceSum" label="开票金额（元）" align="center">
                  </el-table-column>
                  <el-table-column prop="taxesSum" label="纳税金额（元）" align="center">
                  </el-table-column>
              </el-table></li>
              
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          <li>
            <label >当前金融机构借贷余额：</label>{{detail.financialLendingBalance}}</li>
          <li>
            <label >当前非金融机构融资余额：</label>{{detail.unfinancialLendingBalance}}</li> 
          <li>
            <label >对外担保情况：</label>
            <span v-if="detail.externalGuarantees == '0'">无</span>
            <span v-if="detail.externalGuarantees == '1'">有</span>
            </li>
          <li>
            <label >担保人：</label>{{detail.warrantorName}}</li>
          <li>
            <label >担保金额：</label>{{detail.amountGuaranteed}}</li>
          <li>
            <label >担保期限：</label>{{detail.warrantyPeriod}}</li> 
         
            
        </ul>
      </table>
    </div>

<div class="el-table el-table--fit  el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhangqia"></use>
            </svg>人力薪资贷申请</th>
        </tr>
        <ul>
               
        
          <li>
            <label >应收账款主体（债务人）全称：</label>{{detail.paymentSubject}}</li>
        <li>
            <label >开始合作期限：</label>{{detail.periodCooperation}}</li>
        <li  style="width:100%">
           <el-table :data="detail.turnover" border highlight-current-row size="mini">
              <el-table-column prop="turnoverYear" label="年份" align="center">
              </el-table-column>
              <el-table-column prop="turnoverSum" label="交易额（元）" align="center">
              </el-table-column>
          </el-table></li>  
          <li></li>
          <li></li>
          <li></li>
        <li>
            <label >付款账期：</label>{{detail.paymentPeriod}}</li>
        <li>
            <label >项目当前应收款总额：</label>{{detail.totalReceivables}}</li>
        <li>
            <label >项目员工总数：</label>{{detail.projectEmployees}}</li>
        <li>
            <label >平均员工薪资：</label>{{detail.averageEmployeeSalary}}</li>
        <li>
            <label >单个员工薪资上限：</label>{{detail.capEmployeeSalary}}</li>
        <li>
            <label >本次借款指定回款及还款账户：</label>{{detail.repaymentAccount}}</li>
        <li>
            <label >本次借款质押的应收款金额：</label>{{detail.pledgedReceivables}}</li>
        <li>
            <label >本次借款担保方式：</label>{{detail.borrowingGuarantee}}</li>
        
          
        </ul>
      </table>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {

      //基本信息
      detail: {},
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    //查看认证
    getLink(url){
      window.open(url)
    },

    getdetail() {
      var processNo=this.$route.query.processNo;
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/case/particulars",
              data: {
                processNo:processNo
              }
          })
          .then(
              response => {
              if(response.data.code==0){
                    this.detail = response.data.detail.result
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
            )}
  },
  watch: {},
  components: {}
};
</script>

 <style lang='less' scoped>
* {
  font-size: 14px;

  box-sizing: border-box;

  list-style: none;
}

ul {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  // 上左右下
  margin: 10px 0 10px;

  li {
    line-height: 40px;
    width: 37%;
    height: 50px;

    label {
      float: left;

      width: 260px;
      margin-right: 10px;

      text-align: right;

      color: #b48e3d;
    }
  }
}

.outpadding {
  padding: 30px 0;
}

svg {
  width: 40px;
  height: 40px;
  padding: -1px 8px !important;
}
.tab-dd {
  padding: 30px;
  width: 100%;
}

/* 表格表头样式 */
.el-table th {
  color: rgba(204, 160, 102, 0.925) !important;
  background-color: rgba(245, 244, 236, 0.979) !important;
}
</style>

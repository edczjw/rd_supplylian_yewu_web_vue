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
            <label >本次申请借款总额（元）：</label>{{detail.custName}}
          </li>
          <li>
            <label >本次申请借款最长期限（天）：</label>{{detail.idNo}}</li>
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
            {{detail.custName}}
          </li>
          <li>
            <label>注册资本：</label>
            {{detail.age}}
          </li>
          <li>
            <label>实缴资本：</label>
            {{detail.applyLimit}}
          </li>
          <li>
            <label>成立起止日：</label>
            {{detail.applyTerm}}{{detail.month}}
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            {{detail.useFor}}
          </li>

          <li>
            <label>法定代表人姓名：</label>
            {{detail.goods}}
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            {{detail.goodsMoney}}
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            {{detail.occupation}}
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            {{detail.idNo}}
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            {{detail.phone}}
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            {{detail.sex}}
          </li>

          <div class="tab-dd">
            <el-table
              :data="this.detail.contactList"
              size="mini"
              border
              style="color:blue; font-size:8px"
            >
              <el-table-column prop="contactName" label="实际控制人姓名" align="center"></el-table-column>
              <el-table-column prop="contactPhone" label="实际控制人身份证号码" align="center"></el-table-column>
              <el-table-column prop="contactRelationship" label="实际控制人联系电话" align="center"></el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table
              :data="this.detail.contactList"
              size="mini"
              border
              style="color:blue; font-size:8px"
            >
              <el-table-column prop="contactName" label="业务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="contactPhone" label="业务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="contactRelationship" label="业务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="this.contactList" size="mini" border>
              <el-table-column prop="contactName" label="财务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="contactPhone" label="财务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="contactRelationship" label="财务对接人联系邮箱" align="center"></el-table-column>
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
            <label >账户户名：</label>{{detail.bankMobile}}</li>
          <li>
            <label >银行支行名称：</label>{{detail.cardResult}}</li>
          
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
          <li>
            <label >近三年经营收入金额：</label>{{detail.status}}</li>
          <li>
            <label >近三年的利润金额：</label>{{detail.preApproveMoney}}</li>
          <li>
            <label >近三年的开票金额：</label>{{detail.preApproveRepayMethod}}</li>
          <li>
            <label >近三年的纳税金额：</label>{{detail.preApproveMonthRate}}</li>
          <li>
            <label >当前金融机构借贷余额：</label>{{detail.preApproveTerm}}</li>
          <li>
            <label >当前非金融机构融资余额：</label>{{detail.refuseReason}}</li> 
          <li>
            <label >对外担保情况：</label>{{detail.preApproveRepayMethod}}</li>
          <li>
            <label >担保人：</label>{{detail.preApproveMonthRate}}</li>
          <li>
            <label >担保金额：</label>{{detail.preApproveTerm}}</li>
          <li>
            <label >担保期限：</label>{{detail.refuseReason}}</li> 
         
            
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
            <label >付款主体名称：</label>{{detail.innerCredits}}</li>
        <li>
            <label >开始合作期限：</label>{{detail.innerCredits}}</li>
        <li>
            <label >过去两年交易额：</label>{{detail.innerCredits}}</li>
        <li>
            <label >付款账期：</label>{{detail.innerCredits}}</li>
        <li>
            <label >项目当前应收款总额：</label>{{detail.innerCredits}}</li>
        <li>
            <label >项目员工总数：</label>{{detail.innerCredits}}</li>
        <li>
            <label >平均员工薪资：</label>{{detail.innerCredits}}</li>
        <li>
            <label >单个员工薪资上限：</label>{{detail.innerCredits}}</li>
        <li>
            <label >本次借款指定回款及还款账户：</label>{{detail.innerCredits}}</li>
        <li>
            <label >本次借款质押的应收款金额：</label>{{detail.innerCredits}}</li>
        <li>
            <label >本次借款担保方式：</label>{{detail.innerCredits}}</li>
          
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
      let data={
        processNo:this.$route.query.processNo
      };
      this.$http
        .post(this.$store.state.domain +"/loanManage/custInfo",data)
        .then(
          response => {
            if (response.data.code == 0) {
              this.detail = response.data.detail.result;

            }
          },
          response => {
            //console.log(response);
          }
        );
    }
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

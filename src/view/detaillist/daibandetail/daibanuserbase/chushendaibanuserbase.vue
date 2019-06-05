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
        <ul class="tab-ul">
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

        <ul class="tab-ul">
          <li>
            <label>企业名称：</label>
           <span v-if="willShow" >{{detail.enterpriseName}}</span>
            <el-input v-else size="small" v-model="detail.enterpriseName" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>注册资本：</label>
            <span v-if="willShow" >{{detail.registeredCapital}}</span>
            <el-input v-else size="small" v-model="detail.registeredCapital" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>实缴资本：</label>
            <span v-if="willShow" >{{detail.paidCapital}}</span>
            <el-input v-else size="small" v-model="detail.paidCapital" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>成立开始日：</label>
            <span v-if="willShow" >{{detail.startingDate}}</span>
            <el-input v-else size="small" v-model="detail.startingDate" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>成立有效截止日：</label>
            <span v-if="willShow" >{{detail.endingDate}}</span>
            <el-input v-else size="small" v-model="detail.endingDate" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="willShow" >{{detail.generalTaxpayers}}</span>
            <el-input v-else size="small" v-model="detail.generalTaxpayers" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <li>
            <label>法定代表人姓名：</label>
            <span v-if="willShow" >{{detail.legalName}}</span>
            <el-input v-else size="small" v-model="detail.legalName" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            <span v-if="willShow" >{{detail.legalIdCard}}</span>
            <el-input v-else size="small" v-model="detail.legalIdCard" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            <span v-if="willShow" >{{detail.legalPhone}}</span>
            <el-input v-else size="small" v-model="detail.legalPhone" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            <span v-if="willShow" >{{detail.socialCode}}</span>
            <el-input v-else size="small" v-model="detail.socialCode" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            <span v-if="willShow" >{{detail.registeredAddress}}</span>
            <el-input v-else size="small" v-model="detail.registeredAddress" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            <span v-if="willShow" >{{detail.businessAddress}}</span>
            <el-input v-else size="small" v-model="detail.businessAddress" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <div class="tab-dd">
            <el-table :data="detail.controlList" border highlight-current-row >
            <el-table-column prop="controlName" label="实际控制人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlName}}</span>
                    <el-input v-else size="small" v-model="scope.row.controlName" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="controlIdCard" label="身份证号码" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlIdCard}}</span>
                    <el-input v-else size="small" v-model="scope.row.controlIdCard" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="controlPhone" label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlPhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.controlPhone" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, detail.controlList)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="detail.businessList" border highlight-current-row >
            <el-table-column prop="businessName" label="业务对接人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessName}}</span>
                    <el-input v-else size="small" v-model="scope.row.businessName" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="businessPhone" label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessPhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.businessPhone" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="businessMail" label="联系邮箱" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessMail}}</span>
                    <el-input v-else size="small" v-model="scope.row.businessMail" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, detail.businessList)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="detail.financeList" border highlight-current-row >
            <el-table-column prop="financeName" label="财务对接人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financeName}}</span>
                    <el-input v-else size="small" v-model="scope.row.financeName" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="financePhone" label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financePhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.financePhone" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="financeMail" label="联系邮箱" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financeMail}}</span>
                    <el-input v-else size="small" v-model="scope.row.financeMail" placeholder="请输入内容" ></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, detail.financeList)">删除</el-button>
                </template>
            </el-table-column>
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
        <ul class="tab-ul">
          <li>
            <label >银行卡卡号：</label><span v-if="willShow" >{{detail.cardNo}}</span>
            <el-input v-else size="small" v-model="detail.cardNo" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >银行名称：</label><span v-if="willShow" >{{detail.bankName}}</span>
            <el-input v-else size="small" v-model="detail.bankName" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >账户户名：</label><span v-if="willShow" >{{detail.accountName}}</span>
            <el-input v-else size="small" v-model="detail.accountName" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >银行支行名称：</label><span v-if="willShow" >{{detail.bankBranchName}}</span>
            <el-input v-else size="small" v-model="detail.bankBranchName" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
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
        <ul class="tab-ul">
          <li>
            <label >近三年经营收入金额：</label><span v-if="willShow" >{{detail.threeYearIncome}}</span>
            <el-input v-else size="small" v-model="detail.threeYearIncome" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的利润金额：</label><span v-if="willShow" >{{detail.threeYearProfit}}</span>
            <el-input v-else size="small" v-model="detail.threeYearProfit" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的开票金额：</label><span v-if="willShow" >{{detail.threeYearInvoice}}</span>
            <el-input v-else size="small" v-model="detail.threeYearInvoice" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的纳税金额：</label><span v-if="willShow" >{{detail.threeYearTaxes}}</span>
            <el-input v-else size="small" v-model="detail.threeYearTaxes" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >当前金融机构借贷余额：</label><span v-if="willShow" >{{detail.financialLendingBalance}}</span>
            <el-input v-else size="small" v-model="detail.financialLendingBalance" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >当前非金融机构融资余额：</label><span v-if="willShow" >{{detail.unfinancialLendingBalance}}</span>
            <el-input v-else size="small" v-model="detail.unfinancialLendingBalance" placeholder="请输入内容" @change="inputchange()"></el-input> </li> 
          <li>
            <label >对外担保情况：</label><span v-if="willShow" >{{detail.externalGuarantees}}</span>
            <el-input v-else size="small" v-model="detail.externalGuarantees" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保人：</label><span v-if="willShow" >{{detail.warrantorName}}</span>
            <el-input v-else size="small" v-model="detail.warrantorName" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保金额：</label><span v-if="willShow" >{{detail.amountGuaranteed}}</span>
            <el-input v-else size="small" v-model="detail.amountGuaranteed" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保期限：</label><span v-if="willShow" >{{detail.warrantyPeriod}}</span>
            <el-input v-else size="small" v-model="detail.warrantyPeriod" placeholder="请输入内容" @change="inputchange()"></el-input> </li> 
         
            
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
        <ul class="tab-ul">
             
          <li>
            <label >付款主体名称：</label><span v-if="willShow" >{{detail.paymentSubject}}</span>
            <el-input v-else size="small" v-model="detail.paymentSubject" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >开始合作期限：</label><span v-if="willShow" >{{detail.periodCooperation}}</span>
            <el-input v-else size="small" v-model="detail.periodCooperation" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >过去两年交易额：</label><span v-if="willShow" >{{detail.turnover}}</span>
            <el-input v-else size="small" v-model="detail.turnover" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >付款账期：</label><span v-if="willShow" >{{detail.paymentPeriod}}</span>
            <el-input v-else size="small" v-model="detail.paymentPeriod" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >项目当前应收款总额：</label><span v-if="willShow" >{{detail.totalReceivables}}</span>
            <el-input v-else size="small" v-model="detail.totalReceivables" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >项目员工总数：</label><span v-if="willShow" >{{detail.projectEmployees}}</span>
            <el-input v-else size="small" v-model="detail.projectEmployees" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >平均员工薪资：</label><span v-if="willShow" >{{detail.averageEmployeeSalary}}</span>
            <el-input v-else size="small" v-model="detail.averageEmployeeSalary" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >单个员工薪资上限：</label><span v-if="willShow" >{{detail.capEmployeeSalary}}</span>
            <el-input v-else size="small" v-model="detail.capEmployeeSalary" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款指定回款及还款账户：</label><span v-if="willShow" >{{detail.repaymentAccount}}</span>
            <el-input v-else size="small" v-model="detail.repaymentAccount" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款质押的应收款金额：</label><span v-if="willShow" >{{detail.pledgedReceivables}}</span>
            <el-input v-else size="small" v-model="detail.pledgedReceivables" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款担保方式：</label><span v-if="willShow" >{{detail.borrowingGuarantee}}</span>
            <el-input v-else size="small" v-model="detail.borrowingGuarantee" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
        </ul>
      </table>
    </div>

    <div class="el-table el-table--fit  el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhangqia"></use>
            </svg>初审审核</th>
        </tr>
        <ul class="tab-ul">
             
          <li>
            <label >审批：</label><span v-if="willShow" >{{detail.approvalResult}}</span>
                    <el-select v-else v-model="detail.approvalResult" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> </li>
        <li>
            <label >审批意见：</label><span v-if="willShow" >{{detail.approvalRemark}}</span>
            <el-input 
            type="textarea"
            v-else
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="detail.approvalRemark" placeholder="请输入内容" @change="inputchange()"></el-input>  </li>

        <li style="width:100%">
            <label >审批金额（元）：</label><span v-if="willShow" >{{detail.creditLimit}}</span>
            <el-input v-else size="small" v-model="detail.creditLimit" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >日利率（%）：</label><span v-if="willShow" >{{detail.creditRate}}</span>
            <el-input v-else size="small" v-model="detail.creditRate" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >借款天数（天）：</label><span v-if="willShow" >{{detail.creditTerm}}</span>
            <el-input v-else size="small" v-model="detail.creditTerm" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >申请金额（元）：</label><span v-if="willShow" >{{detail.applyLimit}}</span>
            <el-input v-else size="small" v-model="detail.applyLimit" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >申请期限（天）：</label><span v-if="willShow" >{{detail.applyTerm}}</span>
            <el-input v-else size="small" v-model="detail.applyTerm" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >服务费率（%）：</label><span v-if="willShow" >{{detail.creditFeeRate}}</span>
            <el-input v-else size="small" v-model="detail.creditFeeRate" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
        </ul>
      </table>
      <el-row style="text-align:center;padding:30px;border-top:1px solid #eee;">
        <el-col :span="8"><el-button type="success" @click="fn()">修改</el-button></el-col>
        <el-col :span="8"><el-button type="success"  @click="save()">保存</el-button></el-col>
          <el-col :span="8"><el-button type="primary" @click="submit()">提交</el-button></el-col>
        </el-row>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
        options:[{
          value: '选项1',
          label: '通过'
        }, {
          value: '选项2',
          label: '拒绝'
        }],
        willShow:true,
        tableData: [],
        //基本信息
        detail: {
          processNo:"",//案件编号
        },
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
     submit() {
      this.detail.processNo=this.$route.query.processNo;
      
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/updatefirstTrial",
              data: this.detail,
          })
          .then(
              response => {
              if(response.data.code==0){

                    this.$alert('恭喜您！信息提交成功！', '信息提交结果', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            console.log('信息提交成功')
                                        }
                                        });
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
    },
      fn(){
            this.willShow=false;
      },
      save(){
              this.willShow=true;
          },

    getdetail() {
      this.detail.processNo=this.$route.query.processNo;
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/case/particulars",
              data: this.detail,
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

.tab-ul{
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

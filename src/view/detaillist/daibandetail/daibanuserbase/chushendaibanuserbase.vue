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
           <span >{{detail.enterpriseName}}</span>
          </li>
          <li>
            <label>注册资本：</label>
            <span >{{detail.registeredCapital}}</span>
          </li>
          <li>
            <label>实缴资本：</label>
            <span >{{detail.paidCapital}}</span>
          </li>
          <li>
            <label>成立开始日：</label>
            <span >{{detail.startingDate}}</span>
          </li>
          <li>
            <label>成立有效截止日：</label>
            <span >{{detail.endingDate}}</span>
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="detail.generalTaxpayers=='0'">
              否
              </span>
              <span v-if="detail.generalTaxpayers=='1'">
              是
              </span>
          </li>

          <li>
            <label>法定代表人姓名：</label>
            <span >{{detail.legalName}}</span>
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            <span >{{detail.legalIdCard}}</span>
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            <span >{{detail.legalPhone}}</span>
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            <span >{{detail.socialCode}}</span>
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            <span >{{detail.registeredAddress}}</span>
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            <span>{{detail.businessAddress}}</span>
          </li>

          <div class="tab-dd">
            <el-table
              :data="detail.controlList"
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
              :data="detail.businessList"
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
        <ul class="tab-ul">
          <li>
            <label >银行卡卡号：</label><span v-if="willShow" >{{detail.cardNo}}</span>
            <el-input v-else size="small" v-model="detail.cardNo" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >银行名称：</label><span v-if="willShow" >{{detail.bankName}}</span>
            <el-input v-else size="small" v-model="detail.bankName" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >账户户名：</label><span v-if="willShow" >{{detail.accountName}}</span>
            <el-input v-else size="small" v-model="detail.accountName" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >银行支行名称：</label><span v-if="willShow" >{{detail.bankBranchName}}</span>
            <el-input v-else size="small" v-model="detail.bankBranchName" placeholder="请输入内容" ></el-input> </li>
          
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
           <li style="width:100%">

                <el-table :data="detail.threeYearDevelopmentSituation" border highlight-current-row size="mini">
                  <el-table-column prop="nearlyYears" label="年份" align="center">
                     <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.nearlyYears}}</span>
                          <el-input v-else size="small" v-model="scope.row.nearlyYears" placeholder="请输入年份" ></el-input> 
                      </template>
                  </el-table-column>
                  <el-table-column prop="incomeSum" label="经营收入金额（元）" align="center">   
                    <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.incomeSum}}</span>
                          <el-input v-else size="small" v-model="scope.row.incomeSum" placeholder="请输入经营收入金额（元）" ></el-input> 
                      </template>                       
                  </el-table-column>
                  <el-table-column prop="profitSum" label="利润金额（元）" align="center">
                    <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.profitSum}}</span>
                          <el-input v-else size="small" v-model="scope.row.profitSum" placeholder="请输入利润金额（元）" ></el-input> 
                      </template> 
                  </el-table-column>
                  <el-table-column prop="invoiceSum" label="开票金额（元）" align="center">
                    <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.invoiceSum}}</span>
                          <el-input v-else size="small" v-model="scope.row.invoiceSum" placeholder="请输入开票金额（元）" ></el-input> 
                      </template> 
                  </el-table-column>
                  <el-table-column prop="taxesSum" label="纳税金额（元）" align="center">
                    <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.taxesSum}}</span>
                          <el-input v-else size="small" v-model="scope.row.taxesSum" placeholder="请输入纳税金额（元）" ></el-input> 
                      </template> 
                  </el-table-column>
              </el-table></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

          <li>
            <label >当前金融机构借贷余额：</label><span v-if="willShow" >{{detail.financialLendingBalance}}</span>
            <el-input v-else size="small" v-model="detail.financialLendingBalance" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >当前非金融机构融资余额：</label><span v-if="willShow" >{{detail.unfinancialLendingBalance}}</span>
            <el-input v-else size="small" v-model="detail.unfinancialLendingBalance" placeholder="请输入内容" ></el-input> </li> 
          <li>
            <label >对外担保情况：</label>
              <span  v-if="willShow" >
                <span v-if="detail.externalGuarantees == '0'">否</span>
            <span v-if="detail.externalGuarantees == '1'">是</span></span>
              <template  v-else>
              <el-radio-group v-model="detail.externalGuarantees" size="mini">
                <el-radio border  label="1">是</el-radio>
                <el-radio border  label="0">否</el-radio>
              </el-radio-group>
              </template>
          </li>
          <li>
            <label >担保人：</label><span v-if="willShow" >{{detail.warrantorName}}</span>
            <el-input v-else size="small" v-model="detail.warrantorName" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >担保金额：</label><span v-if="willShow" >{{detail.amountGuaranteed}}</span>
            <el-input v-else size="small" v-model="detail.amountGuaranteed" placeholder="请输入内容" ></el-input> </li>
          <li>
            <label >担保期限：</label><span v-if="willShow" >{{detail.warrantyPeriod}}</span>
            <el-input v-else size="small" v-model="detail.warrantyPeriod" placeholder="请输入内容" ></el-input> </li> 
         
            
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
            <label >应收账款主体（债务人）全称：</label><span v-if="willShow" >{{detail.paymentSubject}}</span>
            <el-input v-else size="small" v-model="detail.paymentSubject" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >开始合作期限：</label><span v-if="willShow" >{{detail.periodCooperation}}</span>
            <el-input v-else size="small" v-model="detail.periodCooperation" placeholder="请输入内容" ></el-input> </li>
             <li style="width:100%">
          <el-table :data="detail.turnover" border highlight-current-row size="mini">
                  <el-table-column prop="turnoverYear" label="年份" align="center">
                     <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.turnoverYear}}</span>
                          <el-input v-else size="small" v-model="scope.row.turnoverYear" placeholder="请输入年份" ></el-input> 
                      </template>
                  </el-table-column>
                  <el-table-column prop="turnoverSum" label="交易额（元）" align="center">   
                    <template slot-scope="scope">
                          <span v-if="willShow">{{scope.row.turnoverSum}}</span>
                          <el-input v-else size="small" v-model="scope.row.turnoverSum" placeholder="请输入交易额（元）" ></el-input> 
                      </template>                       
                  </el-table-column>
              </el-table></li>
              <li></li>
              <li></li>
              <li></li>
        <li>
            <label >付款账期：</label><span v-if="willShow" >{{detail.paymentPeriod}}</span>
            <el-input v-else size="small" v-model="detail.paymentPeriod" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >项目当前应收款总额：</label><span v-if="willShow" >{{detail.totalReceivables}}</span>
            <el-input v-else size="small" v-model="detail.totalReceivables" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >项目员工总数：</label><span v-if="willShow" >{{detail.projectEmployees}}</span>
            <el-input v-else size="small" v-model="detail.projectEmployees" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >平均员工薪资：</label><span v-if="willShow" >{{detail.averageEmployeeSalary}}</span>
            <el-input v-else size="small" v-model="detail.averageEmployeeSalary" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >单个员工薪资上限：</label><span v-if="willShow" >{{detail.capEmployeeSalary}}</span>
            <el-input v-else size="small" v-model="detail.capEmployeeSalary" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >本次借款指定回款及还款账户：</label><span v-if="willShow" >{{detail.repaymentAccount}}</span>
            <el-input v-else size="small" v-model="detail.repaymentAccount" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >本次借款质押的应收款金额：</label><span v-if="willShow" >{{detail.pledgedReceivables}}</span>
            <el-input v-else size="small" v-model="detail.pledgedReceivables" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >本次借款担保方式：</label><span v-if="willShow" >{{detail.borrowingGuarantee}}</span>
            <el-input v-else size="small" v-model="detail.borrowingGuarantee" placeholder="请输入内容" ></el-input> </li>
          
        </ul>
      </table>
      <el-row style="text-align:center;padding:30px;">
        <el-col :span="12"><el-button type="success" @click="fn()">修改</el-button></el-col>
        <el-col :span="12"><el-button type="success"  @click="save()">保存</el-button></el-col>
        </el-row>
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

        <li >
            <label >审批金额（元）：</label>
            <!-- <span v-if="willShow" >{{detail.creditLimit}}</span> -->
            <el-input  size="small" v-model="detail.creditLimit" @blur="docheck()" placeholder="请输入内容" ></el-input>
             </li>
        <li>
            <label >日利率（%）：</label>
            <!-- <span v-if="willShow" >{{detail.creditRate}}</span> -->
            <el-input  size="small" v-model="detail.creditRate" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >借款天数（天）：</label>
            <!-- <span v-if="willShow" >{{detail.creditTerm}}</span> -->
            <el-input  size="small" v-model="detail.creditTerm" @blur="docheck2()" placeholder="请输入内容" ></el-input> </li>
        <li>
            <label >咨询费率（%）：</label>
            <!-- <span v-if="willShow" >{{detail.consultationFeeRate}}</span> -->
            <el-input  size="small" v-model="detail.consultationFeeRate" placeholder="请输入内容" @blur="fee()"></el-input> </li>
        <li style="width:50%">
            <label >咨询费：</label><span>{{detail.consultationFee}}</span></li>
        
        <li style="width:50%;">
            <label >审批意见：</label>
            <el-input 
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="form.remark" placeholder="请输入内容"></el-input> </li>
        <li>
            <label >审批结果：</label>
            <el-select v-model="form.rtfState" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> </li>
        
          
        </ul>
      </table>
      <el-row style="text-align:center;padding:30px;">
          <el-col :span="24"><el-button type="primary" @click="submit()">提交</el-button></el-col>
        </el-row>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
        options:[{
          value: 'Pass',
          label: '通过'
        }, {
          value: 'Reject',
          label: '拒绝'
        }],
        willShow:true,
        tableData: [],
        //基本信息
        detail: {
          processNo:"",//案件编号
          consultationFee:0,
        },
        

        form:{
          rtfState:"",//审批结果
          creditLimit:"",
          creditTerm:"",
          creditRate:"",
          consultationFeeRate:"",
          consultationFee:"",
          consultationFee:""
        }
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
    docheck(){
      if(this.detail.creditLimit<10000 || this.detail.creditLimit>10000000){
        this.$message.error("审批金额填写范围必须大于或等于10000并且小于或等于10000000！");
      }
    },

    docheck2(){
      if(this.detail.creditTerm<7 || this.detail.creditTerm>180){
        this.$message.error("借款天数填写范围必须大于或等于7并且小于或等于180！");
      }
    },
    fee(){
      if(this.detail.creditLimit == "" || this.detail.creditLimit == null){
          this.detail.consultationFee = 0;
      }else if(this.detail.consultationFeeRate == "" || this.detail.consultationFeeRate == null){
          this.detail.consultationFee = 0;
      }else
         this.detail.consultationFee = this.detail.creditLimit*this.detail.consultationFeeRate*0.01;
    },
    handleDelete(index, rows) {
        rows.splice(index, 1);
    },

     submit() {
      this.form.processNo=this.$route.query.processNo;
      this.form.processNum=this.$route.query.processNum;
      this.form.taskId=this.$route.query.taskId;
      this.form.userId = sessionStorage.getItem("userId");//本地存储用户ID
      if(this.detail.creditLimit == "" || this.detail.creditLimit==null){
        this.$message.error("申请金额不能为空。");
      }else{
        this.form.creditLimit = this.detail.creditLimit
      }
      if(this.detail.creditTerm == "" || this.detail.creditTerm==null){
        this.$message.error("申请期限不能为空。");
      }else{
        this.form.creditTerm = this.detail.creditTerm
      }
      if(this.detail.creditRate == "" || this.detail.creditRate==null){
        this.$message.error("日利率不能为空。");
      }else{
        this.form.creditRate = this.detail.creditRate
      }
      if(this.detail.consultationFeeRate == "" || this.detail.consultationFeeRate==null){
        this.$message.error("咨询费率不能为空。");
      }else{
        this.form.consultationFeeRate = this.detail.consultationFeeRate
      }
      if(this.detail.consultationFee == "" || this.detail.consultationFee==null){
        this.$message.error("咨询费不能为空。");
      }else{
        this.form.consultationFee = this.detail.consultationFee
      }
      
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/task/complete",
              data: this.form,
          })
          .then(
              response => {
              if(response.data.code==0){

                    this.$alert('恭喜您！初审信息提交成功！', '提交结果', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            console.log('信息提交成功')
                                        }
                                        });
                    this.$router.push("/mydaiban/mydaiban");//跳转
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
         this.detail.processNo = this.$route.query.processNo;
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/updatefirstTrial",
              data: this.detail,
          })
          .then(
              response => {
              if(response.data.code==0){
                    this.willShow=true;

                    this.$alert('恭喜您！初审信息更新成功！', '更新结果', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            console.log('信息更新成功')
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
    width: 47%;
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


/* 图标样式 */
svg {
  padding: 3px 10px;
}

.el-radio-group{
  label{
    width: 60px !important;
  }
}
</style>

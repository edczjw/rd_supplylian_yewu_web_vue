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
        
        <el-row style="text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
        </el-row>

        <ul class="tab-ul">
          <li>
            <label>企业名称：</label>
           <span v-if="willShow" >{{detail.custName}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>注册资本：</label>
            <span v-if="willShow" >{{detail.age}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>实缴资本：</label>
            <span v-if="willShow" >{{detail.applyLimit}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>成立起止日：</label>
            <span v-if="willShow" >{{detail.applyTerm}}{{detail.month}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="willShow" >{{detail.useFor}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <li>
            <label>法定代表人姓名：</label>
            <span v-if="willShow" >{{detail.goods}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            <span v-if="willShow" >{{detail.goodsMoney}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            <span v-if="willShow" >{{detail.occupation}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            <span v-if="willShow" >{{detail.idNo}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            <span v-if="willShow" >{{detail.phone}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            <span v-if="willShow" >{{detail.sex}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

          <div class="tab-dd">
            <el-table
              :data="tableData"
              size="mini"
              border
              style="color:blue; font-size:8px"
            >
              <el-table-column prop="contactName" label="实际控制人姓名" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactName}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactName" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactPhone" label="实际控制人身份证号码" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactPhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactPhone" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactRelationship" label="实际控制人联系电话" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactRelationship}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactRelationship" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table
              :data="tableData"
              size="mini"
              border
              style="color:blue; font-size:8px"
            >
              <el-table-column prop="contactName" label="业务对接人姓名" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactName}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactName" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactPhone" label="业务对接人联系电话" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactPhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactPhone" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactRelationship" label="业务对接人联系邮箱" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactRelationship}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactRelationship" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="tableData" size="mini" border>
              <el-table-column prop="contactName" label="财务对接人姓名" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactName}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactName" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactPhone" label="财务对接人联系电话" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactPhone}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactPhone" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
              </el-table-column>
              <el-table-column prop="contactRelationship" label="财务对接人联系邮箱" align="center">
                  <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.contactRelationship}}</span>
                    <el-input v-else size="small" v-model="scope.row.contactRelationship" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
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
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >银行名称：</label><span v-if="willShow" >{{detail.bankName}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >账户户名：</label><span v-if="willShow" >{{detail.bankMobile}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >银行支行名称：</label><span v-if="willShow" >{{detail.cardResult}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
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
            <label >近三年经营收入金额：</label><span v-if="willShow" >{{detail.status}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的利润金额：</label><span v-if="willShow" >{{detail.preApproveMoney}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的开票金额：</label><span v-if="willShow" >{{detail.preApproveRepayMethod}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >近三年的纳税金额：</label><span v-if="willShow" >{{detail.preApproveMonthRate}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >当前金融机构借贷余额：</label><span v-if="willShow" >{{detail.preApproveTerm}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >当前非金融机构融资余额：</label><span v-if="willShow" >{{detail.refuseReason}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li> 
          <li>
            <label >对外担保情况：</label><span v-if="willShow" >{{detail.preApproveRepayMethod}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保人：</label><span v-if="willShow" >{{detail.preApproveMonthRate}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保金额：</label><span v-if="willShow" >{{detail.preApproveTerm}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          <li>
            <label >担保期限：</label><span v-if="willShow" >{{detail.refuseReason}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li> 
         
            
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
            <label >付款主体名称：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >开始合作期限：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >过去两年交易额：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >付款账期：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >项目当前应收款总额：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >项目员工总数：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >平均员工薪资：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >单个员工薪资上限：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款指定回款及还款账户：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款质押的应收款金额：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li>
            <label >本次借款担保方式：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
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
            <label >审批：</label><span v-if="willShow" >{{this.qq}}</span>
                    <el-select v-else v-model="qq" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select> </li>
        <li>
            <label >审批意见：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input 
            type="textarea"
            v-else
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input>  </li>

        <li style="width:100%">
            <label >审批金额（元）：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >日利率（%）：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >借款天数（天）：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >咨询费率（%）：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
        <li style="width:100%">
            <label >咨询费（元）：</label><span v-if="willShow" >{{detail.innerCredits}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> </li>
          
        </ul>
      </table>
      <el-row style="text-align:center;padding:30px;border-top:1px solid #eee;">
        <el-col :span="12"><el-button type="success"  @click="fn()">保存</el-button></el-col>
          <el-col :span="12"><el-button type="primary" @click="fn()">提交</el-button></el-col>
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
        tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        //基本信息
        detail: {},
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {
      fn(){
        if(this.willShow==true){
            this.willShow=false;
        }else{
            this.willShow=true
        }
    },

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

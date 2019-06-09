<template>
  <div>
    <div class="line-bin">
          企业管理<i class="el-icon-arrow-right"></i>
          <router-link to="/qiyejianguan/countcheck">开户审核</router-link>
          <i class="el-icon-arrow-right"></i>企业详情
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
            <el-input v-else size="small" v-model="detail.enterpriseName" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>注册资本：</label>
            <span v-if="willShow" >{{detail.registeredCapital}}</span>
            <el-input v-else size="small" v-model="detail.registeredCapital" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>实缴资本：</label>
            <span v-if="willShow" >{{detail.paidCapital}}</span>
            <el-input v-else size="small" v-model="detail.paidCapital" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>成立开始日：</label>
            <span v-if="willShow" >{{detail.startingDate}}</span>
            <el-input v-else size="small" v-model="detail.startingDate" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>成立有效截止日：</label>
            <span v-if="willShow" >{{detail.endingDate}}</span>
            <el-input v-else size="small" v-model="detail.endingDate" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="willShow" >{{detail.generalTaxpayers}}</span>
            <el-input v-else size="small" v-model="detail.generalTaxpayers" placeholder="请输入内容"></el-input> 
          </li>

          <li>
            <label>法定代表人姓名：</label>
            <span v-if="willShow" >{{detail.legalName}}</span>
            <el-input v-else size="small" v-model="detail.legalName" placeholder="请输入内容"></el-input> 
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            <span v-if="willShow" >{{detail.legalIdCard}}</span>
            <el-input v-else size="small" v-model="detail.legalIdCard" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            <span v-if="willShow" >{{detail.legalPhone}}</span>
            <el-input v-else size="small" v-model="detail.legalPhone" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            <span v-if="willShow" >{{detail.socialCode}}</span>
            <el-input v-else size="small" v-model="detail.socialCode" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            <span v-if="willShow" >{{detail.registeredAddress}}</span>
            <el-input v-else size="small" v-model="detail.registeredAddress" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            <span v-if="willShow" >{{detail.businessAddress}}</span>
            <el-input v-else size="small" v-model="detail.businessAddress" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

            <!-- <el-row style="padding:30px;text-align:right;width:100%;">
            <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
            </el-row> -->

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
          
          <!-- <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row> -->

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

          <!-- <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row> -->

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

          <!-- <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row> -->

        </ul>
      </table>
    </div>

    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhangqia"></use>
            </svg>开户审批
          </th>
        </tr>

        <div class="tab-dd">
          <table class="jititable" border>
            <tr>
              <th>审批</th>
              <th>审批意见</th>
            </tr>

            <tr>
              <td>
                  <span v-if="willShow" >{{detail.approvalResult}}</span>
                    <el-select v-else v-model="detail.approvalResult" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </td>
              <td>
                  <span v-if="willShow" >{{detail.approvalRemark}}</span>
            <el-input 
            v-else
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="detail.approvalRemark" placeholder="请输入内容" @change="inputchange()"></el-input> 
                  </td>
            </tr>
          </table>
        </div>
        <el-row style="padding:30px;text-align:right;">
          <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="save()">保存</el-button>
        </el-row>
      </table>

      
    <el-row style="text-align:center;padding:30px;border-top:1px solid #eee;">
          <el-col :span="24"><el-button type="primary" @click="submit()">提交</el-button></el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        willShow:true,
        options:[{
          value: '1',
          label: '通过'
        }, {
          value: '0',
          label: '拒绝'
        }],

      detail:{
        enterpriseNo:"",//企业编号
      }
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {

    submit() {
      this.detail.enterpriseNo=this.$route.query.enterpriseNo;
      this.detail.lstUpdUser = sessionStorage.getItem("name");
      if(this.detail.generalTaxpayers == '是'){
        this.detail.generalTaxpayers = '1'
      } else{
        this.detail.generalTaxpayers = '0'
      }
      
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/editEnterprise",
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
    inputchange(){
        // console.log(detail)
    },

    handleDelete(index, rows) {
      // console.log(index)
      if(index==0){
        alert('至少留有一条数据！')
      }else{
        rows.splice(index, 1);
      }
    },


    //查看认证
    getLink(url) {
      window.open(url);
    },

    getdetail() {
      this.detail.enterpriseNo=this.$route.query.enterpriseNo;
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/getEnterpriseDetail",
              data: this.detail,
          })
          .then(
              response => {
              if(response.data.code==0){
                    this.detail = response.data.detail;
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
.tab-ul {
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
.el-row{
    width:100%;
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
/* 计提表格 */
.jititable {
  border-collapse: collapse;
  width: 100%;
}

.jititable th {
  height: 50px;
  text-align: center;
  color: #b48e3d;
  border: 1px solid rgb(218, 219, 221);
}

.jititable td {
  height: 120px;
  border: 1px solid rgb(218, 219, 221);
  text-align: center;
}

</style>

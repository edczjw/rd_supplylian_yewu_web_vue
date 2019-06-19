<template>
  <div class="topBanner">
    <div class="line-bin">
          入账审核<i class="el-icon-arrow-right"></i>
          <router-link to="/ruzhangshenhe/shougongruzhang">手工入账</router-link>
          <i class="el-icon-arrow-right"></i>入账详情
      </div>
    <div class="content">
      <div class="searcharea">
        <!-- el-form接收一个model，必须配合el-form-item一起使用，并且在el-form-item上绑定prop属性 -->
        <el-form ref="searchform" :model="searchform" label-width="180px" size="mini">
          <el-row :gutter="30">
            <el-col :span="6">
              <el-form-item label="审核操作" prop="result">
                <el-select v-model="searchform.result" placeholder="请选择企业状态" clearable>
                    <!-- 从后台要的数据 -->
                    <el-option v-for="item in options"
                              :label="item.label"
                              :key="item.value"
                              :value="item.value"></el-option>
                  </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="客户实还金额" prop="repayAmt">
                <el-input v-model="searchform.repayAmt" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="客户实还款时间" prop="name">
                <el-date-picker
                @change="find()"
                    class="shi"
                    clearable
                    v-model="searchform.repayTime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="结束日期"
                  ></el-date-picker>
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
          <td>{{detail.totalMoney}}</td>
          <td>应还款本金</td>
          <td>{{detail.surplusPrincipal}}</td>
        </tr>

        <tr>
          <td>应还款利息</td>
          <td>{{detail.surplusInterest}}</td>
          <td>应还款日期</td>
          <td>{{detail.loanExpireDate}}</td>
        </tr>

        <tr>
          <td>逾期天数</td>
          <td>{{detail.overdueDates}}</td>
          <td>罚息</td>
          <td>{{detail.surplusPenalty}}</td>
        </tr>

        <tr>
        <td>查看还款凭证</td>
        <td colspan="3">        
          <viewer :images="detail.imagesUrl"> 
                <img
                      v-for="(src,index) in detail.imagesUrl"
                      :src="src"
                      :key="index">
          </viewer>
        </td>
      </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options:[{
          value: 'pass',
          label: '通过'
        }, {
          value: 'refuse',
          label: '拒绝'
        }],
      detail:{

      },
      searchform: {
        processNo:"",//案件编号
        result:"",//审核操作
        repayTime:"",//还款时间
        repayAmt:"",//还款金额

      }
    };
  },
  mounted() {
    this.find()
  },
  methods: {
    find(){
      this.searchform.processNo = this.$route.query.processNo;
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
    },
    search(){
      this.searchform.processNo = this.$route.query.processNo;

            if(this.searchform.result == 'pass'){
              if(this.searchform.repayAmt == "" || this.searchform.repayTime == ""){
                this.$message.error("还款金额和还款到账时间不能为空！")
              }
              
                if(this.detail.totalMoney!=this.searchform.repayAmt){
                    this.$message.error('客户实还金额必须与应还款总额相等！');
                }
                else{
                      this.$axios({
                                  method: 'post',
                                  url: this.$store.state.domain +"/manage/cashier/cashieRepayApproval",
                                  data: this.searchform,
                              })
                              .then(
                                  response => {
                                  if(response.data.code==0){
                                        this.$message({
                                            message: '恭喜你，提交成功！',
                                            type: 'success'
                                          });
                                          this.$router.push("/ruzhangshenhe/shougongruzhang")
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
          }
    
          else if(this.searchform.result == 'refuse'){
            if(this.detail.totalMoney!=this.searchform.repayAmt){
                    this.$message.error('客户实还金额必须与应还款总额相等！');
                }
                else{
                        this.$axios({
                                    method: 'post',
                                    url: this.$store.state.domain +"/manage/cashier/cashieRepayApproval",
                                    data: this.searchform,
                                })
                                .then(
                                    response => {
                                    if(response.data.code==0){
                                          this.$message({
                                              message: '恭喜你，提交成功！',
                                              type: 'success'
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
                          }
                 }
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
}

.jititable th {
  height: 50px;
}

.jititable td {
  height: 50px;
  width: 110px;
}
</style>

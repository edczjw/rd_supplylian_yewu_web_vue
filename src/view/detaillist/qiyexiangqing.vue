<template>
    
  <div>
    <div class="line-bin">
          企业管理<i class="el-icon-arrow-right"></i>
          <router-link to="/qiyejianguan/jianguanlist">企业列表</router-link>
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
            {{detail.generalTaxpayers}}
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
              style="color:blue; font-size:8px"
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
              style="color:blue; font-size:8px"
            >
              <el-table-column prop="businessName" label="业务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </div>

          <div class="tab-dd">
            <el-table :data="this.detail.financeList" size="mini" border>
              <el-table-column prop="financeName" label="财务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </div>
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
              <td>{{detail.approvalResult}}</td>
              <td>{{detail.approvalRemark}}</td>
            </tr>
          </table>
        </div>
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

      searchform:{
        enterpriseNo:"",  //企业编号
      }
    };
  },
  mounted() {
    this.getdetail();
  },
  methods: {

    getdetail() {
      this.searchform.enterpriseNo=this.$route.query.enterpriseNo;
      this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/getEnterpriseDetail",
              data: this.searchform,
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
/* 计提表格 */
.jititable {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 30px;
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

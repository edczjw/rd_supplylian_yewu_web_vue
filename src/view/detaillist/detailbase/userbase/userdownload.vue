<template>
  <div>

    <div class="el-table">
      <table width="100%">
        <tr colspan="6">
          <th colspan="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jibenxinxi"></use>
            </svg>文件信息
          </th>
        </tr>

        <ul>
          <li>
            <label>前十大合作客户名单及年交易额：</label>
            {{detail.custName}}
          </li>
          <li>
            <label>人力服务合同：</label>
            {{detail.age}}
          </li>
          <li>
            <label>5份以上劳动合同：</label>
            {{detail.applyLimit}}
          </li>
          <li>
            <label>近一年的核心企业回款记录：</label>
            {{detail.applyTerm}}{{detail.month}}
          </li>
          <li>
            <label>本次融资对应的发薪名单、金额：</label>
            {{detail.useFor}}
          </li>

          <li>
            <label>应收款对账凭证：</label>
            {{detail.goods}}
          </li>

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
    height: 40px;

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

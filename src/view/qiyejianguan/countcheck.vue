<template>
  <!-- true显示，false不显示 -->
  <div v-if="userName==this.$store.state.nameler?false:true">
    <div class="topBanner">
      <div class="content">
        <div class="searcharea">
          <!-- el-form接收一个model，必须配合el-form-item一起使用，并且在el-form-item上绑定prop属性 -->
          <el-form ref="searchform" :model="searchform" label-width="80px" size="mini">
            <el-row :gutter="30">
              <el-col :span="6">
                <el-form-item label="企业名称" prop="processNo">
                  <el-input v-model="searchform.processNo" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="法人姓名" prop="name">
                  <el-input v-model="searchform.name" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="申请时间" prop="beginDate">
                  <el-date-picker
                    class="shi"
                    clearable
                    v-model="searchform.beginDate"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="开始日期"
                    default-time="00:00:00"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="30">
              <el-col :span="6">
                <el-form-item label="至" prop="endDate">
                  <el-date-picker
                    class="shi"
                    clearable
                    v-model="searchform.endDate"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="结束日期"
                    default-time="23:59:59"
                  ></el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <div class="di">
                  <div class="wrapper">
                    <el-button type="primary" plain @click="search()" size="mini">搜索</el-button>
                    <el-button type="primary" plain @click="resetForm('searchform')" size="mini">重置</el-button>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>

        <!-- =============================== 展示表格数据框 =================================== -->

        <el-table
          :data="tableData"
          border
          size="medium"
          stripe
          v-loading="listLoading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          style="width: 100%; height:100%;"
        >
          <el-table-column prop="processNo" label="企业编号" align="center"></el-table-column>
          <el-table-column prop="name" label="企业名称" align="center">
          </el-table-column>
          <el-table-column prop="productCode" label="法人姓名" align="center"></el-table-column>
          <el-table-column prop="preApproveMoney" label="法人手机号" align="center"></el-table-column>
          <el-table-column prop="preApproveTerm" label="申请时间" align="center"></el-table-column>
          <el-table-column prop="preApproveMonthRate" label="操作" align="center">
            <!-- 点击查看详情 -->
              <template slot-scope="scope">
                <el-button type="text" size="small"
                 @click="gouserdetail(scope.row.processNo,scope.row.channelCode)">
                  {{scope.row.preApproveMonthRate}}</el-button>
              </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            background
            style="text-align:center"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="this.searchform.pageIndex"
            :page-sizes="[20,50,100]"
            :page-size="this.searchform.pageSize"
            layout="total, sizes, prev, pager, next"
            :total="count"
          >
            <!--这是显示总共有多少数据-->
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      count: 0, //总信息数
      listLoading: false, //加载样式
      pageIndex: 1, //初始页
      pageSize: 50, //显示当前行的条数

      //表格数据
      tableData: [{
        preApproveMonthRate:'审核'
      }],

      searchform: {
        // processNo:"",//案件号
        // name:"",//客户姓名
        // cellphone:"",//手机号
        // idNo:"",//身份证号
        channelCd: "", //进件渠道
        productCd: "", //渠道产品
        approveStatusType: "", //审批结果
        beginDate: "", //开始时间
        endDate: "", //至
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      }
    };
  },
  // mounted只执行一次,在模板渲染成html后调用
  mounted() {
  },

  //在模板渲染成html前调用
  created() {
    // this.getlist(); //获取用户列表
  },
  methods: {

    //获取用户名，vue 本地存储数据 sessionStorage
    getName() {
      let userName = sessionStorage.getItem("name");
      this.userName = userName;
    },

    // 退出，跳转至登陆页面
    goBack() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          window.sessionStorage.removeItem("name"); //清除session中name
          this.$router.push("/login");
        })
        .catch(() => {});
    },

    // 搜索功能
    search() {
      this.getlist();
    },

    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.productlist = "";
      // this.getlist();
    },

    // 初始每页数据数pagesize
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      this.getlist();
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.getlist();
    },

    // 点击用户名跳转至详情页
    gouserdetail(processNo, channelCode) {
     this.$router.push("/users/checkdetailist?processNo=" + processNo);
    },

    // ajax异步数据交互：Vue 实例提供了 this.$http 服务可用于发送 HTTP 请求
    getlist() {
      this.listLoading = true;
      this.$http
        .post(
          this.$store.state.domain + "/loanManage/caseList",
          this.searchform
        )
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(
          // Lambda写法
          response => {
            if (response.data.code == 0) {
              //请求成功回调函数
              this.tableData = response.data.detail.result.pageList;
              this.pageSize = response.data.detail.result.pageSize;
              this.pageIndex = response.data.detail.result.pageIndex;
              this.count = response.data.detail.result.count;
              this.listLoading = false;

              if (this.tableData == null) {
                this.$notify({
                  message: "搜索失败，无此数据，请重新搜索。",
                  type: "warning",
                  duration: "2000" //持续时间
                });
              }
            } else {
              //请求失败回调函数
              // this.listLoading=false;
              // this.$message({
              //     message: response.message,
              //     type: "error"
              //   });
            }
          },
          response => {
            //请求失败回调函数
            this.listLoading = false;
            this.$message({
              dangerouslyUseHTMLString: true, //表示提示的是html片段
              message:
                '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                response.body.message,
              type: "error"
            });
            console.log(response);
          }
        );
    }
  },

  //过滤器，用于格式化时间格式
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

 <style lang='less'>
</style>

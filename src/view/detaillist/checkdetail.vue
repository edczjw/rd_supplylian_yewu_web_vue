<template>
  <div>
    <div class="line-bin">
          企业管理<i class="el-icon-arrow-right"></i>
          <router-link to="/users/checkdetailist">开户审核</router-link>
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
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>注册资本：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>实缴资本：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>成立起止日：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>是否为一般纳税人：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>

          <li>
            <label>法定代表人姓名：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>

          <li>
            <label>法定代表人身份证号码：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li>
            <label>法定代表人联系电话：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>统一社会征信号码或营业执照号码：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>注册地址：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容"></el-input> 
          </li>
          <li style="width: 100%;">
            <label>实际经营地址：</label>
            <span v-if="willShow" >{{this.qq}}</span>
            <el-input v-else size="small" v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
          </li>

            <el-row style="padding:30px;text-align:right;width:100%;">
            <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
            </el-row>

          <div class="tab-dd">
             <el-table :data="tableData" border highlight-current-row @row-click="handleCurrentChange">
            <el-table-column label="实际控制人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.date}}</span>
                    <el-input v-else size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="身份证号码" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.name}}</span>
                    <el-input v-else size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="address" label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.address}}</span>
                    <el-input v-else size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-el-button>
                </template>
            </el-table-column>
        </el-table>
          </div>
          
          <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row>

          <div class="tab-dd">
             <el-table :data="tableData" border highlight-current-row @row-click="handleCurrentChange">
            <el-table-column label="业务对接人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.date}}</span>
                    <el-input v-else size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.name}}</span>
                    <el-input v-else size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="address" label="联系邮箱" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.address}}</span>
                    <el-input v-else size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-el-button>
                </template>
            </el-table-column>
        </el-table>
          </div>

          <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row>

          <div class="tab-dd">
             <el-table :data="tableData" border highlight-current-row @row-click="handleCurrentChange">
            <el-table-column label="财务对接人姓名" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.date}}</span>
                    <el-input v-else size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="联系电话" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.name}}</span>
                    <el-input v-else size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column prop="address" label="联系邮箱" align="center">
                <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.address}}</span>
                    <el-input v-else size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <!-- <el-el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-el-button> -->
                    <el-el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-el-button>
                </template>
            </el-table-column>
        </el-table>
          </div>

          <el-row style="padding:30px;text-align:right;width:100%;">
        <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
          </el-row>

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
                  <span v-if="willShow" >{{this.qq}}</span>
                    <el-select v-else v-model="qq" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </td>
              <td>
                  <span v-if="willShow" >{{this.qq}}</span>
            <el-input 
            v-else
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="qq" placeholder="请输入内容" @change="inputchange()"></el-input> 
                  </td>
            </tr>
          </table>
        </div>
        <el-row style="padding:30px;text-align:right;">
          <el-button plain type="success" round size="mini" @click="fn()">修改</el-button>
            <el-button plain type="success" round size="mini" @click="fn()">保存</el-button>
        </el-row>
      </table>

      
    <el-row style="text-align:center;padding:30px;border-top:1px solid #eee;">
          <el-col :span="24"><el-button type="primary" @click="fn()">提交</el-button></el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        willShow:true,
        qq:'asdeseasd',
        options:[{
          value: '选项1',
          label: '通过'
        }, {
          value: '选项2',
          label: '拒绝'
        }],

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
      detail: {}
    };
  },
  mounted() {
    // this.getdetail();
  },
  methods: {
    fn(){
        if(this.willShow==true){
            this.willShow=false;
        }else{
            this.willShow=true
        }
    },
    inputchange(){
        console.log(this.qq)
    },
    handleCurrentChange(row, event, column) {
        console.log(row, event, column, event.currentTarget)
    },
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleDelete(index, row) {
        console.log(index, row);
    },


    //查看认证
    getLink(url) {
      window.open(url);
    },

    getdetail() {
      let data = {
        processNo: this.$route.query.processNo
      };
      this.$http
        .post(this.$store.state.domain + "/loanManage/custInfo", data)
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

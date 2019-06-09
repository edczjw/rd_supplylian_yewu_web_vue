<template>
  <div class="content">
    <el-row>
        <div class="changepw">
          <el-form ref="setform" :model="this.setform" status-icon :rules="rules" label-width="155px" class="demo-ruleForm">
                        <el-row>
                        <el-col :span="12">
                            <el-form-item label="账号：">
                                {{setform.uid}}
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="12">
                            <el-form-item label="输入旧密码：" prop="oldPassword" :rules="rules.password">
                                <el-input placeholder="请输入旧密码" v-model.trim="setform.oldPassword"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="12">
                            <el-form-item label="输入新密码：" prop="password"  :rules="rules.newPassword">
                                <el-input placeholder="请输入新密码" v-model.trim="setform.password"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="12">
                            <el-form-item label="再次输入新密码："  prop="checkPwd" :rules="rules.renewPassword">
                                <el-input placeholder="请再次输入新密码" v-model.trim="setform.checkPwd"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row style="text-align:center">
                        <el-col :span="12">
                            <el-button type="primary" plain @click="submit('setform')">确认修改</el-button>
                        </el-col>
                        </el-row>
                    </el-form>
        </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    // 确认密码校验
        var validatePass1 = (rule, value, callback) => {
            if (value != this.setform.password) {
            callback(new Error('与新密码不一致!'));
            } else {
            callback();
            }
        };
        // 确认密码校验
        var validatePass2 = (rule, value, callback) => {
            if (value == this.setform.oldPassword) {
            callback(new Error('新密码和旧密码不能相同!'));
            } else {
            callback();
            }
        };

    return {
       //输入框验证
          rules: {
              password:[
                { required: true, message: '旧密码不能为空。', trigger: 'blur' },
                // { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
              ],
              newPassword: [
                  { required: true, message: '不能为空。', trigger: 'blur' },
                  { validator: validatePass2, trigger: 'blur' }
                ],
              renewPassword:[
                  { required: true, message: '不能为空。', trigger: 'blur' },
                  { validator: validatePass1, trigger: 'blur' }
              ]
          },
      //修改密码
      setform: {
        uid: 0, //账号
        oldPassword: '', //旧密码
        password: '', //新密码
        checkPwd: '' //确认密码
      }
    };
  },
  // mounted只执行一次,在模板渲染成html后调用
  mounted() {
      this.getuid()
  },

  methods: {
    getuid(){
      this.setform.uid = parseInt(sessionStorage.getItem("userId"));//本地存储用户名
    },
    //修改密码
    submit(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
        this.$axios({
              method: 'post',
              url: this.$store.state.domain +"/manage/user/updatePassword",
              params : this.setform,
              headers:{
      　　　　'Content-Type':'application/x-www-form-urlencoded'   //hearder 很重要，Content-Type 要写对
      　　　　}
          })
          .then(
              response => {
              if(response.data.code==0){
                    _this.$alert(response.data.msg, "密码修改", {
                        confirmButtonText: "确定并返回主页",
                        type: "success",
                        callback: action => {
                        //确定后直接跳转到home
                        this.$router.push("/mshome");
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
            )} else {
                console.log('error submit!!');
                return false;
            }
            });
      
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

 <style lang='less'>
.content{
    
  background-color: #fff;
}

.changepw {
  padding: 50px 200px 50px 500px;

  background-color: rgba(238, 238, 238, 0.973);
}





</style>

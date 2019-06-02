<template>
  <div class="wrapper">
    <div class="main-content  login-container">
          <!-- 流星 -->
      <div class="star"></div>
      <div class="star pink"></div>
      <div class="star blue"></div>
      
      <div class="login-inner">
        <div class="login-box">
          <div class="form-container" :class="{ 'is-error' : is_error }">
            <h1 class="login-title">民盛小贷供应链业务平台</h1>
            
            <el-form ref="form" :model="form">
              <div class="login-content">
                <el-input class="ell" placeholder="请输入帐号" v-model.trim="form.mobile">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
              </div>
              <div class="login-content">
                <el-input class="ell" type="password" show-password placeholder="请输入密码" v-model.trim="form.password">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
              </div>
              <div class="button-content">
                <el-button type="primary" @click="login()" >登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Router from "vue-router";
export default {
  data() {
    return {
          form: {
              mobile: "",
              password: ""
          },
          tips: "提示信息",
          tips_show: false,
          is_error: false
    };
  },
  mounted() {
  //安全退出后，阻止浏览器返回原有页面
    history.pushState(null, null, document.URL); 
      window.addEventListener('popstate', function() { 
      history.pushState(null, null, document.URL); 
    });

  },
  methods: {
    //登陆
    login() {
      let _this = this;
      let data = {
        mobile: _this.form.mobile,
        password: _this.form.password
      };
      // 校验账号密码
      this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/manage/user/login",
                    data: this.form,
                  })
          .then(
          //成功
          response => {
            if (response.data.code == 0) { 
              var username = response.data.detail.name;  
              var auditorid=response.data.detail.auditor_id;
              
              sessionStorage.setItem("name", username);//本地存储用户名

              sessionStorage.setItem("userId", auditorid);//本地存储用户ID
              _this.$router.push("/home");//跳转
            } 
            //失败
            else {
              _this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          },
          //打印
          response => {
            console.log(response);
          }
        );
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang='less' scoped>

.wrapper {
  height: 100%;
}

.login-container {
  height: 100%;

  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546952368746&di=412dbb3775756904ec05b2e0cb8e8d4c&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F233870%2Ff%2F4486134.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .login-title {
    font-size: 20px;

    margin-bottom: 24px;

    text-align: center;

    color: #617283;
  }

  .login-inner {
    position: relative;

    width: 322px;
    margin: 0 auto;
    padding-top: 100px;
  }

  .form-container {
    width: 250px;
    margin: 0 auto;
  }

  .tips {
    margin-bottom: 16px;

    text-align: left;

    .el-alert--error {
      color: #be504c;
      border: 1px solid #eed1d5;
      background: #efd3d7;
    }
  }

  .login-box {
    position: relative;

    padding: 36px 0;

    border-radius: 4px;
    background: rgba(255, 255, 255, .698039215686274);
  }

  .login-content {
    margin-bottom: 8px;
  }

  .ell {
    width: 250px!important;
  }

  .el-input-group__append {
    cursor: pointer;
  }

  .button-content {
    position: relative;

    margin-top: 24px;

    button {
      width: 100%;
    }
  }

  .is-error {
    .icon-password {
      color: #ff5722;
    }

    .icon-user {
      color: #ff5722;
    }
  }
}

.logo {
  position: absolute;
  right: 24px;
  bottom: 24px;

  width: 43px;
  height: 64px;

  img {
    width: 100%;
  }
}

//流星雨
.star {
  position: relative;
  z-index: 2;
  top: 100px;
  left: 500px;

  display: block;

  width: 5px;
  height: 5px;

  transform-origin: 100% 0;
  -webkit-animation: star-ani 5s linear infinite;
          animation: star-ani 4s linear infinite;

  opacity: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
}

.star:after {
  top: 0;
  left: 4px;

  display: block;

  content: '';
  transform: rotate(-45deg) translate3d(1px, 3px, 0);
  transform-origin: 0 100%;

  border: 0 solid #fff;
  border-width: 0 90px 2px 90px;
  border-color: transparent transparent transparent rgba(255, 255, 255, .3);
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
}

.pink {
  top: 100px;
  left: 800px;

  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
          animation-delay: 3s;

  background: #fff;
}

.pink:after {
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
          animation-delay: 3s;

  border-color: transparent transparent transparent #fff;
}

.blue {
  top: 120px;
  left: 1200px;

  -webkit-animation-delay: 7s;
     -moz-animation-delay: 7s;
          animation-delay: 7s;

  background: fff;
}

.blue:after {
  -webkit-animation-delay: 7s;
     -moz-animation-delay: 7s;
          animation-delay: 7s;

  border-color: transparent transparent transparent fff;
}

@keyframes star-ani {
  0% {
    transform: scale(0) translate3d(0, 0, 0);

    opacity: 0;
  }

  20% {
    transform: scale(.2) translate3d(-100px, 100px, 0);

    opacity: .8;
  }

  40% {
    transform: scale(.4) translate3d(-200px, 200px, 0);

    opacity: .8;
  }

  60% {
    transform: scale(.6) translate3d(-300px, 300px, 0);

    opacity: .8;
  }

  80% {
    transform: scale(1) translate3d(-350px, 350px, 0);

    opacity: 1;
  }

  100% {
    transform: scale(1.2) translate3d(-400px, 380px, 0);

    opacity: 1;
  }
}

</style>

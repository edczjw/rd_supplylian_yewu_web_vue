import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      // 登陆
      path: '/login',
      name: '登陆',
      component: require('../view/login/login.vue').default,
      },{
      // 主页
      path: '/home',
      name: '主页',
      component: require('../view/index/index.vue').default,
      meta: {
        auth: true
      }, // 含有文件夹的文件children
      children:[{
        // 主题home
          path: '/mshome',
          name: '主题主页',
          component: require('../view/index/home.vue').default,
          meta: {
            auth: true
          }
        },{
          // 监管列表
            path: '/qiyejianguan/jianguanlist',
            name: '监管列表',
            component: require('../view/qiyejianguan/qiyelist.vue').default,
            meta: {
              auth: true
            }
          },{
            // 开户审核
              path: '/qiyejianguan/countcheck',
              name: '开户审核',
              component: require('../view/qiyejianguan/countcheck.vue').default,
              meta: {
                auth: true
              }
            },{
              // 案件管理
                path: '/anjianxinxi/anjianguanli',
                name: '案件管理',
                component: require('../view/anjianxinxi/anjianguanli.vue').default,
                meta: {
                  auth: true
                }
              },{
                // 我的待办
                  path: '/mydaiban/mydaiban',
                  name: '我的待办',
                  component: require('../view/mydaiban/mydaiban.vue').default,
                  meta: {
                    auth: true
                  }
                },{
                  // 入账审核
                    path: '/ruzhangshenhe/shougongruzhang',
                    name: '手工入账',
                    component: require('../view/ruzhangshenhe/shougongruzhang.vue').default,
                    meta: {
                      auth: true
                    }
                  },{
                    // 财务数据
                      path: '/caiwushuju/fangkuanjilu',
                      name: '放款记录',
                      component: require('../view/caiwushuju/fangkuanjilu.vue').default,
                      meta: {
                        auth: true
                      }
                    },{
                      // 还款记录
                        path: '/caiwushuju/huankuanjilu',
                        name: '还款记录',
                        component: require('../view/caiwushuju/huankuanjilu.vue').default,
                        meta: {
                          auth: true
                        }
                      },{
                        // 逾期管理
                          path: '/yuqiguanli/yuqianjian',
                          name: '逾期案件',
                          component: require('../view/yuqiguanli/yuqianjian.vue').default,
                          meta: {
                            auth: true
                          }
                        },{
                          // 企业详情列表
                            path: '/users/detailist',
                            name: '企业详情',
                            component: require('../view/detaillist/qiyexiangqing.vue').default,
                            meta: {
                              auth: true
                            }
                          },{
                            // 企业详情列表
                              path: '/users/checkdetailist',
                              name: '企业详情列表',
                              component: require('../view/detaillist/checkdetail.vue').default,
                              meta: {
                                auth: true
                              }
                            },{
                              // 企业详情以及下载
                                path: '/users/detail',
                                name: '详情',
                                component: require('../view/detaillist/detailbase/detail.vue').default,
                                meta: {
                                  auth: true
                                }
                              },{
                                // 我的待办详情以及下载
                                  path: '/mydaiban/detail',
                                  name: '待办详情',
                                  component: require('../view/detaillist/daibandetail/daibandetail.vue').default,
                                  meta: {
                                    auth: true
                                  }
                                },{
                                  // 手动入账详情
                                    path: '/shougongruzhang/detail',
                                    name: '手工入账详情',
                                    component: require('../view/detaillist/ruzhangdetail/ruzhangdetail.vue').default,
                                    meta: {
                                      auth: true
                                    }
                                  },{
                                    // 还款详情
                                      path: '/huankuanjilu/detail',
                                      name: '还款详情',
                                      component: require('../view/detaillist/huankuandetail/huankuandetail.vue').default,
                                      meta: {
                                        auth: true
                                      }
                                    }]
      }
  ]
})

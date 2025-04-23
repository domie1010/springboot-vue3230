import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import canyin from '@/views/modules/canyin/list'
    import canyinCollection from '@/views/modules/canyinCollection/list'
    import canyinCommentback from '@/views/modules/canyinCommentback/list'
    import canyinLiuyan from '@/views/modules/canyinLiuyan/list'
    import canyinOrder from '@/views/modules/canyinOrder/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jingdian from '@/views/modules/jingdian/list'
    import lvyouluxian from '@/views/modules/lvyouluxian/list'
    import minsu from '@/views/modules/minsu/list'
    import minsuCollection from '@/views/modules/minsuCollection/list'
    import minsuCommentback from '@/views/modules/minsuCommentback/list'
    import minsuLiuyan from '@/views/modules/minsuLiuyan/list'
    import minsuOrder from '@/views/modules/minsuOrder/list'
    import singleSeach from '@/views/modules/singleSeach/list'
    import techan from '@/views/modules/techan/list'
    import techanCollection from '@/views/modules/techanCollection/list'
    import techanCommentback from '@/views/modules/techanCommentback/list'
    import techanLiuyan from '@/views/modules/techanLiuyan/list'
    import techanOrder from '@/views/modules/techanOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryCanyin from '@/views/modules/dictionaryCanyin/list'
    import dictionaryCanyinCollection from '@/views/modules/dictionaryCanyinCollection/list'
    import dictionaryCanyinOrder from '@/views/modules/dictionaryCanyinOrder/list'
    import dictionaryCanyinOrderPayment from '@/views/modules/dictionaryCanyinOrderPayment/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJingdian from '@/views/modules/dictionaryJingdian/list'
    import dictionaryJingdianXingji from '@/views/modules/dictionaryJingdianXingji/list'
    import dictionaryLvyouluxian from '@/views/modules/dictionaryLvyouluxian/list'
    import dictionaryMinsu from '@/views/modules/dictionaryMinsu/list'
    import dictionaryMinsuCollection from '@/views/modules/dictionaryMinsuCollection/list'
    import dictionaryMinsuOrder from '@/views/modules/dictionaryMinsuOrder/list'
    import dictionaryMinsuOrderPayment from '@/views/modules/dictionaryMinsuOrderPayment/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionarySingleSeach from '@/views/modules/dictionarySingleSeach/list'
    import dictionaryTechan from '@/views/modules/dictionaryTechan/list'
    import dictionaryTechanCollection from '@/views/modules/dictionaryTechanCollection/list'
    import dictionaryTechanOrder from '@/views/modules/dictionaryTechanOrder/list'
    import dictionaryTechanOrderPayment from '@/views/modules/dictionaryTechanOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryCanyin',
        name: '餐饮类型',
        component: dictionaryCanyin
    }
    ,{
        path: '/dictionaryCanyinCollection',
        name: '收藏表类型',
        component: dictionaryCanyinCollection
    }
    ,{
        path: '/dictionaryCanyinOrder',
        name: '订单类型',
        component: dictionaryCanyinOrder
    }
    ,{
        path: '/dictionaryCanyinOrderPayment',
        name: '订单支付类型',
        component: dictionaryCanyinOrderPayment
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJingdian',
        name: '景点类型',
        component: dictionaryJingdian
    }
    ,{
        path: '/dictionaryJingdianXingji',
        name: '景点星级',
        component: dictionaryJingdianXingji
    }
    ,{
        path: '/dictionaryLvyouluxian',
        name: '旅游路线类型',
        component: dictionaryLvyouluxian
    }
    ,{
        path: '/dictionaryMinsu',
        name: '民宿类型',
        component: dictionaryMinsu
    }
    ,{
        path: '/dictionaryMinsuCollection',
        name: '收藏表类型',
        component: dictionaryMinsuCollection
    }
    ,{
        path: '/dictionaryMinsuOrder',
        name: '订单类型',
        component: dictionaryMinsuOrder
    }
    ,{
        path: '/dictionaryMinsuOrderPayment',
        name: '订单支付类型',
        component: dictionaryMinsuOrderPayment
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionarySingleSeach',
        name: '单页数据类型',
        component: dictionarySingleSeach
    }
    ,{
        path: '/dictionaryTechan',
        name: '特产类型',
        component: dictionaryTechan
    }
    ,{
        path: '/dictionaryTechanCollection',
        name: '收藏表类型',
        component: dictionaryTechanCollection
    }
    ,{
        path: '/dictionaryTechanOrder',
        name: '订单类型',
        component: dictionaryTechanOrder
    }
    ,{
        path: '/dictionaryTechanOrderPayment',
        name: '订单支付类型',
        component: dictionaryTechanOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/canyin',
        name: '餐饮',
        component: canyin
      }
    ,{
        path: '/canyinCollection',
        name: '餐饮收藏',
        component: canyinCollection
      }
    ,{
        path: '/canyinCommentback',
        name: '餐饮评价',
        component: canyinCommentback
      }
    ,{
        path: '/canyinLiuyan',
        name: '餐饮留言',
        component: canyinLiuyan
      }
    ,{
        path: '/canyinOrder',
        name: '餐饮订单',
        component: canyinOrder
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/jingdian',
        name: '景点',
        component: jingdian
      }
    ,{
        path: '/lvyouluxian',
        name: '旅游路线',
        component: lvyouluxian
      }
    ,{
        path: '/minsu',
        name: '民宿',
        component: minsu
      }
    ,{
        path: '/minsuCollection',
        name: '民宿收藏',
        component: minsuCollection
      }
    ,{
        path: '/minsuCommentback',
        name: '民宿评价',
        component: minsuCommentback
      }
    ,{
        path: '/minsuLiuyan',
        name: '民宿留言',
        component: minsuLiuyan
      }
    ,{
        path: '/minsuOrder',
        name: '民宿订单',
        component: minsuOrder
      }
    ,{
        path: '/singleSeach',
        name: '单页数据',
        component: singleSeach
      }
    ,{
        path: '/techan',
        name: '特产',
        component: techan
      }
    ,{
        path: '/techanCollection',
        name: '特产收藏',
        component: techanCollection
      }
    ,{
        path: '/techanCommentback',
        name: '特产评价',
        component: techanCommentback
      }
    ,{
        path: '/techanLiuyan',
        name: '特产留言',
        component: techanLiuyan
      }
    ,{
        path: '/techanOrder',
        name: '特产订单',
        component: techanOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

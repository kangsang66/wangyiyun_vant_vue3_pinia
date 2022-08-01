import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path:'/',
    redirect: '/Home'  // 首次进入路由路径
  },
  {
    path: '/Home',
    name: 'home',
    component:() => import('../views/Home.vue'),
  },
  {
    path: '/recommendMusic',
    name: 'RecommendMusic',
    component: () => import('../views/RecommendMusic.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      isChecked:false
    }
  },
  {
    path:'/phonelogin',
    name:'PhoneLogin',
    component:() => import('../views/PhoneLogin.vue'),
    // 根据from元信息判断是否让行
    beforeEnter:(to,from,next) => {
      if(from.meta.isChecked === true){
        next()
      }else {
        next('/login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 全局前置路由守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path==='/phonelogin'){

//   }
// })

export default router

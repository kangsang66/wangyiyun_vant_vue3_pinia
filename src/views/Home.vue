<template>
  <div>
    <top-nav />
    <swiper />
    <IconList />
    <Suspense>
      <Recommend />
    </Suspense>
  </div>
</template>

<script>
// 引入头部导航组件
import TopNav from '@/components/Home/TopNav.vue'
// 引入轮播组件
import Swiper from '@/components/Home/Swiper.vue'
// 引入Icon组件
import IconList from '@/components/Home/IconList.vue'
// 引入推荐歌单组件
import Recommend from '@/components/Home/Recommend.vue'
export default {
  name: 'Home',
  components: { TopNav, Swiper, IconList, Recommend }
}
</script>

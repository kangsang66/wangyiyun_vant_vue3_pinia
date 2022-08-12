<template>
  <!-- vant轮播图 -->
  <div class="swiper">
    <van-skeleton :loading="Show" title :row="3" :animate="true" />
    <van-swipe v-if="!Show" :autoplay="2000"
               lazy-render
               indicator-color="#fff">
      <van-swipe-item   v-for="image in SwiperInfos.images"
                      :key="image.id">
        <a :href="image.url">
          <img :src="image.pic" height="126" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 引入首页轮播图API
import { BannerAPI } from '@/api/index.js'
import { reactive, onMounted ,ref} from 'vue';
// == pinia ==
import {usePlayListStore} from '@/store/index'
export default {
  name: 'Swiper',
  setup () {
    const Show = ref(usePlayListStore().Show)
    const SwiperInfos = reactive({
      images: []
    })
    // Vue3中的生命周期函数
    onMounted(async () => {
      let Banner = await BannerAPI()
      SwiperInfos.images = Banner.data.banners
      setTimeout(()=>{
        Show.value = false
      },2000)
    })
    return {
      SwiperInfos,
      Show
    };
  },
}
</script>
<style lang="less" scoped>

.swiper {
  border-radius: 0.2rem;
  // padding: 0.1rem;
  .van-swipe {
    height: 3.4rem;
    border-radius: 0.2rem;
    // overflow: visible;
     height: 128px;
    .van-swipe-item {
      display: flex;
      justify-content: space-around;
      img {
        width: 9.1rem;
        border-radius: 0.2rem;
        height: 128px;
      }
    }
  }
}
</style>
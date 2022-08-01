<template>
  <!-- vant轮播图 -->
  <div class="swiper">
    <van-swipe :autoplay="2000"
               lazy-render
               indicator-color="#fff">
      <van-swipe-item v-for="image in SwiperInfos.images"
                      :key="image.id">
        <a :href="image.url">
          <img :src="image.pic" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 引入首页轮播图API
import { BannerAPI } from '@/api/index.js'
import { reactive, onMounted } from 'vue';
export default {
  name: 'Swiper',
  setup () {
    const SwiperInfos = reactive({
      images: []
    })
    // Vue3中的生命周期函数
    onMounted(async () => {
      let Banner = await BannerAPI()
      SwiperInfos.images = Banner.data.banners
    })
    return {
      SwiperInfos,
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
    .van-swipe-item {
      display: flex;
      justify-content: space-around;
      img {
        width: 9.1rem;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>
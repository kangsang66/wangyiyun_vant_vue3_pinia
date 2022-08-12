<template>
  <div class="box">
    <div class="top">
      <h2>推荐歌单</h2>
      <van-button type="primary">
        更多
        <van-icon name="arrow" />
      </van-button>
    </div>
    <div class="box">
      <div class="recommend">
        <van-skeleton :loading="Show" title :row="3" :animate="true" />
        <van-swipe v-if="!Show"
                   :loop="false"
                   :width="103"
                   :show-indicators="false">
          <van-swipe-item  v-for="songInfo in RecommendInfo.songs"
                          :key="songInfo.id">
            <!-- 路由传递参数使用{path:'',params:} -->
            <router-link
                         :to="{ path: '/recommendMusic', query: { id: songInfo.id } }">
              <div class="count">{{ counts(songInfo.playCount) }}</div>
              <img :src="songInfo.picUrl" />
              <span>{{ songInfo.name }}</span>
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import { RecommendAPI } from '@/api/index.js'
import { reactive, onMounted,ref } from 'vue'
// == pinia ==
import {usePlayListStore} from '@/store/index'
export default {
  name: 'Recommend',
  setup () {
    const Show = ref(usePlayListStore().Show)
    const RecommendInfo = reactive({
      songs: []
    })
    function counts (counts) {
      return (counts / 10000).toFixed(0) + '万'
    }
    onMounted(async () => {
      let recommend = await RecommendAPI()
      RecommendInfo.songs = recommend.data.result
      setTimeout(()=>{
        Show.value = false
      },2000)
    })
    return {
      RecommendInfo,
      Show,
      counts,
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  background-color: #f5f5f5;
  height: 4rem;
  .top {
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    padding: 0 0.5rem;
    background-color: #fff;
    h2 {
      font-weight: 600;
      font-size: 0.56rem;
    }
    .van-button {
      color: #000;
      width: 1.6rem;
      height: 0.7rem;
      font-weight: 500;
      line-height: 0.8rem;
      border-radius: 0.4rem;
      padding-left: 0.1rem;
      border: 1px solid rgb(182, 182, 182);
      background-color: #fff;
      .van-icon {
        width: 0;
        height: 0.4rem;
        float: right;
        line-height: 0.8rem;
      }
    }
  }
  .recommend {
    text-align: left;
    padding: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    background-color: #fff;
    .van-swipe {
      .van-swipe-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        a {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        span {
          width: 100%;
          padding: 0 0.2rem;
          margin-top: 0.1rem;
          font-size: 0.2rem;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          /* 弹性伸缩盒子模型显示 */
          display: -webkit-box;
          /* 限制在一个块元素显示的文本的行数 */
          -webkit-line-clamp: 2;
          /* 设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-box-orient: vertical;
        }
        img {
          border-radius: 0.3rem;
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }
  .count {
    position: absolute;
    top: 0.15rem;
    left: 1rem;
    width: 1.3rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.4rem;
    color: #fff;
    background-color: #909090;
    opacity: 0.6;
    font-size: 0.24rem;
    font-weight: 100;
  }
}
</style>
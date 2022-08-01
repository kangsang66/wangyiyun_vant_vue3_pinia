<template>
  <div class="songlist">
    <div class="top">
      <div class="top_left">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <b>播放全部</b>
        <span> ({{itemlist.length}}) </span>
      </div>
      <div class="top_right">
        <svg t="1657177666358"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="25378"
             width="200"
             height="200">
          <path d="M512 989.866667C249.173333 989.866667 34.133333 774.826667 34.133333 512S249.173333 34.133333 512 34.133333s477.866667 215.04 477.866667 477.866667-215.04 477.866667-477.866667 477.866667z m0-904.533334C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z"
                fill="#333333"
                p-id="25379"></path>
          <path d="M512 738.986667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L343.04 580.266667c-10.24-10.24-10.24-25.6 0-35.84s25.6-10.24 35.84 0l133.12 133.12 133.12-133.12c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84l-150.186667 150.186666c-5.12 5.12-11.946667 8.533333-18.773333 8.533334z"
                fill="#333333"
                p-id="25380"></path>
          <path d="M512 738.986667c-13.653333 0-25.6-11.946667-25.6-25.6V278.186667c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v435.2c0 13.653333-11.946667 25.6-25.6 25.6z"
                fill="#333333"
                p-id="25381"></path>
        </svg>
        <svg t="1657177825842"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="32248"
             width="200"
             height="200">
          <path d="M503.808 47.104C248.832 47.104 40.96 254.976 40.96 509.952S248.832 972.8 503.808 972.8s462.848-207.872 462.848-462.848S758.784 47.104 503.808 47.104z m0 873.472c-226.304 0-410.624-184.32-410.624-410.624s184.32-410.624 410.624-410.624 410.624 184.32 410.624 410.624c-1.024 226.304-184.32 410.624-410.624 410.624z"
                p-id="32249"></path>
          <path d="M701.44 358.4L434.176 625.664l-122.88-122.88c-12.288-12.288-32.768-12.288-45.056 0-12.288 12.288-12.288 32.768 0 45.056l144.384 144.384c6.144 6.144 15.36 9.216 23.552 9.216 8.192 0 17.408-3.072 23.552-9.216l288.768-288.768c12.288-12.288 12.288-32.768 0-45.056-12.288-12.288-32.768-12.288-45.056 0z"
                p-id="32250"></path>
        </svg>
      </div>
    </div>
    <!-- 点击就传递该歌曲的信息 -->
    <div class="songbox"
         v-for="(ele,id) in itemlist"
         @click="playsong(ele,id)"
         :key="id">
      <div class="id">
        <span> {{id+1}}</span>
      </div>
      <div class="songbox_center">
        <!-- 歌曲名 -->
        <span class="songname">{{ele.name}}</span>
        <!-- 歌手名 -->
        <!-- 专辑名 -->
        <span class="album"> {{ele.ar[0].name}}<span
                class="sp">-</span>{{ele.al.name}}</span>
      </div>

      <!-- 右图标 -->
      <div class="icons">
        <svg t="1657190101550"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="40365"
             width="200"
             height="200">
          <path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
                fill="#919191"
                p-id="40366">
          </path>
        </svg>
        <svg t="1657190175390"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="42121"
             data-spm-anchor-id="a313x.7781069.0.i28"
             width="200"
             height="200">
          <path d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                p-id="42122"
                data-spm-anchor-id="a313x.7781069.0.i29"
                class="selected"
                fill="#919191"></path>
        </svg>
      </div>
    </div>
    <div class="subscribers">
      <div class="left">
        <div v-for="(subscriber,id) in Subscribers.slice(0,5)"
             :key="id">
          <img :src="subscriber.avatarUrl"
               alt="">
        </div>
      </div>
      <div class="right"
           v-show="showSub">
        <span>{{subscribedCount()+'人收藏'}}</span>
        <van-icon name="arrow"
                  color="#989898"
                  size="16" />
      </div>
    </div>
  </div>
</template>

<script>
import { counts } from '@/hooks/counts.js'
import { usePlayListStore } from '@/store'
import { nextTick, ref, watch } from 'vue'
export default {
  name: 'ItemMusciList',
  props: ['itemlist', 'Subscribers', 'subscribedCount'],
  setup (props) {
    const playList = usePlayListStore()
    const showSub = ref(false)
    const subscribedCount = () => {
      return counts(props.subscribedCount)
    }
    watch(() => props.Subscribers, () => {
      nextTick(() => {
        showSub.value = true
      })
    })
    // 播放歌曲
    function playsong (ele, index) {
      playList.isplay = true
      playList.songsList = props.itemlist
      playList.animationShow = true
      // 结构获取
      const { al, ar, id } = ele
      // 传值
      playList.undatePlayList({ al, ar, id, index })
    }
    return {
      showSub,
      playsong,
      subscribedCount
    }
  },
}
</script>

<style lang="less" scoped>
.songlist {
  width: 100%;
  background-color: #fff;
  margin-top: -1rem;
  margin-bottom: 2.4rem;
  padding: 1rem 0 0 0;
  z-index: -1;

  .top {
    display: flex;
    height: 1.2rem;
    line-height: 1.2rem;
    justify-content: space-between;
    align-items: center;
    .top_left {
      width: 4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      svg {
        font-size: 0.64rem;
      }
      b {
        font-size: 0.46rem;
      }
      span {
        color: #999;
        font-size: 0.32rem;
      }
    }
    .top_right {
      width: 2.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      svg {
        font-size: 0.6rem;
      }
    }
  }
  .songbox {
    display: flex;
    align-items: center;
    padding: 0.8rem 0rem;
    border-radius: 0 0.4rem 0.4rem 0;
    width: 100%;
    height: 1.2rem;
    transition: 0.6s;
    .id {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.2rem;
      height: 1.2rem;
      span {
        font-size: 0.44rem;
        color: #939393;
      }
    }
    .songbox_center {
      display: flex;
      flex-direction: column;
      width: 6.6rem;
      .songname {
        font-size: 0.44rem;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
      }
      .album {
        font-size: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
        color: #999;
        .sp {
          margin: 0 0.1rem;
        }
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 2rem;
      padding: 0 0 0 0.36rem;
    }
  }
  .songbox:hover {
    background-color: #cfcfcf;
    border-radius: 0;
  }
  .subscribers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0.2rem 0.8rem 0.4rem;
    border-radius: 0 0.4rem 0.4rem 0;
    width: 100%;
    height: 1.2rem;
    transition: 0.6s;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
    }
    .right {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        font-size: 0.4rem;
        color: #989898;
      }
    }
  }
}
</style>
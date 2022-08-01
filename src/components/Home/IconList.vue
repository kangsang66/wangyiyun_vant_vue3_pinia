<template>
  <div class="box">
    <van-swipe :loop="false"
               :width="66"
               :show-indicators="false">
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-tuijian"></use>
          </svg>
        </div>
        <span>每日推荐</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-diantai"></use>
          </svg>
        </div>
        <span>私人FM</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-yinlegedanyinfu"></use>
          </svg>
        </div>
        <span>歌单</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-shangdianxiaoshoupaihangbang"></use>
          </svg>
        </div>
        <span>排行榜</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-dianzishu"></use>
          </svg>
        </div>
        <span>有声书</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-yinlezhuanji"></use>
          </svg>
        </div>
        <span>数字专辑</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-zhibo"></use>
          </svg>
        </div>
        <span>直播</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-guanzhu"></use>
          </svg>
        </div>
        <span>关注</span>
      </van-swipe-item>
      <van-swipe-item>
        <div class="list">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-youxi"></use>
          </svg>
        </div>
        <span>游戏专区</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'IconList',
}
</script>

<style lang="less" scoped>
.van-swipe {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.3rem;
  border-bottom: 1px solid #eee;
  span {
    color: #777;
    font-size: 0.32rem;
  }
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 1.3rem;
    height: 1.3rem;
    text-align: center;
    background-color: rgb(243, 233, 233);
    border-radius: 50%;
    svg {
      width: 0.8rem;
      height: 0.8rem;
      background-color: rgb(248, 192, 192);
      border-radius: 50%;
    }
  }
}
</style>
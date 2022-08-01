<template>
  <div class="search_top">
    <van-cell>
      <div class="search_top_inner">
        <router-link to="/Login">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icon-xitongfanhui"></use>
          </svg>
        </router-link>
        <b>手机号登录</b>
      </div>
    </van-cell>
  </div>

</template>

<script>
export default {
  name: 'PhoneLoginTop',
  setup () {
  }
}
</script>

<style lang="less" scoped>
.search_top {
  width: 100%;
  .van-cell {
    padding: 0.4rem;
    .search_top_inner {
      display: flex;
      align-items: center;
    }
    .van-search {
      padding: 0;
      width: 70%;
    }
    svg {
      color: #333333;
      vertical-align: middle;
      width: 0.7rem;
      height: 0.7rem;
    }
    b {
      margin-left: 0.5rem;
      font-size: 0.56rem;
      font-weight: 600;
      color: #333333;
    }
  }
}

</style>
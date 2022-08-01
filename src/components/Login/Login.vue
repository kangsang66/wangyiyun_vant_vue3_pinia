<template>
  <div class="login">
    <router-link to="/phonelogin">
      <div @click="showLoginInfo">手机号登录</div>
    </router-link>
    <!-- 服务协议弹出层 -->
    <van-popup class="LoginMsg"
               v-model:show="showLoginMsg"
               position="bottom"
               round
               :style="{ height: '30%' }">
      <div class="LoginMsg">
        <div class="LoginMsg-top">
          <b>服务协议和隐私政策等指引</b>
        </div>
        <div class="LoginMsg-content">
          <p>
            进入下一步前,&nbsp;&nbsp;请阅读并同意网易云音乐的<span>《服务条款》</span>、<span>《隐私政策》</span>
          </p>
        </div>
        <div class="LoginMsg-bottom">
          <div class="LoginMsg-disAgree"
               @click="disAgree">
            不同意
          </div>
          <div class="LoginMsg-Agree"
               @click="Agree">
            同意并继续
          </div>
        </div>
      </div>
    </van-popup>

    <router-link to="">
      <div class="login_two">微信登录</div>
    </router-link>
    <div class="check"
         @click="checked = !checked">
      <transition>
        <div v-if="checked"
             class="pulse"></div>
      </transition>
      <svg v-show="checked"
           t="1656914652301"
           class="icon"
           viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="3336"
           width="200"
           height="200">
        <path d="M429.5 773.3c-9.3 0-18.6-3.2-26.1-9.7L108.7 509.5c-16.7-14.4-18.6-39.7-4.2-56.4 14.4-16.7 39.7-18.6 56.4-4.2l266.6 229.9 454.8-451.2c15.7-15.6 41-15.5 56.6 0.2 15.6 15.7 15.5 41-0.2 56.6l-481 477.3c-7.8 7.7-18 11.6-28.2 11.6z"
              fill="#cdcdcd"
              p-id="3337"></path>
      </svg>
    </div>
    <span>服务条款、隐私政策</span>
  </div>

</template>
<script>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  name: 'Login',
  setup () {
    const route = useRoute()
    const router = useRouter()
    // 用户是否已阅读
    const checked = ref(false);
    // 服务协议弹出层
    const showLoginMsg = ref(false)
    // 展示服务协议弹出层
    const showLoginInfo = () => {
      if (!checked.value) {
        showLoginMsg.value = !showLoginMsg.value
      }
    }
    // 用户不同意
    const disAgree = () => {
      checked.value = false
      showLoginMsg.value = !showLoginMsg.value

    }
    // 用户同意
    const Agree = () => {
      checked.value = true
      // showLoginMsg.value = !showLoginMsg.value
      // 手动跳转到手机登录路由
      router.push('/phonelogin')
    }
    // 根据当前的确认状态改变路由元信息
    watch(() => checked.value, () => {
      route.meta.isChecked = checked.value
    })
    return {
      checked,
      showLoginMsg,
      showLoginInfo,
      disAgree,
      Agree
    }
  },
}
</script>

<style lang='less' scoped>
.login {
  text-align: center;
  a div {
    width: 7rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.44rem;
    border-radius: 0.6rem;
    background-color: #fefefe;
    color: #dc3427;
    margin: 0.4rem auto;
  }
  .LoginMsg {
    letter-spacing: 0.02rem;
    padding: 1rem 1rem 0.2rem;
    span {
      color: #7fa0c4;
    }
    &-top {
      width: 100%;
      height: 1rem;
      b {
        font-size: 0.5rem;
        color: #000;
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      width: 96%;
      height: 1.6rem;
      p {
        font-size: 0.32rem;
        color: #999;
      }
    }
    &-bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 0;
    }
    &-disAgree {
      width: 3.8rem;
      border-radius: 1rem;
      border: 0.02rem solid #db2b1e;
      margin: 0;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.44rem;
      color: #db2b1e;
    }
    &-Agree {
      width: 3.8rem;
      border-radius: 1rem;
      border: 0.02rem solid #db2b1e;
      margin: 0;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.44rem;
      color: #f6d8d7;
      background-color: #fd393b;
    }
  }
  .login_two {
    border: 1px solid #e4746c;
    color: #f2dbd8;
    background-color: #db2b1e;
  }
  .check {
    display: inline-block;
    position: relative;
    width: 0.26rem;
    height: 0.26rem;
    border-radius: 0.08rem;
    line-height: 0.3rem;
    border: 1px solid #e4746c;
    background-color: #db2b1e;
    .pulse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #c5291d;
      // border: 1px solid #c82a1d;
      animation: pointe 0.5s ease forwards 1;
      z-index: 0;
    }
    @keyframes pointe {
      0% {
        width: 40px;
        height: 40px;
        opacity: 1;
      }
      90% {
        width: 60px;
        height: 60px;
        opacity: 0.2;
      }
      100% {
        width: 60px;
        height: 60px;
        opacity: 0;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.2rem;
      height: 0.2rem;
      z-index: 1;
    }
  }
  span {
    margin-left: 0.15rem;
    color: #f8d3d1;
    font-size: 0.35rem;
  }
}
</style>
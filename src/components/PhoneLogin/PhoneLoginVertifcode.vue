<template>
  <transition name="van-slide-right">
    <div v-if="data.showLoginVertify">
      <div class="verificate">
        <div class="verificate-top">
          <span>请输入验证码</span>
        </div>
        <div class="verificate-content">
          <p>已发送至+86&nbsp;{{slicePhoneNumber()}}</p>
          <span v-if="data.VertifyNumber">重新发送{{i}}s</span>
          <span @click="newSend"
                v-if="!data.VertifyNumber"
                style="color:darkcyan">重新发送</span>
        </div>
        <div class="verificate-bottom">
          <!-- 可以使用 CellGroup 作为容器 -->
          <van-cell-group inset>
            <van-field v-model="value1"
                       :ref="input"
                       type="number"
                       name="1"
                       required
                       autofocus
                       center
                       maxlength="1" />
            <van-field v-model="value2"
                       :ref="input"
                       type="number"
                       name="2"
                       required
                       autofocus
                       center
                       maxlength="1" />
            <van-field v-model="value3"
                       :ref="input"
                       type="number"
                       name="3"
                       required
                       autofocus
                       center
                       maxlength="1" />
            <van-field v-model="value4"
                       :ref="input"
                       type="number"
                       name="4"
                       required
                       autofocus
                       center
                       maxlength="1" />
          </van-cell-group>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { usePlayListStore } from '@/store';
import { onBeforeUpdate, watch } from 'vue'
import { useRouter } from 'vue-router';
import { VerifyPhoneAPI, PhoneLoginAPI } from '@/api/index'
import { Toast } from 'vant';
export default {
  setup () {
    const router = useRouter()
    // 展示该验证码组件
    const data = reactive(usePlayListStore())
    // input value
    const value1 = ref()
    const value2 = ref()
    const value3 = ref()
    const value4 = ref()
    const values = reactive([value1, value2, value3, value4])
    // Set
    let Arr = ref(new Set())
    // 新数组
    let newArr = ref([])
    // 利用Set去重
    const input = el => {
      if (el) {
        Arr.value.add(el)
        // el.blur()
      }
    }
    let i = ref(60);
    const timer = ref(null)
    // 手机号截取
    const slicePhoneNumber = () => {
      if (data.PhoneNumber) {
        return data.PhoneNumber.replace(data.PhoneNumber.slice(3, 7), '****')
      }
    }
    // 重新发送验证码
    const newSend = async () => {
      data.VertifyNumber = true
      i.value = 60
      let res = await PhoneLoginAPI(data.PhoneNumber)
      console.log('重新发送');
    }
    // 发送验证码定时器
    watch(() => data.VertifyNumber, () => {
      if (data.VertifyNumber === true) {
        timer.value = setInterval(() => {
          i.value--
          if (i.value === 0) {
            data.VertifyNumber = false
            clearInterval(timer.value)
          }
          return i
        }, 1000)
      }
    }, { immediate: true })

    // 监视最后一个value的值,如果有就进验证
    watch(() => values[3], async () => {
      Toast('登录成功!');
      Toast.setDefaultOptions({ duration: 2000 })
      if (values[3].value.length === 1) {
        console.log(111);
        router.push('/Home')
        // // 发送验证请求
        // let res = await VerifyPhoneAPI(data.PhoneNumber, value1.value + value2.value + value3.value + value4.value)
      }
    }, { deep: true })

    // 监视每个value的长度,从而变化input是否聚焦
    watch(() => values, (newValue) => {
      if (newValue) {
        Arr.value.forEach((ele) => {
          newArr.value.push(ele)
        })
      }
    }, { deep: true })
    // 监视数组变化focus
    watch(() => newArr.value, () => {
      newArr.value.reduce((previousValue, currentValue, index) => {
        setTimeout(() => {
          if (newArr.value[index - 1] && newArr.value[index - 1].modelValue.length == 1) {
            // 作为前值
            newArr.value[index - 1].modelValue
            // 作为后值
            currentValue.focus()
          }
        })
      })
    }, { deep: true })
    onBeforeUpdate(() => {
      Arr.value.clear()
    })
    return {
      i,
      value1,
      value2,
      value3,
      value4,
      Arr,
      values,
      newArr,
      data,
      timer,
      router,
      input,
      newSend,
      slicePhoneNumber,
    }
  }
}
</script>

<style lang="less" scoped>
.verificate {
  width: 100%;
  padding: 1rem 0.4rem;
  &-top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    font-weight: 600;
    color: #404040;
    font-size: 0.5rem;
    margin: 0.2rem 0;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.36rem;
      color: #acacac;
    }
    span {
      font-size: 0.36rem;
      color: #acacac;
    }
  }
  &-bottom {
    margin-top: 0.6rem;
    height: 2rem;
    .van-cell-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      margin: 0;
      .van-field {
        width: 1.2rem;
        height: 1.2rem;
        text-align: center;
        border-bottom: 0.02rem solid #ccc;
        margin: 0 0.2rem;
      }
    }
  }
}
</style>

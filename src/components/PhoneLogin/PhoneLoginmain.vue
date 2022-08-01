<template>
  <div class="info">
    <b>登录体验更多精彩</b>
    <span>未注册手机号登录后将自动创建账号</span>
  </div>
  <div class="main">
    <div class="Country">
      <van-button is-link
                  @click="showPopup">
        <div class="btn">
          <span>{{PhoneNumber}}</span>
          <van-icon name="play" />
        </div>
      </van-button>
      <van-field v-model="number"
                 type="number" />
      <van-icon name="cross" />
    </div>
    <van-popup v-model:show="show"
               round
               position="bottom"
               :style="{ height: '92%' }">
      <div class="choose">
        <van-icon name="cross" />
        <b>选择国家和地区</b>
      </div>
      <b>常用</b>
      <div class="content">
        <div class="PhoneLists"
             v-for="(value,key,id) in info.data"
             :key="id">
          <div class="list"
               @click="getNumber(value)">
            <b>{{ key }}</b>
            <span>{{ value }}</span>
          </div>
        </div>
        <div class="Numbernav">
          <ul v-for="(ele,id) in pinyin"
              :key="id">
            <li>{{ ele }}</li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
  <div class="login">
    <div class="next"
         @click="phoneLogin"><span>下一步</span></div>
    <!-- 下滑进入 -->
    <transition name="van-slide-down">
      <div class="PhoneNumberToast"
           v-show="showPhoneNumberToast">请输入11位数字的手机号</div>
    </transition>
    <router-link to="">找回账号</router-link>
  </div>
</template>

<script>
import { PhoneLoginAPI } from '@/api/index'
import { reactive, ref } from 'vue';
import { usePlayListStore } from '@/store';
export default {
  name: 'PhoneLoginMain',
  setup () {
    const data = reactive(usePlayListStore())
    const number = ref('');
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    let PhoneNumber = ref('+86');
    // 国家/地区 ==> 手机号
    const countries = [
      "中国", "中国香港", "中国台湾", "中国澳门", "美国", "日本", "马来西亚", "澳大利亚", "加拿大",
      "英国", "新加坡", "德国", "俄罗斯", "埃及", "南非", "希腊", "荷兰", "比利时", "法国 ", "西班牙", "匈牙利", "意大利 ", "罗马尼亚",
      "瑞士", "奥地利", "丹麦", "瑞典", "挪威", "波兰", "秘鲁", "墨西哥", "古巴", "阿根廷", "巴西", "智利", "哥伦比亚",
      "委内瑞拉", "印度尼西亚", "菲律宾", "新西兰", "泰国", "哈萨克斯坦", "韩国", "越南", "土耳其", "印度", "巴基斯坦",
      "阿富汗", "斯里兰卡", "缅甸", "伊朗", "摩洛哥", "阿尔及利亚", "突尼斯", "利比亚", "冈比亚", "塞内加尔", "马里",
      "几内亚", "科特迪瓦", "布基纳法索", "尼日尔", "多哥", "贝宁", "毛里求斯", "利比里亚", "塞拉利昂", "加纳", "尼日利亚",
      "乍得", "中非共和国", "喀麦隆", "圣多美和普林西比", "加蓬", "刚果民主共和国", "安哥拉", "阿森松岛", "塞舌尔", "苏丹",
      "埃塞俄比亚", "索马里", "吉布提", "肯尼亚", "坦桑尼亚", "乌干达", "布隆迪", "莫桑比克", "赞比亚", "马达加斯加",
      "津巴布韦", "纳米比亚", "马拉维", "莱索托", "博茨瓦纳", "斯威士兰", "直布罗陀", "葡萄牙", "卢森堡", "爱尔兰",
      "冰岛", "阿尔巴尼亚", "马耳他", "塞浦路斯", "芬兰", "保加利亚", "立陶宛", "拉脱维亚", "爱沙尼亚", "摩尔多瓦", "亚美尼亚",
      "白俄罗斯", "安道尔共和国", "摩纳哥", "圣马力诺", "乌克兰", "斯洛文尼亚", "捷克", "斯洛伐克", "列支敦士登", "伯利兹 ", "瓜地马拉",
      "萨尔瓦多", "洪都拉斯", "尼加拉瓜", "哥斯达黎加", "巴拿马", "海地", "玻利维亚", "圭亚那", "厄瓜多尔", "法属圭亚那",
      "巴拉圭", "马提尼克", "苏里南", "乌拉圭", "文莱", "巴布亚新几内亚", "汤加", "所罗门群岛", "斐济", "库克群岛", "法属波利尼西亚",
      "柬埔寨", "老挝", "孟加拉国", "马尔代夫", "黎巴嫩", "约旦", "叙利亚", "伊拉克 ", "科威特", "沙特阿拉伯", "也门", "阿曼", "阿拉伯联合酋长国",
      "以色列", "巴林", "卡塔尔", "蒙古", "尼泊尔", "塔吉克斯坦", "土库曼斯坦", "阿塞拜疆", "格鲁吉亚", "吉尔吉斯斯坦", "乌兹别克斯坦",
      "巴哈马", "巴巴多斯", "安圭拉岛", "安提瓜和巴布达", "开曼群岛", "百慕大群岛", "格林纳达", "蒙特塞拉特岛", "关岛", "圣露西亚",
      "波多黎各", "多明尼加共和国", "特立尼达和多巴哥", "牙买加", "塞尔维亚共和国", "毛里塔尼亚"
    ]
    const numbers = [
      "+86", "+852", "+886", "+853", "+1", "+81", "+60", "+61", "+1", "+44", "+65", "+49", "+7", "+20",
      "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39", "+40", "+41", "+43", "+45", "+46", "+47", "+48", "+51", "+52", "+53", "+54", "+55",
      "+56", "+57", "+58", "+62", "+63", "+64", "+66", "+7", "+82", "+84", "+90", "+91", "+92", "+93", "+94", "+95", "+98", "+212",
      "+213", "+216", "+218", "+220", "+221", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233",
      "+234", "+235", "+236", "+237", "+239", "+241", "+243", "+244", "+247", "+248", "+249", "+251", "+252", "+253", "+254", "+255",
      "+256", "+257", "258", "+260", "+261", "+263", "+264", "+265", "+266", "+267", "+268", "+350", "+351", "+352", "+353", "+354",
      "+355", "+356", "+357", "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+380", "+386",
      "+420", "+421", "+423", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+509", "+591", "+592", "+593", "+594", "+595",
      "+596", "+597", "+598", "+673", "+675", "+676", "+677", "+679", "+682", "+689", "+855", "+856", "+880", "+960", "+961", "+962"
      , "+963", "+964", "+965", "+966", "+967", "+968", "+971", "+972", "+973", "+974", "+976", "+977", "+992", "+993", "+994", "+995",
      "+996", "+998", "+1242", "+1246", "+1264", "+1268", "+1345", "+1441", "+1473", "+1664", "+1671", "+1758", "+1787", "+1809",
      "+1868", "+1876", "+381", "+222"
    ]
    const pinyin = ['常', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const info = reactive({
      data: {}
    })
    for (let i = 0; i < countries.length; i++) {
      // info.countryName.push(countries[i]) 
      // info.number.push(numbers[i]) 
      info.data[countries[i]] = numbers[i]
    }
    function getNumber (number) {
      // 注意这里的坑,必须在ref数据写上value
      PhoneNumber.value = number
      show.value = false;
    }
    // 手机号格式不正确提示
    const showPhoneNumberToast = ref(false)
    // 验证手机号正则
    const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    // 手机发送验证码接口
    const phoneLogin = async () => {
      data.VertifyNumber = true
      if (regExp.exec(number.value)) {
        data.showLoginVertify = true
        console.log(data.showLoginVertify);
        let res = await PhoneLoginAPI(number.value)
        // 将当前手机号传到pinia
        data.PhoneNumber = number.value
        // if (res.data.code === 200) {
        //   data.VertifyNumber = true
        // }
      } else {
        showPhoneNumberToast.value = true
        setTimeout(() => {
          showPhoneNumberToast.value = false
        }, 2000)
      }
    }
    return {
      data,
      show,
      number,
      countries,
      numbers,
      info,
      PhoneNumber,
      pinyin,
      showPhoneNumberToast,
      showPopup,
      getNumber,
      phoneLogin
    };
  }
}
</script>

<style lang="less" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 3rem;
  padding: 0.6rem 0.4rem;
  b {
    font-weight: 600;
    color: #404040;
    font-size: 0.5rem;
  }
  span {
    font-size: 0.32rem;
    color: #999999;
  }
}
.main {
  padding: 0 0.4rem;
  .Country {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
    .van-button {
      width: 1.2rem;
      height: 0.6rem;
      font-size: 0.48rem;
      border: 0;
      .btn {
        display: flex;
        align-items: center;
        .van-icon {
          margin-bottom: 0.1rem;
          margin-left: 0.1rem;
          font-size: 0.24rem;
          transform: rotate(90deg);
        }
        span {
          font-size: 0.46rem;
        }
      }
    }
    .van-field {
      font-size: 0.48rem;
    }
    .van-icon {
      color: #b3b3b3;
    }
  }
  .van-popup {
    b {
      font-weight: 900;
      font-size: 0.32rem;
      margin-left: 0.4rem;
    }
    .choose {
      display: flex;
      align-items: center;
      padding: 0.4rem;
      .van-icon {
        font-size: 0.52rem;
        color: #b3b3b3;
      }
      b {
        font-weight: 600;
        font-size: 0.48rem;
        margin-left: 0.4rem;
      }
    }
    .content {
      display: flex;
      width: 90%;
      flex-direction: column;
      .PhoneLists {
        padding: 0 0.1rem 0 0.4rem;
        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          // padding: ;
          height: 1.2rem;
          border-bottom: 1px solid #eee;
          b {
            font-weight: 600;
            color: #484848;
            font-size: 0.36rem;
            margin: 0;
          }
          span {
            color: #b3b3b3;
            font-size: 0.24rem;
          }
        }
      }

      .Numbernav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        right: 0.4rem;
        margin-top: 0.2rem;
        width: 0.5rem;
        height: 13rem;
        border-radius: 0.4rem;
        background-color: #adadad;
        ul li {
          font-size: 0.22rem;
          color: #e7e7e7;
        }
      }
    }
  }
}
.login {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  .PhoneNumberToast {
    position: fixed;
    top: 0.2rem;
    width: 5.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px;
    border-radius: 0.6rem;
    font-size: 0.36rem;
    padding: 0.2rem;
  }
  .next {
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 0.6rem;
    font-size: 0.46rem;
    color: #fae1e0;
    background-color: #fd393a;
  }
  a {
    font-weight: 500;
    font-size: 0.34rem;
    color: #2b74bd;
  }
}
</style>
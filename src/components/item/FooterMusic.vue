<template>
  <div v-if="playList.songsList[playList.playListIndex]"
       class="footerMusic">
    <div class="play_left"
         @click="showSongInfo">
      <img v-if="playList.songsList[playList.playListIndex].al.picUrl"
           :src="playList.songsList[playList.playListIndex].al.picUrl"
           alt="">
      <div class="channel">
        <!-- 歌曲名 -->
        <!-- 歌手名 -->
        <span
              class="songname">{{playList.songsList[playList.playListIndex].name}}</span>
        <span class="sp">-</span>
        <span
              class="singername">{{playList.songsList[playList.playListIndex].ar[0].name}}</span>
      </div>
    </div>
    <div class="play_right">
      <!-- 未播放时展示 -->
      <div class="firsticon">
        <svg t="1657264773996"
             @click="play"
             v-if="!playList.isplay"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="4219"
             data-spm-anchor-id="a313x.7781069.0.i15"
             width="200"
             height="200">
          <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333c-258.133 0-469.333-211.2-469.333-469.333S253.867 42.667 512 42.667 981.333 253.867 981.333 512 770.133 981.333 512 981.333z"
                p-id="4220"
                data-spm-anchor-id="a313x.7781069.0.i16"
                class="selected"
                fill="#bfbfbf"></path>
          <path d="M672 441.6L501.333 328.533c-57.6-38.4-106.666-12.8-106.666 57.6v256c0 70.4 46.933 96 106.666 57.6L672 586.667C729.6 544 729.6 480 672 441.6z"
                p-id="4221"></path>
        </svg>
        <!-- 播放时展示 -->
        <svg t="1657270170839"
             v-if="playList.isplay"
             @click="play"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2264"
             width="200"
             height="200">
          <path d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
                p-id="2265"
                fill="#8a8a8a"></path>
        </svg>
      </div>
      <div class="secondicon">
        <svg t="1657265030047"
             class="icon"
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="6342"
             width="200"
             height="200">
          <path d="M981.333333 917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H64a21.333333 21.333333 0 0 1 0-42.666667h896a21.333333 21.333333 0 0 1 21.333333 21.333333zM405.333333 170.666667h554.666667a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667z m554.666667 341.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM56.873333 252.893333a26.573333 26.573333 0 0 0 27.48-1.56l117.333334-80a26.666667 26.666667 0 0 0 0-44.066666l-117.333334-80A26.666667 26.666667 0 0 0 42.666667 69.333333v160a26.6 26.6 0 0 0 14.206666 23.56z"
                fill="#5C5C66"
                p-id="6343"></path>
        </svg>
      </div>
    </div>
    <audio ref="audio"
           :src="`https://music.163.com/song/media/outer/url?id=${playList.songsList[playList.playListIndex].id}.mp3`">
    </audio>
  </div>

  <!-- 展示音乐信息 -->
  <van-popup v-model:show="showSong"
             position="bottom"
             :style="{ width: '100%',height:'100%' }">
    <div class="SongBox"
         v-if="playList.songsList[playList.playListIndex]">
      <img class="SongBack"
           v-if="playList.songsList[playList.playListIndex].al.picUrl"
           :src="playList.songsList[playList.playListIndex].al.picUrl"
           alt="">
      <div class="SongBox_top">
        <div class="left">
          <van-icon name="arrow-down"
                    @click="showSongInfo" />
        </div>
        <div class="center">
          <!-- 歌曲名 -->
          <b>{{playList.songsList[playList.playListIndex].name}}</b>
          <span>{{playList.songsList[playList.playListIndex].ar[0].name}}</span>
        </div>
        <div class="right">
          <svg t="1657075302825"
               class="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="4553"
               width="200"
               height="200">
            <path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z"
                  fill="#fff"
                  p-id="4554"></path>
          </svg>
        </div>
      </div>
      <div class="SongBox_Center"
           @click="getLyric">
        <img v-if="!showLyric"
             :src="playList.songsList[playList.playListIndex].al.picUrl"
             alt="">
        <div v-show="!audio.paused&&showLyric == false"
             class="pulseOne"></div>
        <div v-show="!audio.paused&&showLyric == false"
             class="pulseTwo"></div>
        <div v-show="!audio.paused&&showLyric == false"
             class="pulseThree"></div>
        <div class="lyric"
             ref="musicLyric"
             :class="{lyric_active:showLyric}"
             v-show="showLyric">
          <p v-for="(ele,id) in lyric.data"
             :ref="setItemRef"
             :key="id"
             :class="{p_active:audio.currentTime*1000>=ele.time&&audio.currentTime*1000<ele.pre}">
            {{ele.lyc}}</p>
        </div>
      </div>
      <div class="SongBox_Bottom">
        <div class="top"
             :class="{SongBox_top_hidden:showLyric}">
          <img src="../../../public/img/loveHeart.png"
               alt="">
          <img src="../../../public/img/download.png"
               alt="">
          <img src="../../../public/img/sing.png"
               alt="">
          <img src="../../../public/img/pinglun.png"
               alt="">
          <img src="../../../public/img/more.png"
               alt="">
        </div>
        <div class="center">
          <span>{{audioCurrentTime}}</span>
          <div class="Progress">
            <!-- <input ref="input"
                   type="range"> -->
            <van-progress :percentage="per"
                          inactive
                          track-color="#90887f"
                          color="#90887f"
                          pivot-text=" "
                          stroke-width="1">
            </van-progress>
          </div>
          <span>{{audiolang()}}</span>
        </div>
        <div class="bottom">
          <img class="one"
               src="../../../public/img/shunxu.png"
               alt="">
          <img @click="before"
               class="two"
               src="../../../public/img/next.png"
               alt="">
          <img @click="play"
               class="three"
               v-if="!playList.isplay"
               src="../../../public/img/zhanting.png"
               alt="">
          <img @click="play"
               class="three"
               v-if="playList.isplay"
               src="../../../public/img/bofang.png"
               alt="">
          <img @click="next"
               class="four"
               src="../../../public/img/next.png"
               alt="">
          <img class="five"
               src="../../../public/img/songlists.png"
               alt="">
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
import { Toast } from 'vant'
import { usePlayListStore } from '@/store'
import { nextTick, onBeforeMount, reactive, ref, watch } from 'vue'
import { SongLyricAPI } from '@/api/index'
export default {
  name: "footerMusic",
  setup () {
    const audio = ref(null);
    const audioLang = ref();
    const audioCurrentTime = ref('00:00')
    const playList = reactive(usePlayListStore())
    const showSong = ref(false)
    const showLyric = ref(false)
    const animationShow = ref()
    const musicLyric = ref(null)
    const lyric = reactive({
      data: []
    })
    const itemRefs = ref({})
    // 过滤出p_active的标签
    const setItemRef = el => {
      if (showLyric.value === true) {
        if (el.classList.value === 'p_active') {
          itemRefs.value = el // 实时赋值
        }
      }
    }
    let per = ref(0)
    let animate = ref(false)
    async function getLyric () {
      clearInterval(timer)
      showLyric.value = !showLyric.value
      let SongLyric = []
      if (showLyric.value) {
        let res = await SongLyricAPI(playList.songsList[playList.playListIndex].id)
        // 处理歌词
        let lyric = res.data.lrc.lyric
        // 将字符串根据换行符进行切换转换为数组
        let s = lyric.split(/[(\r\n)\r\n]+/)
        s.map((ele) => {
          let min = ele.slice(1, 3)
          let sec = ele.slice(4, 6)
          let mill = ele.slice(7, 10).replace(']', '')
          let lyc = ele.slice(ele.indexOf("]") + 1,);
          let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill)
          let obj = { min, sec, mill, lyc, time }
          SongLyric.push(obj)
        })
        // 歌词播放
        SongLyric.forEach((ele, i) => {
          // 到达最后
          if (i === s.length - 1 || isNaN(SongLyric[i + 1].time)) {
            ele.pre = audio.value.duration * 1000
          } else {
            // pre为下一句歌词的播放时间
            ele.pre = SongLyric[i + 1].time
          }
        })
      }
      // 返回出去
      lyric.data = SongLyric
    }
    // 播放
    function play () {
      clearInterval(timer)
      // 如果未播放
      if (audio.value.paused) {
        setTimeout(() => {
          audio.value.play()
          animationShow.value = 'running'
        }, 500)
        playList.isplay = true
        // setInterval(timer, 1000)
      } else if (audio.value.play) { // 如果播放
        audio.value.pause()
        animationShow.value = 'paused'
        playList.isplay = false
        clearInterval(timer)
      }
    }
    // 显示音乐歌词层
    function showSongInfo () {
      showSong.value = !showSong.value
      showLyric.value = false
      clearInterval(timer)
    }
    // 定时器计算总时长
    function audiolang () {
      if (audio.value.currentTime && audio.value.play) {
        clearInterval(timer)
        // 分
        let minutes = parseInt(audio.value.duration / 60);
        // 秒
        let seconds = Math.round(audio.value.duration % 60);
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        audioLang.value = minutes + ':' + seconds
        // 直接点击的时候设置一个定时器进行计算
        // 定时器
        setInterval(timer, 500)
      }
      return audioLang.value
    }
    // 定时器计算
    function timer () {
      clearInterval(timer)
      if (playList.ShowAudio && audio.value.currentTime) {
        // 分
        let minutes = parseInt(audio.value.currentTime / 60);
        // 秒
        let seconds = Math.round(audio.value.currentTime % 60);
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        } else if (seconds === 59) {
          minutes + 1
        }
        playList.currentTime = minutes * 60 * 1000 + seconds * 1000
        audioCurrentTime.value = minutes + ':' + seconds
      } else {
        clearInterval(timer)
      }
    }
    // 上一首
    function before () {
      clearInterval(timer)
      if (playList.playListIndex === 0) {
        playList.playListIndex = playList.songsList.length - 1;
        playList.isplay = false
        setTimeout(async () => {
          try {
            getLyric()
            await audio.value.play()
            animationShow.value = 'running'
          } catch (error) {
            Toast.setDefaultOptions({ duration: 2000 })
            Toast('此歌曲不能播放');
          }
        }, 1000)
      } else {
        playList.playListIndex--
        setTimeout(async () => {
          try {
            getLyric()
            await audio.value.play()
            clearInterval(timer)
            animationShow.value = 'running'
          } catch (error) {
            Toast.setDefaultOptions({ duration: 2000 })
            Toast('此歌曲不能播放');
          }
        }, 1000)
      }
    }
    // 下一首
    function next () {
      if (playList.playListIndex === playList.songsList.length - 1) {
        playList.playListIndex = 0;
        setTimeout(async () => {
          try {
            getLyric()
            await audio.value.play()
            clearInterval(timer)
            animationShow.value = 'running'
          } catch (error) {
            Toast.setDefaultOptions({ duration: 2000 })
            Toast('此歌曲不能播放');
          }
        }, 1000)
      } else {
        playList.playListIndex++
        setTimeout(async () => {
          try {
            getLyric()
            await audio.value.play()
            change()
            clearInterval(timer)
            animationShow.value = 'running'
          } catch (error) {
            Toast.setDefaultOptions({ duration: 2000 })
            Toast('此歌曲不能播放');
            next()
          }
        }, 1000)
      }
    }
    // 实时变化进度
    function change () {
      setTimeout(() => {
        // 注意这里必须添加判断条件
        if (!isNaN(audio.value.duration)) {
          let s = +(100 / audio.value.duration).toFixed(2)
          let one = parseFloat(per.value.toFixed(2)) + s
          let two = Math.pow(10, 3)
          let res = parseInt(one * two) / Math.pow(10, 3)
          per.value = res
          if (per.value >= 100) {
            per.value = 100
          }
        }
      }, 1000)
    }
    // 控制动画状态等
    watch(() => playList.songid, () => {
      setTimeout(() => {
        if (playList.isplay === false) {
          playList.animationShow = 'running'
          audio.value.pause()
        } else if (playList.isplay === true) { // 如果播放
          playList.animationShow = 'paused'
          audio.value.play()
          clearInterval(timer)
        }
      }, 100)
    })
    // 监视歌曲是否播放完毕
    watch(() => audioCurrentTime.value, (newValue) => {
      // 如果播放完毕下一首
      if (newValue === audioLang.value) {
        next()
      }
      nextTick(() => {
        change()
      })
    })
    // 监视歌曲index的变化,改变其歌词层
    watch(() => playList.playListIndex, () => {
      // 如果播放的是搜索歌曲,就判断
      if (playList.playListIndex === playList.songsList.length) {
        setTimeout(() => {
          audio.value.play()
        }, 500)
      }
      showLyric.value = true
      playList.isplay = true
      per.value = 0
      clearInterval(timer)
    })
    watch(() => playList.currentTime, () => {
      // 展示歌词就去滚动
      if (showLyric.value === true) {
        // 装入的是p_active对象
        if (itemRefs.value.offsetTop > 300) {
          // 使用scrollTo() 
          musicLyric.value.scrollTo({ top: itemRefs.value.offsetTop - 300, behavior: 'smooth' })
        }
      }
    })
    // 在组件销毁前清除定时器
    onBeforeMount(() => {
      clearInterval(timer)
    })
    return {
      audio,
      playList,
      showSong,
      audioCurrentTime,
      animationShow,
      audioLang,
      showLyric,
      lyric,
      musicLyric,
      itemRefs,
      per,
      animate,
      setItemRef,
      play,
      showSongInfo,
      before,
      next,
      getLyric,
      timer,
      audiolang,
      change,
    }
  },
}

</script>
<style lang="less" scoped>
.footerMusic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.4rem;
  background-color: #f5f5f5;
  border-top: 1px solid #eee;
  padding: 0 0.2rem;
  padding-bottom: 1rem;
  margin-top: -0.2rem;
  z-index: 101; // 重点
  .play_left {
    width: 70%;
    display: flex;
    align-items: center;
    .channel {
      display: flex;
      width: 5.2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      justify-content: flex-start;
      align-items: center;
      .sp {
        color: #909191;
        margin-bottom: 0.1rem;
      }
      .songname {
        font-weight: 600;
        font-size: 0.38rem;
        text-align: center;
        margin-left: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
      }
      .singername {
        font-size: 0.32rem;
        color: #909191;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
      }
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-top: -0.1rem;
      animation: transforms 6s infinite linear;
      animation-play-state: v-bind(animationShow);
    }
  }
  .play_right {
    display: flex;
    width: 30%;
    justify-content: space-around;
    align-items: center;
    .firsticon {
      svg {
        font-size: 0.84rem;
      }
    }
    .secondicon {
      svg {
        font-size: 0.7rem;
      }
    }
  }
}
.SongBox {
  .SongBack {
    position: fixed;
    width: 100%;
    height: 100vh;
    transform: scale(200%);
    background-color: #333;
    filter: blur(60px);
    z-index: -1;
  }
  .SongBox_top {
    display: flex;
    align-items: center;
    padding: 0.4rem;
    justify-content: space-between;
    align-items: center;
    transition: 0.1s;
    height: 1.6rem;
    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      b {
        width: 4rem;
        font-weight: normal;
        color: #edeceb;
        font-size: 0.4rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 弹性伸缩盒子模型显示 */
        display: -webkit-box;
        /* 限制在一个块元素显示的文本的行数 */
        -webkit-line-clamp: 1;
        /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-box-orient: vertical;
      }
      span {
        color: #ada3aa;
        font-size: 0.32rem;
      }
    }
    .van-icon {
      color: #fff;
      font-size: 0.7rem;
    }
  }
  .SongBox_top_hidden {
    visibility: hidden;
  }
  .SongBox_Center {
    position: relative;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    .lyric {
      text-align: center;
      width: 100%;
      transition: 0.1s;
      overflow: hidden;
      p {
        color: #fff;
        margin: 0.6rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 0.42rem;
        transition: 0.1s;
      }
      .p_active {
        color: #f0e1bf;
        font-size: 0.48rem;
      }
    }
    .lyric_active {
      margin-top: 1.6rem;
      opacity: 0.8;
      height: 12.2rem;
      z-index: 1;
      transition: 0.1s;
    }
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      border: 0.1rem solid #3e3a42;
      z-index: 1;
      animation: transforms 12s infinite linear;
      animation-play-state: v-bind(animationShow);
    }
    .pulseOne {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: none;
      border: 0.1rem solid #857371;
      animation: pointe 2s ease forwards infinite;
      z-index: 0;
    }
    .pulseTwo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: none;
      border: 0.1rem solid #857371;
      animation: pointe 4s ease forwards infinite;
      z-index: 0;
    }
    .pulseThree {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: none;
      border: 0.1rem solid #857371;
      animation: pointe 6s ease forwards infinite;
      z-index: 0;
    }
    @keyframes pointe {
      0% {
        width: 6rem;
        height: 6rem;
        opacity: 1;
      }
      100% {
        width: 8rem;
        height: 8rem;
        opacity: 0;
      }
    }
  }
  .SongBox_Bottom {
    padding: 0 0.4rem;
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        color: #fff;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      width: 100%;
      span {
        font-size: 0.32rem;
        color: #cecece;
        transform: scale(0.75);
      }
    }
    .Progress {
      position: relative;
      width: 7rem;
      height: 0.02rem;
      background-color: #ffffff57;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      // opacity: 0.3;
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 8%;
      }
      .two {
        width: 7%;
        transform: rotate(180deg);
      }
      .three {
        width: 15%;
      }
      .four {
        width: 7%;
      }
      .five {
        width: 10%;
      }
    }
  }
}
@keyframes transforms {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/deep/.van-progress__pivot {
  position: absolute !important;
  border-radius: 50% !important;
  min-width: 0 !important;
  padding: 0 !important;
  width: 0.16rem !important;
  height: 0.16rem !important;
  background-color: #fff !important;
}
</style>
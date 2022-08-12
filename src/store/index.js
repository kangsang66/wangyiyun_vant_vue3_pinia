import { defineStore } from 'pinia'
// 导入唯一id名
import {name} from '@/store/store-name'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const usePlayListStore = defineStore(name.name, {
  state:() => { // state是一个箭头函数
    return {
      // 当前歌单数据
      songsList:[],
      audioLang: 0,
      playListIndex:0, // 歌曲列表下标
      isplay:true, // 是否正在播放
      songid:'',
      SongLyric:[], // 歌词
      ShowAudio:true, // 取消全局组件audio的展示
      animationShow:null, // 图片旋转动画
      currentTime:'',  // 当前歌曲播放时间
      showSearchPopup:false,  // 展示搜索结果页
      showLoginVertify:false,  // 展示手机验证页
      VertifyNumber:false,   // 手机验证码发送
      PhoneNumber:null,  // 当前手机号
      Show:true // 显示骨架屏
    }
  },
  // 修饰值 相当于computed
  getters: {
    
  },
  // 处理值 相当于methods
  actions: {
    // 更新当前歌单
    undatePlayList({al,ar,id,index}){ // 这里不应该是箭头函数
      this.al = al;
      this.ar = ar;
      this.songid = id
      this.playListIndex = index
    },
    // 将点击的歌曲传入该歌单
    pushPlayList(ele,{ al, ar, id }){
      this.al = al;
      this.ar = ar;
      this.songid = id
      this.songsList.push(ele)
      console.log('默认歌单',this.songsList);
    }
  },
})

<template>
  <div>
    <img :src="data.playlist.coverImgUrl"
         alt=""
         class="box">
    <ItemTop />
    <ItemCenter :playList="data.playlist" />
    <ItmeBottom :itemlist="data.itemlist"
                :Subscribers="data.Subscribers"
                :subscribedCount="data.subscribedCount" />
  </div>
</template>
<script>
import ItemTop from '@/components/item/ItemMusicTop.vue'
import ItemCenter from '@/components/item/ItemMusicCenter.vue'
import ItmeBottom from '@/components/item/ItemMusciList.vue'
import { RecommendSongsAPI, RecommendIdAPI, SubscribersAPI } from '@/api/index.js'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { Toast } from 'vant'
export default {
  name: 'ListMusic',
  components: { ItemTop, ItemCenter, ItmeBottom },
  setup () {
    const data = reactive({
      playlist: {},
      itemlist: [],
      Subscribers: [],
      subscribedCount: ''
    })
    onMounted(async () => {
      const id = useRoute().query.id
      // 获取歌单详情
      // 获取歌单歌曲
      try {
        let res = await RecommendSongsAPI(id)
        // console.log('当前歌单详情', res.data.songs);
        data.itemlist = res.data.songs
        console.log('123456', data.itemlist);
      } catch (error) {
        Toast('此首歌不能播放')
      }
      try {
        let Recommend = await RecommendIdAPI(id)
        // console.log('当前歌单歌曲', Recommend.data.playlist);
        data.playlist = Recommend.data.playlist
        data.subscribedCount = Recommend.data.playlist.subscribedCount
      } catch (error) {
        Toast('此首歌不能播放')
      }
      // 为了防止页面刷新,数据丢失,将数据保存到本地存储
      sessionStorage.setItem('itemdata', JSON.stringify(data.playlist))
      sessionStorage.setItem('itemlist', JSON.stringify(data.itemlist))
      // 获取歌单ID
      let SubscriberID = JSON.parse(sessionStorage.getItem("itemdata")).id
      const Subscriber = await SubscribersAPI(SubscriberID)
      data.Subscribers = Subscriber.data.subscribers
    })
    return { data }
  },
}
</script>
<style lang="less" scoped>
.box {
  position: absolute;
  width: 100%;
  height: 6.4rem;
  z-index: -999;
  filter: blur(30px);
}
</style>
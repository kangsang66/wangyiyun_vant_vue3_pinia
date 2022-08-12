<template>

  <FooterMusic v-if="showAudio" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
  </router-view>

</template>

<script>
import { usePlayListStore } from './store'
import FooterMusic from './components/item/FooterMusic.vue'
import { watch } from '@vue/runtime-core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: { FooterMusic },
  setup () {
    let router = useRouter()
    const playList = usePlayListStore()
    const showAudio = ref(true)
    const transitionName = 'slide-left'
    // 使用watch监听路由的变化,来判断是否显示全局组件
    watch(() => router.currentRoute.value.path, (newValue) => {
      if (router.currentRoute.value.path === '/Login' || router.currentRoute.value.path === '/phonelogin') {
        showAudio.value = false
        playList.ShowAudio = showAudio.value
      } else {
        showAudio.value = true
        playList.ShowAudio = showAudio.value
      }
    })
    return {
      showAudio,
      playList,
      transitionName
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: none;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
:root {
  --van-progress-inactive-color: #90887f !important;
  --van-progress-background-color: #90887f !important;
  // --van-overlay-background-color: 0 !important;
  --van-overlay-z-index: 2 !important;
  --van-skeleton-row-height:21px!important;
}
</style>

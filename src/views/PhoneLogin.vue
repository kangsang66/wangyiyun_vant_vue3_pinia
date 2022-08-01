<template>
  <div>
    <PhoneLoginTop />
    <PhoneLoginmain v-if="!data.showLoginVertify" />
    <PhoneLoginVertifcode />
  </div>
</template>

<script>
import PhoneLoginTop from '@/components/PhoneLogin/PhoneLoginTop.vue'
import PhoneLoginmain from '@/components/PhoneLogin/PhoneLoginmain.vue'
import PhoneLoginVertifcode from '@/components/PhoneLogin/PhoneLoginVertifcode.vue'
import { usePlayListStore } from '@/store'
import { reactive } from '@vue/reactivity'
export default {
  name: 'PhoneLoginPage',
  components: {
    PhoneLoginTop,
    PhoneLoginmain,
    PhoneLoginVertifcode
  },
  setup () {
    const data = reactive(usePlayListStore())
    return {
      data
    }
  }
}
</script>

<style lang="less" scoped>
</style>
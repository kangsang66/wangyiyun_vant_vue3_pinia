<template>
  <div id="box">
    <LoginTop />
    <Login />
    <LoginBottom />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { usePlayListStore } from '@/store'
import Login from '@/components/Login/Login.vue'
import LoginTop from '@/components/Login/LoginTop.vue'
import LoginBottom from '@/components/Login/LoginBottom.vue'
export default {
  name: "Logins",
  components: { Login, LoginTop, LoginBottom },
  setup () {
    onMounted(() => {
      usePlayListStore().ShowAudio = false
    })
  }

}
</script>

<style scoped>
#box {
  width: 100%;
  height: 100vmax;
  background-color: #dc2c1f;
}
</style>
<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text @click="go">Native 组件</text>
    <router-view />
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'App',
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    }
  },
  methods: {
    go() {
      router.push('Native')
    },
  },
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>

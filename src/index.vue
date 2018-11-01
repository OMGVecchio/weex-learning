<template>
  <div class="wrapper">
    <text @click="go"></text>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    }
  },
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <text @click="go">Native 组件</text>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push('/native')
    },
  },
}
</script>

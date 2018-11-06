<template>
  <text @click="go">go hello world 2</text>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push('/hello2')
    },
  },
}
</script>

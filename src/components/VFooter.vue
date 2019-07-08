<template>
  <div class="flex justify-center bg">
    <div class="flex items-center mr-2">
      <img alt="Github logo" class="mr-2" src="../assets/github.svg" />
      <a href="https://github.com/saharbit/vue-stocks-visualizer">Source code</a>
    </div>
    <div class="flex items-center ml-2">
      Made with Vue.js
      <img alt="Vue logo" class="logo ml-2" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooter'
};
</script>

<style scoped>
.bg {
  padding: 10px 0;
  background-color: #dcdcdc;
}
.logo {
  width: 14px;
  height: 14px;
}
</style>

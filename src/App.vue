<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" @click="gotoHome">
      <router-link class="goto-work" :to="{name: 'page'}">文档</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      color: '#ff0000'
    }
  },
  methods: {
    headleChangeColor() {
      console.log('颜色改变')
    },
    gotoHome() {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="less">
@import "./reset.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 100px;
  img {
    width: 50px;
  }
  .goto-work {
    text-decoration: none;
  }
}
</style>


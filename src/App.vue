<template>
  <div id="app">
    <vkheader></vkheader>
    <router-view/>
  </div>
</template>

<script>
import vkheader from './components/header'
export default {
  components: {
    vkheader
  },
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

</style>


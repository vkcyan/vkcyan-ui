<template>
  <div>
    <div class="logo">
      <img src="../assets/logo.png" alt>
      <p>一套Vue风格的UI库</p>
    </div>
    <div class="link">
      <button class="goto_page" @click="gotoPage">开始使用</button>
      <button class="goto_github" @click="gotoGithub">Github</button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    gotoPage () {
      this.$router.push('page')
    },
    gotoGithub () {
      location.href = "https://github.com/vkcyan/vkcyan-ui"
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  p {
    font-size: 32px;
    color: rgb(91, 94, 94);
    margin-top: 50px;
  }
  img {
    margin-top: 120px;
  }
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    transform: skewY(-4deg);
    top: -80px;
    width: 100%;
    height: 300px;
    box-shadow: 10px 7px 5px 0 #dfe1e6;
    transition: all 1s;
  }
  &:hover:after {
    box-shadow: 10px 7px 20px 0 #dfe1e6;
  }
  button {
    z-index: 10000;
    cursor: pointer;
    width: 180px;
    height: 50px;
    margin: 100px 20px;
    border-radius: 50px;
    outline: none;
    font-size: 18px;
  }
  .goto_page {
    color: white;
    border: 0px;
    background-image: linear-gradient(20deg, rgb(71, 80, 90) 0%, #41B883 100%);
  }
  .goto_github {
     border: 1px solid #41B883;
     background-color: white;
     color: #41B883;
  }
}
</style>

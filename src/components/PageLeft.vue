<template>
  <div class="page-left">
    <div class="base-menu">
      <p v-for="item in baseMenu" :key="item.text" @click="gotoUrl(item.url)">{{item.text}}</p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseMenu: [
        {
          text:'开发指北',
          url: 'guide'
        },
        {
          text: '安装',
          url: 'install'
        },
        {
          text: '快速开始',
          url: 'quickStart'
        },
        {
          text: '更新日志',
          url: 'updateLog'
        }
      ] 
    }
  },
  methods: {
    gotoUrl (e) {
      this.$router.push(e)
      console.log(e);
    }
  }
}
</script>

<style lang="less" scoped>
.page-left {
  transition: all 0.5s;
  position: absolute;
  left: 0;
  top: 50px;
  min-height: 720px;
  height: 90%;
  width: 260px;
  box-shadow: rgba(29, 29, 31, 0.07) 0px 5px 20px 0px;
  .base-menu {
    text-align: left;
    margin-top: 50px;
    padding-left: 40px;
    p {
      cursor: pointer;
      padding: 5px 0px;
      color: black;
      &:hover {
        color: #41b883;
      }
    }
  }
}
p:focus {
  color: #41b883;
}
</style>
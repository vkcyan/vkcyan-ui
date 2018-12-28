<template>
  <div :class="routerData == 'page' ? 'header_page header' : 'home header'">
    <img src="../assets/logo.png" @click="gotoHome">
    <router-link class="goto-work" :to="{name: 'page'}">文档</router-link>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$route.name);
  },
  data(){
    return {
      routerData: this.$route.name
    }
  },
  watch: {
    $route:function () {
      this.routerData = this.$route.name
    }
  },
  methods: {
    gotoHome() {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    transition: all 0.5s;
    width: 50px;
  }
  .goto-work {
    text-decoration: none;
  }
}
.home {
  padding: 20px 100px;
  border-bottom: 1px solid #41b883;
  transition: all 0.3s;
}
.header_page {
  padding: 10px 100px;
  border-bottom: 1px solid #41b883;
  transition: all 0.5s;
  img {
    transition: all 0.5s;
    width: 30px;
  }
}
</style>

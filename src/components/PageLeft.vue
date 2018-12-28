<template>
  <div class="page-left">
    <div class="base-menu">
      <p>开发指北</p>
      <p>介绍</p>
      <p>安装</p>
      <p>快速开始</p>
      <p>更新日志</p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {

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
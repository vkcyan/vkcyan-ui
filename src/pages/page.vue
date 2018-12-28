<template>
  <div class="page">
    <page-left></page-left>
    <buttom-md class="component"></buttom-md>
  </div>
</template>

<script>
import Buttom from '../docs/Buttom.md'
import PageLeft from '../components/PageLeft'
export default {
  components: {
    ButtomMd: Buttom,
    PageLeft
  },
}
</script>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .component {
    justify-content: center;
  }
}
</style>

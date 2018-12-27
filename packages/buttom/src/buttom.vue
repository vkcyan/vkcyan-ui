<template>
  <button
    class="vk_button"
    :disabled="disabled"
    :class="['vk_button--'+type,{'vk_plain':plain,'vk_disabled': disabled,'vk_round':round}]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vkButtom',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false // 当为true为禁用
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style>
.vk_button {
  cursor: pointer;
  padding: 12px 20px;
  margin: 0;
  line-height: 1;
  border: 1px solid #bfcbd9;
  color: #1f2d3d;
  background-color: #fff;
  text-align: center;
  display: inline-block;
  outline: 0;
  box-sizing: border-box;
  border-radius: 4px;
}
.vk_button:hover {
  opacity: 0.7;
}

.vk_button:active {
  opacity: 1;
}
.vk_round {
  border-radius: 20px;
}
.vk_button--default {
  background: #fff;
  border: 1px solid #bfcbd9;
  color: #1f2d3d;
}
.vk_button--primary {
  color: #fff;
  border: 1px solid #3faaf5;
  background-color: #3faaf5;
}
.vk_button--success {
  background: #13ce66;
  border: 1px solid #13ce66;
  color: #fff;
}
.vk_button--info {
  background: #50bfff;
  border: 1px solid #50bfff;
  color: #fff;
}
.vk_button--warning {
  background: #f7ba2a;
  border: 1px solid #f7ba2a;
  color: #fff;
}
.vk_button--danger {
  background: #ff4949;
  border: 1px solid #ff4949;
  color: #fff;
}
.vk_plain {
  background: rgba(63, 170, 245, 0.05);
  border-color: rgba(63, 170, 245, 0.8);
  color: #3faaf5;
}
.vk_plain:focus {
  background-color: #3faaf5;
  color: #fff;
  opacity: 1;
}
.vk_plain:active {
  opacity: 0.7;
}
</style>

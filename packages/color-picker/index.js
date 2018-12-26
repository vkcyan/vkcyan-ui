import colorPicker from './src/color-picker.vue'
colorPicker.install = function(Vue) {
  Vue.component(colorPicker.name, colorPicker)
}
export default colorPicker

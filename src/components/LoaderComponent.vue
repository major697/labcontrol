<template>
  <div
    class="loader"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${borderSize}px`,
      borderTopWidth: `${borderSize}px`,
    }"
  ></div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/loader.scss';
</style>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    size: {
      type: Number,
      default: 120,
    },
    borderSize: {
      type: Number,
      default: 16,
    },
  },
}
</script>

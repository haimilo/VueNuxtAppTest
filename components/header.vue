<template>
  <div id="header">
    Header by comp./header.vue + layout/default.vue
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  font-size: 18px; line-height: 60px;
  text-align: center; color: white;
  background-color: #35495E;
}
</style>
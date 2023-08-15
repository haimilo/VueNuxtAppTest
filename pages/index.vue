<template>
  <section class="container">

    <!-- <div id="main">
      <app-logo />
      <h1 class="title">
        nuxt_proj_1
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      {{ $store.state.msg1 }}<br />
      {{ $store.state.test.msg2 }}<br />
      <button @click="$store.commit('test', 'new msg')" class="links button--green">test 1</button>
    </div> -->

  </section>
</template>

<script>
import Gallery from '@/components/gallery.vue'

export default {
  components: {
    Gallery
  }
}
</script>

<style>

</style>


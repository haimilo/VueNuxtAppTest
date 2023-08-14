<template>
  <section class="container">
    
    <div id="main">
      <app-logo />
      <h1 class="title">
        nuxt_proj_1
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      {{ $store.state.msg1 }}<br />
      {{ $store.state.test.msg2 }}<br />
      <button @click="$store.commit('test', 'new msg')">test 1</button>
    </div>
    
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  layout: "my_layout",
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


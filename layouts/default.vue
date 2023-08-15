<template>
  <div>
    <Header />
    <Main>
      <Navi />
      <Gallery />
      <nuxt />
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
import Navi from "@/components/navi"
import Gallery from "@/components/gallery"
export default {
  components: {
    Header,
    Main,
    Footer,
    Navi,
    Gallery
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: rgb(65, 184, 131);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: rgb(53, 73, 94);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>


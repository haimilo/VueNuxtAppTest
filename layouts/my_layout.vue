<template>
  <div>
    <div id="header">
      <span id="title">Header of My Layout Page</span>
    </div>
    <div id="main">
      <nuxt />
    </div>
    <div id="footer">
      <span>Footer of My Layout Page</span>
    </div>
  </div>
</template>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

#main {
  padding: 50px 0;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>

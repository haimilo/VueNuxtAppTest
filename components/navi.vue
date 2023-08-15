<template>
  <div id="navi_bar">
    <a href="http://localhost:3000/">Introduction</a>
    <a href="http://localhost:3000/spec">Tech Spec</a>
    <a href="http://localhost:3000/history">History</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navi_bar {
  list-style: none;
  text-align: center;
}

#navi_bar a {
  text-decoration: none;
  display: inline-block;
  width: 150px;
  margin: 10px;
  background: white; color: green;
  border: 1px solid green;
  font-size: 20px;
  line-height: 32px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 12px;
  border-radius: 4px;
}

#navi_bar a:hover {
  background: green;
  color: white;
  border: 1px solid green;
}

#navi_bar a:active {
  background: green;
  color: white;
  border: 1px solid green;
  text-decoration: underline;
}</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.layout-main{
  padding: 0 24px 24px;
}
.layout-main .layout-content{
  background: #fff;
  padding: 20px;
  min-height: 500px;
}
.layout-main .layout-bread{
  margin: 24px 0;
}
</style>

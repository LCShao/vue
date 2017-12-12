<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  font:12px simhei,Arial,Helvetica,sans-serif;
  color:#666;
  margin:0;
  padding:0;
  background:#f5f5f5;
  width:100%;
}
p,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd,pre{
  margin:0;
  padding:0;
  list-style:none;
}
a{
  color:#666;
  text-decoration:none;
}
a:hover{
  color:#0aa1ed;
}
img{
  vertical-align:bottom;
}
.clear:after{
  content:"";
  display:block;
  clear:both;
}
.lf{float:left;}
.rt{float:right;}
</style>

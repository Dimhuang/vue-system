<template>
  <div id="app">
  <!--  <img src="./assets/logo.png">
    <Page :current="1" :total="10"></Page>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
  html,body,#app{
    height: 100%;
    overflow: hidden;
  }
li{
  list-style: none;
}
::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #bdbdbd;
}
/*滑块效果*/
::-webkit-scrollbar-thumb:hover
{
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.4);
}
/*IE滚动条颜色*/
html {
  scrollbar-face-color:#bfbfbf;/*滚动条颜色*/
  scrollbar-highlight-color:#000;
  scrollbar-3dlight-color:#000;
  scrollbar-darkshadow-color:#000;
  scrollbar-Shadow-color:#adadad;/*滑块边色*/
  scrollbar-arrow-color:rgba(0,0,0,0.4);/*箭头颜色*/
  scrollbar-track-color:#eeeeee;/*背景颜色*/
}
</style>

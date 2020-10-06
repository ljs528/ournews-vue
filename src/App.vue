<template>
  <div id="app" >
    <el-container style="background: #eeeeee;">
        <el-header class="my-header" style="height: 110px"><Header/></el-header>
        <el-main>
          <router-view/>
<!--          <MainContentPage/>-->
<!--          <MidNews/>-->
        </el-main>
        <el-footer class="my-footer"><CopyRight/></el-footer>
    </el-container>
  </div>
</template>

<script>
  import CopyRight from "./components/CopyRight"
  import Header from "./components/Header"
  import MainContentPage from "./components/MainContentPage"
  import MidNews from "./components/MidNews"
  import News from "./views/News"
  export default {
    name: 'App',
    components: {
      Header,
      CopyRight,
      MainContentPage,
      MidNews,
      News
    }
  }
</script>

<style>
  .my-header{
    padding:0px;
  }
  .my-footer{
    background-color: rgb(84, 92, 100);
  }
</style>

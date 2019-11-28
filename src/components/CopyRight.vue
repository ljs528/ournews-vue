<template>
  <el-row>
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
      <p class="vue-copyright">Copyright &copy; 2019.桂林电子科技大学网络工程李军赛</p>
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <ul class="vue-social-list">
        <li><a href="#"><i class="icon iconfont icon-facebook"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-weibo"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-weixin"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-github"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-stackoverflow"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-in"></i></a></li>
        <li><a href="#"><i class="icon iconfont icon-twitter"></i></a></li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: "CopyRight"
  }
</script>


<style scoped>
  .vue-copyright {
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    text-align: right;
    color: #ffffff;
  }
  .vue-social-list {
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .vue-social-list a{
    text-decoration:none
  }
  .vue-social-list li{
    margin-right: 10px;
    display: inline-block;
  }
  .icon {
    line-height: 20px;
    font-size: 20px;
    color: #333;
  }
</style>

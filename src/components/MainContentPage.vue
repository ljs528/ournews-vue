<template>
  <div class="content">
    <!-- top news -->
    <div class="wrap wrap_white">
      <h2 class="title__h1 underscore" style="font-size: 23px;padding-top: 10px;">{{type}}</h2>
    </div>
    <div class="wrap wrap_gray pt20">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(0,1)" :key="item.name" :data="item">
          <newframe :item="item" :height="349" :width="560" :format="'thumbnail thumbnail_big'">
            <a href="#" slot="header"  class="news__head">The dollar has broken all records of positive change in the world and in the galaxy</a>
          </newframe>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(1,3)" :key="item.name" :data="item">
              <newframe :item="item" :height="153" :width="270" :format="'thumbnail thumbnail_small'"></newframe>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(3,5)" :key="item.name" :data="item">
              <newframe :item="item" :height="153" :width="270" :format="'thumbnail thumbnail_small'"></newframe>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-for="i in Math.floor((news.length - 5)/4 +1)" :key="i">
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item,index) in news.slice(4*i+1,4*i+5)" :key="item.name" :data="item">
          <newframe :item="item" :height="153" :width="270" :format="'thumbnail thumbnail_small'"></newframe>
        </el-col>
      </el-row>
    </div>
    <div class="ajax_load" @click="addNews()">
      <i class="icon-arrows-cw"></i>Load more
      <svg width="128" height="40" viewBox="0 0 128 40" xmlns="http://www.w3.org/2000/svg">
        <rect x='0' y='0' fill='none' width='128' height='40'></rect>
      </svg>
    </div>
    <!-- /container-->
  </div>
</template>

<script>
  import newframe from "./SmallNewFrame"
  import axios from 'axios'
  export default {
    props:['id'],
    name: "MainContentPage",
    components:{
      newframe
    },
    //当路由变化的时候会执行这个方法
    watch: {
      "$route": "init"
    },
    mounted: function () {
      this.init();
    },
    methods:{
      init(){
        //这个接口是获取九条新闻(新闻随机生成)
        axios
          .get('http://localhost:8085/test/9')
          .then(res => (this.news = res.data));
        //通过id获取到当前页是什么类型的 id通过router传过来
        axios
          .get('http://localhost:8085/get/new/type/' + this.id)
          .then(res => (this.type = res.data));
      },
      addNews() {
        axios
          .get('http://localhost:8085/test/8')
          .then(res => (this.news = this.news.concat(res.data)));
      }
    },
    data(){
      return {
        type: "",
        news: [
          // {
          //   name:"",
          //   desc:"",
          //   commentCount:"",
          //   readCount:"",
          //   like:"",
          //   picture:""
          // }
        ]
      }
    }
  }
</script>

<style scoped>
  .pt20 {
    padding-top: 20px;
  }
</style>

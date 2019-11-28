<template>
  <div class="content">
    <!-- top news -->
    <div class="wrap wrap_white">
      <h2 class="title__h1 underscore" style="font-size: 23px;padding-top: 10px;">{{type}}</h2>
    </div>
    <div class="wrap wrap_gray pt20">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(0,1)" :key="item.name" :data="item">
          <newframe :item="item" :height="349" :width="560" :format="'thumbnail thumbnail_big'">
            <a href="#" slot="header"  class="news__head">The dollar has broken all records of positive change in the world and in the galaxy</a>
          </newframe>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(1,3)" :key="item.name" :data="item">
              <newframe :item="item" :height="153" :width="270" :format="'thumbnail thumbnail_small'"></newframe>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item,index) in news.slice(3,5)" :key="item.name" :data="item">
              <newframe :item="item" :height="153" :width="270" :format="'thumbnail thumbnail_small'"></newframe>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-for="i in Math.floor((news.length - 5)/4 +1)" :key="i">
        <el-col :span="6" v-for="(item,index) in news.slice(4*i+1,4*i+5)" :key="item.name" :data="item">
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
  export default {
    props:['id'],
    name: "MainContentPage",
    components:{
      newframe
    },
    watch: {
      "$route": "confirmType"
    },
    mounted: function () {
      this.confirmType();
    },
    methods:{
      confirmType(){
        switch (this.id) {
          case '1': this.type = "热点"; break;
          case '2': this.type = "科技"; break;
          case '3': this.type = "汽车"; break;
          case '4': this.type = "财经"; break;
          case '5': this.type = "国外"; break;
          case '6': this.type = "游戏"; break;
          case '7': this.type = "军事"; break;
          case '8': this.type = "搞笑"; break;
          case '9': this.type = "体育"; break;
          default: this.type="好像类型不对哦"
        }
      },

      addNews() {
        var news =[
          {
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news1.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news2.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news3.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news4.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news5.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news6.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news7.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-19 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news9.jpg')
          }
        ]
        this.news = this.news.concat(news);
      }
    },
    data(){
      return {
        type: "",
        news: [
          {
            name:"this is big new",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
              "ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur\n" +
              "adipiscing elit.nisi ut aliquip ex ea commodo consequat. nisi ut aliquip ex ea commodo consequat. ",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news1.jpg')
          },{
            name:"this is small new1",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news2.jpg')
          },{
            name:"this is small new2",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news3.jpg')
          },{
            name:"this is small new3",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news4.jpg')
          },{
            name:"this is small new4",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news5.jpg')
          },{
            name:"this is small new5",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news6.jpg')
          },{
            name:"this is small new6",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news7.jpg')
          },{
            name:"this is small new7",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news8.jpg')
          },{
            name:"this is small new8",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
              "incididunt ut labore et dolore magna aliqua.",
            created:"2019-11-22 10:51:20",
            commentCount:"29",
            readCount:"2.9k",
            like:"5.5k",
            picture:require('../assets/img/content/news9.jpg')
          }
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

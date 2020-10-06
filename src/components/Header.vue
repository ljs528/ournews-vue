<template>
  <div class="main-header">
      <el-row class="vue-header">
        <el-col  :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
          <div class="logo-box">
            <a href="index.html" class="logo"></a>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">&nbsp;</el-col>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <div class="weather">
            <div class="weather__temperature">
              <i class="el-icon-star-on"></i>
              <em >+8 C</em>
              <em class="active">+2 C</em>
              <em>+3 C</em>
            </div>
            <div class="weather__city">
              <em>London</em>
              <div class="weather__city__list">
                <ul>
                  <li class="active">
                    <a href="#">London</a>
                  </li>
                  <li>
                    <a href="#">Moscow</a>
                  </li>
                  <li>
                    <a href="#">Kiev</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
          <div class="exchange">
            <p class="exchange__name">Central Bank Rate</p>
            <p class="exchange__course">
              $<span>32.32</span>&#8364;<span>28.23</span>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row class="navigation-bar">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div>
            <div class="wrapper clearfix bigmegamenu">
                <!--Main Menu HTML Code-->
                <nav class="wsmenu slideLeft clearfix">
                  <ul class="mobile-sub wsmenu-list">
                    <li v-for="(type,index) in newtype" :key="index">
                      <span class="wsmenu-click"></span>
                      <router-link :to="'/news/' + type.id">{{type.type}}</router-link>
                    </li>
                  </ul>
                </nav>
                <!--Menu HTML Code-->
              </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Header",
    mounted:function(){
      //获取所有的新闻类型 做初始化导航条
      axios
        .get('http://localhost:8085/get/new/type')
        .then(res => (this.newtype = res.data));
    },
    methods:{
    },
    data(){
      return {
        newtype:[
          // {
          //   id:"",
          //   type:""
          // }
        ]
      }
    }
  }
</script>
<style scoped>
  .main-header{
    border-bottom: 3px solid #f38844;
  }
  .vue-header{
    background-color: rgb(84, 92, 100);
    height: 60px;
  }
  .navigation-bar{
    height: 55px;
  }
  /* 2.2. Weather */
  .weather {
    position: relative;
    padding: 12px 0 15px;
    text-align: center;
    cursor: pointer;
    z-index: 1;
  }

  .weather:hover {
    background-color: #364452;
  }

  .weather__temperature {
    padding-bottom: 3px;
  }

  .weather__temperature i {
    color: #f3b803;
  }

  .weather__temperature em {
    display: none;
    font-style: normal;
    color: #ffffff;
  }

  .weather__temperature em.active {
    display: inline;
  }

  .weather__city em {
    position: relative;
    font-style: normal;
    color: #ffffff;
    margin-right: 25px;
  }

  .weather__city em::before {
    border-left-color: #ffffff;
    border-bottom-color: #ffffff;
  }

  .weather__city__list {
    display: none;
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 2;
  }

  .weather__city__list li {
    padding: 10px;
    border-bottom: 1px solid #dcdcdc;
    -webkit-transition-property: border, background;
    transition-property: border, background;
  }

  .weather__city__list li:hover {
    background: #3b5998;
    border-bottom: 1px solid #3b5998;
  }

  .weather__city__list li:hover a {
    color: #ffffff;
  }

  .weather__city__list li.active {
    background: #3b6998;
    border-bottom: 1px solid #3b6998;
  }

  .weather__city__list li.active a {
    color: #ffffff;
  }

  .weather__city__list li a {
    -webkit-transition-property: color;
    transition-property: color;
    text-decoration: none;
    color: #303d4a;
  }

  .weather__city__list.active {
    display: block;
  }

  .weather:hover .weather__city__list {
    display: block;
  }
  /* END 2.2. Weather */

  /* 2.3. Exchange */
  .exchange {
    padding: 12px 0;
    text-align: center;
  }

  .exchange__name {
    color: #ffffff;
  }

  .exchange__course {
    color: #ffffff;
  }

  .exchange__course span {
    position: relative;
    color: #ffffff;
    margin-right: 20px;
    margin-left: 5px;
  }

  .exchange__course span:first-of-type::before {
    border-left-color: #ff0000;
    border-bottom-color: #ff0000;
  }

  .exchange__course span:last-of-type::before {
    border-left-color: #2dc100;
    border-bottom-color: #2dc100;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-top: -1px;
  }

  .exchange .icon-down-open {
    color: #c05151;
  }

  .exchange .icon-up-open {
    color: #51c066;
  }
  .wsmenu-list > li > a{
    font-size: 20px;
    color: #6b6e71;
  }
  .wsmenu-list > li{
    padding: 0px 15px;
  }
  .logo-box{
    padding-top: 15px;
    padding-left: 30px;
  }
</style>

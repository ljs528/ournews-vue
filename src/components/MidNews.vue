<template>
  <div class="wrap wrap_gray">

    <el-row :gutter="20">
      <el-col :span="19">
        <div class="projects__title">
          <h2 class="My-title block-title__h2">Special project</h2>
        </div>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="special special_big">
              <img src="http://localhost:8085/get/spec2" height="311" width="551" alt="image" class="special__img">
              <div class="special__box">
                <h5 class="special__category yel_line">Special project</h5>
                <a href="#" class="special__link">Lorem ipsum dolor sit amet</a>
                <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="special special_small">
              <img src="http://localhost:8085/get/spec2" height="311" width="285" alt="image" class="special__img">
              <div class="special__box">
                <h5 class="special__category yel_line">Special project</h5>
                <a href="#" class="special__link">Lorem ipsum dolor</a>
                <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="special special_small">
              <img src="http://localhost:8085/get/spec2" height="311" width="285" alt="image" class="special__img">
              <div class="special__box">
                <h5 class="special__category yel_line">Special project</h5>
                <a href="#" class="special__link">Lorem ipsum dolor</a>
                <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="special special_big">
              <img src="http://localhost:8085/get/spec2" height="311" width="551" alt="image" class="special__img">
              <div class="special__box">
                <h5 class="special__category yel_line">Special project</h5>
                <a href="#" class="special__link">Lorem ipsum dolor sit amet</a>
                <p class="special__desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="banner">
              <img src="http://localhost:8085/get/spec2" height="221" width="850" alt="image" class="banner__img">
              <div class="banner__box">
                <p class="banner__text first-text">Advertising</p>
                <p class="banner__text second-text">Here</p>
                <a href="#" class="banner__link">Get Now</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <div class="block-title">
          <h2 class="My-title block-title__h2">Twitter</h2>
        </div>
        <div class="twitter">
          <div class="twitter__header">
            <p class="twitter__header__name">@barclee</p>
            <p class="twitter__header__text">Hello, world</p>
          </div>
          <div class="twitter__body" v-if="messages.length > 0">
            <div class="message" v-for="(message,index) in messages" :key="index" >
              <p class="message__time">{{message.time | timeFormat}}</p>
              <p class="message__text">{{message.content}}</p>
              <a :href="message.link" class="message__link">
                <i class="el-icon-position"></i>Reply
              </a>
            </div>
          </div>
          <div class="twitter__body" v-else>
            <div class="message">
              暂时没有消息哦
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "MidNews",
        data(){
          return{
            messages:[
              {
                time:"2019-11-08 10:12:30",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link:"#"
              },{
                time:"2019-11-20 10:12:30",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link:"#"
              },{
                time:"2019-11-10 10:12:30",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link:"#"
              },{
                time:"2018-11-11 10:12:30",
                content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                link:"#"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .block-title{
    display: block;
  }
  .My-title{
    font-size: 18px;
    margin-top:20px;
    margin-bottom: 10px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  .My-title::after {
    position: absolute;
    content: '';
    bottom: -4px;
    left: 0;
    background: #f38844;
    height: 2px;
    width: 30px;
  }
  .message__link{
    color: #f38844;
    -webkit-transition-property: color;
    transition-property: color;
  }
  .twitter__header__name{
    color: #ffffff;
    font-size: 16px;
    padding-bottom: 10px;
  }
  .twitter__header__text{
    color: #ffffff;
    padding-bottom: 10px;
  }
</style>

<template>
  <!-- 抽象的新闻框-->
  <div :class="format">
      <a href="news.html" class="thumbnail__link">
        <img :src="item.picture" :height="height" :width="width" alt="News">
      </a>
      <div class="thumbnail__caption">
        <div class="news">
          <p class="news__category yellow-line">{{item.name}}</p>
          <slot name="header"></slot>
          <a href="news.html" class="news__link">
            <p class="news__text">{{item.desc}}</p>
          </a>
        </div>
        <div class="posted">
          <span>{{item.created | timeFormat}}</span>
          <ul class="posted__icon">
            <li>
                <span><i class="el-icon-chat-round"></i>{{item.commentCount}}</span>
            </li>
            <li>
                <span><i class="el-icon-view"></i>{{item.readCount}}</span>
            </li>
            <li>
                <span><i class="el-icon-thumb"></i>{{item.like}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props:["item","height","width","format"],
    name: "NewFrame"
  }
</script>

<style scoped>

</style>

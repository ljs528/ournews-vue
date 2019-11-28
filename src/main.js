import Vue from 'vue'
import App from './App'

import router from "./route"
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./style/iconfont/iconfont.css"
import "./style/main.css";
import "./style/reset.css"
import "./style/typography.css"
import "./style/webslidemenu.css"

Vue.use(ElementUI);

Vue.filter('timeFormat', function (valueTime) {
  //时间戳显示格式为几天前、几分钟前、几秒前
  if (valueTime) {
    // let newData = Date.parse(new Date() + '')
    // let diffTime = Math.abs(newData - valueTime)
    let diffTime = Math.abs(new Date().getTime() - new Date(valueTime).getTime())
    if (diffTime > 7 * 24 * 3600 * 1000) {
      let date = new Date(valueTime)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let minute = date.getMinutes()
      let second = date.getSeconds()
      console.log(second)
      minute = minute < 10 ? ('1' + minute) : minute
      second = second < 10 ? ('0' + second) : second
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周之内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
      return dayNum + '天前'
    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 60 * 1000))
      return dayNum + '小时前'
    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      let dayNum = Math.floor(diffTime / (60 * 1000))
      return dayNum + '分钟前'
    }
  }
})

new Vue({
  el: '#app',
  router,
  // 启用 ElementUI
  render: h => h(App)
})

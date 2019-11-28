import Vue from "vue"
import Router from "vue-router"

import mainContent from "../components/MainContentPage"
import midNews from "../components/MidNews"
import news from "../views/News"
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:"/mainContent/:id",
      name:"MainContentPage",
      component:mainContent,
      props:true
    },{
      path:"/midNews",
      name:"MidNews",
      component:midNews,
      props:true
    },{
      path:"/news/:id",
      name:"News",
      component:news,
      props:true
    }
  ]
})

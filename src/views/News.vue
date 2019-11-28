<template>
  <div>
    <maincontent :id="id"/>
    <midnews/>
  </div>
</template>

<script>
    import maincontent from "../components/MainContentPage"
    import midnews from "../components/MidNews"
    export default {
        props:['id'],
        name: "News",
        components:{
          maincontent,
          midnews
        }
    }
</script>

<style scoped>

</style>

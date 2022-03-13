<template>
  <div class="main-wrapper">
    <Header title="Vue-Blog" subTitle="Testaufgabe mit Vue.js and JSONPlaceholder" />
    <PostList postsPerPage="10" :actionPanel="false" pageTitle="All Posts" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'AllPPosts',
  components: {
    Header,
    PostList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
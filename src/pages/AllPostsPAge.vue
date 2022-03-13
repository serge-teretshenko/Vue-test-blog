<template>
  <div class="main-wrapper">
    <Header title="Vue-Blog"/>
    <PostList postsPerPage="5" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'MainWrapper',
  components: {
    Header,
    PostList
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
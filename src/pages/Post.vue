<template>
<div class="posts-wrapper">
    <div>
        <h3> {{ post.title }} </h3>
        <p> {{ post.body }} </p>     
        <p> {{ $route.params.id }} </p>     
    </div>
    <div class='comments' v-for="comment in comments" :key="comment.id">
        <div class="comment-item">            
            <h3> {{ comment.name }} </h3>
            <h4> {{ comment.email }} </h4>            
            <p> {{ comment.body }} </p>
            <custom-button>Upd</custom-button>
        </div>
    </div>
</div>
</template>

<script>
import CustomButton from '../shared/Button'

export default {
    name: 'PostList',
    components: {
        CustomButton
    },
    data() {
       return {
           post: {
               id: null,
               title: '',
               body: '',
               userId: 1
           },
           comments: []
       }
    },
    methods: {
        async getFullPost() {
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then((response) => response.json());
            this.post = post;  
        },
        async getComments() {
            const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`)
                .then((response) => response.json());
            this.comments = comments;
        },
        deletePost(id) {
           console.log(id)
        }
    },
    mounted() {
        this.getFullPost()
        this.getComments()
    }
}
</script>

<style scoped>
    h3 {
        font-size: 18px;
    }
    .post-item {
        padding: 5px 0;
        border-bottom: 1px solid #999;
    }
</style>

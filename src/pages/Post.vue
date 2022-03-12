<template>
<div class="posts-wrapper">
    <div>
        <h3> {{ post.title }} </h3>
        <p> {{ post.body }} </p>     
        <p> {{ $route.params.id }} </p>     
    </div>
    <div class='comments' v-for="comment in comments" :key="comment.id">
        <Comment 
            :comment="comment" 
            @edit="editComment"
            @delete="deleteComment" />
    </div>
</div>
</template>

<script>
import Comment from '@/components/Comment'

export default {
    name: 'PostList',
    components: {
        Comment
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
        editComment(id) {
           console.log('edit', id)
        },
        deleteComment(id) {
           this.comments = this.comments.filter(comment => comment.id !== id)
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

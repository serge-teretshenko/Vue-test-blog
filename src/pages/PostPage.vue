<template>
<div>
    <Header title="Vue" subTitle="skdfj" /> 
    <div class="post-wrapper">
        <div v-show="!isEditMode">
            <h3> {{ post.title }} </h3>
            <p> {{ post.body }} </p>     
        </div>
        <form v-show="isEditMode" class="edit-form">
            <h4>Title:</h4>
            <input type="text" v-model="post.title">

            <h4>Text:</h4>
            <textarea name="body" rows="4" v-model="post.body"></textarea> 
        </form>

        <div class="post-buttons">
            <custom-button
                v-show="!isEditMode"
                class="edit-button"
                @click="editPost(post.id)">
                Edit Post
            </custom-button>
            <custom-button
                v-show="isEditMode"
                class="save-button"
                @click="updatePost(post.id)">
                Save Post
            </custom-button>
        </div>

        <div class="comments-wrapper">
            <h4>Comments</h4>
            <div class='comment-wrapper' v-for="comment in comments" :key="comment.id">
                <Comment 
                    :comment="comment" 
                    @edit="editComment"
                    @delete="deleteComment" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Comment from '@/components/Comment'
import Header from '@/components/Header'
import CustomButton from '@/shared/Button'

export default {
    name: 'PostPage',
    components: {
        Comment,
        Header,
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
           comments: [],
           isEditMode: false
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
        editPost() { 
            this.isEditMode = true;
        },
        updatePost(id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
                method: 'PUT', 
                body: JSON.stringify({ 
                    userId: 1,
                    id, 
                    title: this.title, 
                    body: this.body, 
                }), 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8', 
                },
            }).then((response) => response.json());
            this.isEditMode = false;
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
        font-size: 24px;
        padding: 20px;
    }
    h4 {
        font-size: 18px;
        text-transform: uppercase;
        margin: 10px;
    }
    .post-wrapper {
        background-color: #ffffff; 
        border: 10px solid #c3c3c3; 
        padding: 10px;
    }
    .post-item {
        padding: 5px 0;
        border-bottom: 1px solid #999;
    }
    .post-buttons {
        text-align: right;
        padding: 10px 0;
    }
    .edit-form {
        display: flex;
        flex-direction: column;
    }
    .comments-wrapper {
        padding: 5px 25px;
        border-top: 3px solid #c3c3c3
    }
    .comment-wrapper {
        margin-bottom: 45px;
    }
</style>

<template>
<div class="posts-wrapper">
    <modal-box :show="isModalBoxShow" @hide="toggleModalBox">
        <PostForm @create="addPost" />    
    </modal-box>
    <custom-button @click="toggleModalBox">Create Post</custom-button>

    <select v-model="selectedSort" @change="sortPosts">
        <option value="title">Post Title</option>  
        <option value="body">Post Text</option>  
        <option value="id">Post ID</option>
    </select> 

    <input type="text" placeholder="Search" v-model="searchQuery">

    <div class='posts' v-for="post in searchList" :key="post.id">
        <div class="post-item">            
            <h3> {{ post.title }} </h3>
            <h3> {{ post.id }} </h3>
            <p> {{ post.body }} </p>

            <div class="post-buttons">
                <custom-button 
                    class="update-button"
                    @click="$router.push(`/posts/${post.id}`)">
                        Open Post
                </custom-button>
                <custom-button 
                    @click="updatePost(post.id)">
                        Update Post
                </custom-button>
                <custom-button 
                    @click="deletePost(post.id)"
                    class='delete-button'>
                        Delete Post
                </custom-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CustomButton from '@/shared/Button'
import ModalBox from '@/shared/ModalBox'
import PostForm from '@/components/PostForm.vue'

export default {
    name: 'PostList',
    components: {
        PostForm,
        CustomButton,
        ModalBox,
    },
    data() {
       return {
           posts: [],
           isModalBoxShow: false,
           post: {
               body: 'sdf',
               title: 'sdfsdfsdfsdf',
           },
           selectedSort: '',
           searchQuery: ''
       }
    },
    watch: {
        
    },
    computed: {
        sortedPosts() {
            if (this.selectedSort === 'id') {
                return [...this.posts].sort((post1, post2) => post1.id - post2.id)
            } else {
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            }
        },               
        searchList() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        }
    },
    methods: {
        async getPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((response) => response.json());
            this.posts = res;  
        },
        async addPost(post) {
           const newPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    id: this.posts[this.posts.length - 1].id + 1 ?? 1,
                    title: post.title,
                    body: post.body,
                    userId: post.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json());
            this.posts.unshift(newPost);
            this.toggleModalBox();
        },
        deletePost(id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            this.posts = this.posts.filter(post => post.id !== id)
        },
        updatePost(id) {
           const updatedPost = {
               id,
               title: this.post.title,
               body: this.post.body,
               userId: 1
           }
           this.posts.splice(id-1, 1, updatedPost);
        },
        toggleModalBox() {
            this.isModalBoxShow = !this.isModalBoxShow;
        },
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style scoped>
    h3 {
        font-size: 18px;
        text-align: left;
    }
    p{
        text-align: left;
    }
    .post-item {
        padding: 5px 0;
        border-bottom: 1px solid #999;
    }
    .post-buttons {
        text-align: right;
    }
    .custom-button {
        margin: 10px;
    }

</style>
<template>
    <form class='post-form'>
        <h3>Create new Post</h3>
        <div class="input-wrapper">
            <input v-bind:value="post.title"
                @input="post.title = $event.target.value" 
                type="text" placeholder="Title" />
            <textarea v-bind:value="post.body" 
                @input="post.body = $event.target.value" 
                type="text" placeholder="Text" cols="4" />
        </div>
    
        <custom-button @click.prevent="createPost" class='update-button'>Add Post</custom-button>
    </form>
</template>

<script>
import CustomButton from '../shared/Button'

export default {
    name: 'PostList',
    components: {
        CustomButton
    },
    props: {
        modelValue: String,
    },
    data() {
       return {
           post: {
               userId: 1,
               id: Number,
               title: '',
               body: '',
           }
       }
    },
    methods: {
       createPost() {
           this.post = {
               id: null,
               title: this.post.title,
               body: this.post.body
           }
           this.$emit('create', this.post)

           this.post = {
               userId: 1,
               id: null,
               title: '',
               body: ''
           }
       }
   }
}
</script>

<style lang="scss" scoped>
    .input-wrapper {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        padding: 15px 0 5px;

        input, textarea {
            width: 80%;
            padding: 5px 10px;
            margin: 0 auto 15px;
        }
    }
</style>
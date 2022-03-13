<template>
    <form class='post-form'>
        <div class="input-wrapper">
            <input v-bind:value="post.title"
                @input="post.title = $event.target.value" 
                type="text" placeholder="Title" />
            <textarea v-bind:value="post.body" 
                @input="post.body = $event.target.value" 
                type="text" placeholder="Text" />
        </div>
    
        <custom-button @click.prevent="createPost" class='update-button'>Create Post</custom-button>
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
        modelValue: String
    },
    data() {
       return {
           post: {
               id: null,
               body: '',
               title: '',
               userId: 1
           }
       }
    },
    methods: {
       createPost() {
           this.post = {
               id: 101,
               title: this.post.title,
               body: this.post.body
           }
           this.$emit('create', this.post)

           this.post = {
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

        input {
            max-width: 250px;
            padding: 5px 10px;
            margin: 0 auto 10px;
        }
    }
</style>
<template>
<div class="comment-wrapper">          
    <h3> {{ comment.name }} </h3>
    <h4> {{ comment.email }} </h4>            
    <p> {{ comment.body }} </p>
    <custom-button @click="editComment(comment.id)">Edit</custom-button>
    <custom-button 
        @click="deleteComment(comment.id)"
        class="delete-button">
            Delete
    </custom-button>

</div>
</template>

<script>
import CustomButton from '../shared/Button'

export default {
    name: 'PostList',
    props: {
        comment: {
            id: null,
            title: '',
            body: '',
            email: ''
        }
    },
    components: {
        CustomButton
    },
    data() {
       return {
          
       }
    },
    methods: {
        editComment(id) {
            this.$emit('edit', id)
        },
        deleteComment(id) {
           this.$emit('delete', id)
        }
    },
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

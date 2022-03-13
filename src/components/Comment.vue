<template>
<div class="comment">          
    <h3 class="comment__name"> {{ comment.name }} </h3>
    <h4 class="comment__email"> {{ comment.email }} </h4>            
    <p class="comment__body"> {{ comment.body }} </p>
    <custom-button 
        @click="deleteComment(comment.id)"
        class="delete-button">
    </custom-button>

</div>
</template>

<script>
import CustomButton from '../shared/Button'

export default {
    name: 'CommentComponent',
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
    methods: {
        deleteComment(id) {
           this.$emit('delete', id)
        }
    },
}
</script>

<style lang="scss" scoped>
    .post-item {
        padding: 5px 0;
        border-bottom: 1px solid #999;
    }
    .comment {
        text-align: left;
        position: relative;
        margin-bottom: 50px;

        &__name {
            padding: 5px;
            font-size: 14px;
            font-weight: 400;
            background: #555;
            color: #fff;
            display: inline-block;
            margin-right: 30px;
        }

        &__email {
            font-size: 12px;
            margin: 10px;
            padding: 0;
            margin: 15px 0;
            color: #a94443;
        }
    }
    .delete-button {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>

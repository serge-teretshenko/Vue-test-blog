<template>
    <div class='modal-box' v-if="show" @click="hideModalBox">
        <div @click.stop class="modal-box__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-box',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModalBox() {
            this.$emit('hide', false)
        }
    }
}
</script>

<style lang="scss" scoped>
   .modal-box {
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       position: fixed;
       background: rgba(0,0,0,0.75);
       display: flex;

       &__content {
           padding: 20px;
           width: 250px;
           height: 130px;
           background: #fff;
           margin: auto;
       }
   }
</style>
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
       background: rgba(0,0,0,0.6);

       &__content {
           padding: 20px;
           width: 400px;
           background: #fff;
       }
   }
</style>
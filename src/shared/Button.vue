<template>
    <button class='custom-button'>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
}
</script>

<style scoped>
    .custom-button {
        font-size: 14px;
        border: 1px solid #333;
        background: blueviolet;
        border-radius: 3px;
        color: #ffffff;
        padding: 5px 30px 5px 10px;
        cursor: pointer;
    }
    .delete-button {
        background: red;
        border: 1px solid red;
        background-image: url('../assets/delete-icon.svg');
        background-repeat: no-repeat;
        background-position: 100% 50%;
        background-size: contain;
    }
    .update-button {
        background: green;
        border: 1px solid green;
    }
</style>
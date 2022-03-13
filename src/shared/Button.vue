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

<style lang="scss" scoped>
    .custom-button {
        font-size: 14px;
        font-family: 'Josefin Sans', Verdana, Geneva, Tahoma, sans-serif;
        border: 1px solid #333333;
        color: #ffffff;
        padding: 10px 10px 6px;
        cursor: pointer;
    }
    .delete-button {
        width: 24px;
        height: 24px;
        background: #a94443 url('../assets/delete-icon.svg') 100% 50% no-repeat; 
        border: 1px solid #a94443; 
        background-size: contain;
        border-radius: 3px;

        &:hover {
            background-color: #8a2d2b;
        }
    }
    .create-button {
        text-transform: uppercase;
        color: #333333;
        background-color: transparent;
        height: 36px;
    }
    .edit-button {
        background-color: #0074cc;
        border: 1px solid #0074cc;
    }
    .save-button {
        background-color: #42b983; 
        border: 1px solid #42b983;
    }
</style>
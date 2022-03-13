<template>
<div class="main-header">
    <h1> {{ title }} </h1>
    <h2> {{ subTitle }} </h2>
    <div class="header-wrapper">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/posts">Posts</router-link>
    </div>
</div>
</template>

<script>

export default {
    name: 'HeaderComponent',
    components: {
        
    },
    props: {
        title: String,
        subTitle: String,
    }
}
</script>

<style lang="scss" scoped>
    .main-header {
        border-top: 5px solid #a94443;
        padding-bottom: 10px;
    }
    h1 {
        font-size: 36px;
        font-weight: 900;
        font-family: 'Roboto Slab', Verdana, sans-serif;
        text-transform: uppercase;
        margin: 20px 0 5px;
    }
    h2 {
        font-size: 16px;
        font-weight: 400;
        color: #333;
        margin-bottom: 25px;
    }
    .header-wrapper {
        display: flex;
        justify-content: center;
    }
    .nav-link {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #777;
        text-decoration: none;
        padding: 5px 15px;

        &:hover {
            text-decoration: underline;
            color: #333;
        }
    }
</style>

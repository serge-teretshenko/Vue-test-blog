<template>
<div class="main-header">
    <h1> {{ title }} </h1>
    <div class="header-wrapper">
        <nav class="nav-bar">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/posts">Posts</router-link>
        </nav>
        <div class="search-bar">
            <input type="text" value="" />
            Search
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'HeaderComponent',
    components: {
        
    },
    props: {
        title: String
    },
    methods: {
        async createPost() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json());
            this.posts = res;  
        },
    }
}
</script>

<style lang="scss" scoped>
    h2 {
        font-size: 18px;
    }
    .header-wrapper {
        display: flex;
        justify-content: space-between;
    }
    .nav-bar {

    }
    .nav-link {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #777;
        text-decoration: none;
        padding: 5px 10px;

        &:hover {
            text-decoration: underline;
            color: #333;
        }
    }
</style>

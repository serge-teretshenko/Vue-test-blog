<template>
     <h2> {{ text }} </h2>
</template>

<script>
export default {
  name: "NoPage",
  props: {
    text: String
  }
};
</script>

<style scoped>
h2 {
    font-size: 18px;
    margin: 35px 0;
}
</style>

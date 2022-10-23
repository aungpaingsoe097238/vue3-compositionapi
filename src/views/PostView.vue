<template>
  <div>
    Post View
    <ul>
      <li v-for="post in posts" :key="post.id" >
        <RouterLink :to="`posts/${post.id}`">{{ post.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref(
  [
    {
      id : 1 , name : 'post one'
    },
    {
      id : 2 , name : 'post two'
    },
    {
      id : 3 , name : 'post three'
    },
    {
      id : 4 , name : 'post four'
    },
  ]
)

</script>

<style lang="scss" scoped>

</style>
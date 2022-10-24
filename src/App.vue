<template>
  <div>

    <router-link to="/">Home</router-link>
    |
    <router-link to="/posts">Posts</router-link>
    |
    <router-link to="/models">Models</router-link>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> 

  </div>
</template>

<script setup>

</script>

<style lang="scss" >
</style>

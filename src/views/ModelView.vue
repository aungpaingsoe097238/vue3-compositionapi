<template>
  <div>
    <h1>Model</h1>
    <button @click="showModel = true">show model</button>
    <!-- Should be html -->
    <Teleport to="body"> 
      <div class="model" v-if="showModel"> 
        <h1>Model Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          provident fugit laudantium, commodi veritatis rem praesentium animi
          quaerat. Sit illum neque accusantium unde sed. Minus provident nulla
          dignissimos repellendus tenetur?
          <button @click="showModel = false">hide model</button>
        </p>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModel = ref(false);
</script>

<style scoped>
.model {
  padding: 10px;
  background-color: blueviolet;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div>
    <h1>Model</h1>
    <p>Show Dark Model</p>
    <input type="checkbox" v-model="darkModel" >
    <br>
    <button @click="showModel = true">show model</button>
    <component :is=" darkModel ? DarkModel : Model " v-if="showModel" @hideModel="showModel = false" title="Title From Props">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        incidunt assumenda in alias quas unde magni facilis, blanditiis nesciunt
        inventore dignissimos sint quod aliquam maiores cumque doloremque quam
        eum commodi.
      </p>
    </component>
    <!-- Teleport Should be Html Attribute -->
    <!-- <Teleport to="body"> 
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
    </Teleport> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Model from "../components/Model.vue";
import DarkModel from "../components/DarkModel.vue"

const showModel = ref(false);
const darkModel = ref(false);
</script>

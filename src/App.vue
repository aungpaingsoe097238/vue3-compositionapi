<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <header class="fixed-top top-0">
          <Nav></Nav>
        </header>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <RouterView />
      </b-col>
    </b-row>
  </b-container>
</template>

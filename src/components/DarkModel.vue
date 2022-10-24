<template>
    <div class="model">
      <h1> Model Title {{ props.title }} </h1>
          <slot/>
        <button @click="hideModel">hide model</button>
    </div>
  </template>
  
  <script setup>
  
  // props
  const props = defineProps({
      title : {
          type : String ,
          default : 'No Title In Props'
      }
  }) 
  
  // emit
  const emit = defineEmits(['hideModel'])
  
  const hideModel = (()=>{
      emit('hideModel')
  })
  
  console.log(props.title)
  
  </script>
  
  <style scoped>
  .model {
    padding: 10px;
    background-color: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  </style>
  
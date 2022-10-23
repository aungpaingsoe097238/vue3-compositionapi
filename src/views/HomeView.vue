<template>
  <div>
    <input type="text" autoFocus>
    <h1 ref="appTitleRef" >{{ counterData.title }}</h1>
    This is {{ oddOrEven }} number
    <button @click="plus">Plus</button>
    {{ counterData.count }}
    <button @click="mine">Mine</button>
  </div>
</template>

<script setup>
import { ref , reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated, nextTick } from 'vue'
import { autoFocus } from '../directives/autofocus.js'

// ref
const appTitleRef = ref(null)

// reactive 
const counterData = reactive({
  count : 0 , 
  title : 'The Counter'
})

// watch
watch(()=>counterData.count,(oldData,newData)=>{
  console.log(oldData,newData)
})

// methods
const plus = () => {
  counterData.count ++
}
const mine = () => {
  counterData.count --
  //nextTick
  nextTick(()=>{
    console.log('next tick from mine')
  })
}

// computed 
const oddOrEven = computed(()=>{
  if(counterData.count % 2 == 0)
  return 'This is even' 
  return 'Thsi is odd'
})

// directives
// const autoFocus = {
//   mounted(el){
//     el.focus();
//   }
// }

// Life Cycle Hooks
onBeforeMount(()=>{
  console.log('onBeforeMount')
})

onMounted(()=>{
  console.log('onMounted')
  console.log( 'This page width is ' + appTitleRef.value.offsetWidth + 'px')
})

onBeforeUnmount(()=>{
  console.log('onBeforeUnmount')
})

onUnmounted(()=>{
  console.log('onUnmounted')
})

onActivated(()=>{
  console.log('onActivated')
})

onDeactivated(()=>{
  console.log('onDeactivated')
})

onBeforeUpdate(()=>{
  console.log('onBeforUpdate')
})

onUpdated(()=>{
  console.log('onUpdated')
})

</script>

<style lang="scss" scoped>

</style>
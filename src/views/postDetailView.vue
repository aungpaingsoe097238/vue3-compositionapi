<template>
    <div>
        Post Detail View <br>
        <button @click="goHome">Home</button>
        <button @click="goToSecondPost">Go to second post</button>
    </div>
</template>

<script setup>
import { onActivated, onMounted } from '@vue/runtime-core';
import { useRoute , useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goHome = (() => {
    router.push('/');
})

const goToSecondPost = (() => {
    router.push({ name : 'postDetail' ,  params : { id : '2' } })
})

onActivated(()=>{
    alert(`Thsi params id is ${ route.params.id }`);
})

</script>

<style lang="scss" scoped>

</style>
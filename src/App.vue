<template>
   <NavbarPage/>
   <HomePage/>
</template>

<script>
import { defineComponent } from 'vue';
import NavbarPage from '@/components/NavbarPage.vue';
import HomePage from '@/components/HomePage.vue';

export default defineComponent({
    name:'App',
    components: {NavbarPage, HomePage}
  })
</script>

<style>

</style>

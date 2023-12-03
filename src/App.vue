<template>
  
  <router-view/>
  <CartPage/>
  <OrderPage/>
</template>

<script>
  import { defineComponent } from 'vue';
import CartPage from '@/components/CartPage.vue';
import OrderPage from '@/components/OrderPage.vue';

 
export default defineComponent({
    name:'App',
    components: {CartPage, OrderPage}
  })


</script>
<style>
</style>

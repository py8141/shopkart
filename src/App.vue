<template>
  <NavBar />
  <router-view></router-view>
</template>

<style>
body {
  max-width: 1500px;
  /* display: flex; */
   /* justify-content: center;
  align-items: center; */
  margin: auto; 
}
</style>
<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>
<template>
  <NavBar />
  <router-view />
  <FooterComponent />
</template>
<script>
import NavBar from "@/components/NavBar"
import FooterComponent from "@/components/FooterComponent"
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    NavBar,
    FooterComponent
  },
  setup() {

  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

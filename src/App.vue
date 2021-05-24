<template>
  <div>
    <navegador></navegador>
  </div>
</template>

<script>
import navegador from './components/principal/navegador.vue'
export default {
  name: "App",
  components: {
    navegador
  },
};
</script>

<style scoped>
.activo a{
  color: blue;
}
</style>

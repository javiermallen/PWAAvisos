<template>
  <div id="app">
    <router-view/>
    <!-- <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/Bandos">Bandos</router-link>
    </div> -->
    
  </div>
</template>

<script>


export default {
  name: 'App'  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (max-width: 575px) {
  body {
    font-size: 14px;
  }
}
</style>


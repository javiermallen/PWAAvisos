<template>
  <div class="inicio">
    <img class="img-fluid" alt="Fuentes de ebro"        src="../assets/FuentesdeEbroescudo.svg">
      <enlaces msg="Bienvenidos a la aplicación de avisos de Fuentes de Ebro"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Enlaces from '@/components/Enlaces.vue'

export default {
  name: 'inicio',
  components: {
    'enlaces': Enlaces
  }
}
</script>

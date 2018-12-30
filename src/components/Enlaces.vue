<template>
  <div class="enlaces">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 enlace enlace-bando d-flex justify-content-around">
          <img class="img-fluid" src="@/assets/bando.svg" alt="">
          <h3 class="align-items-center">Bandos</h3>
        </div>
        <div class="col-12 col-lg-8 enlace enlace-noticias d-flex justify-content-between">
          <img class="img-fluid" src="@/assets/noticias.svg" alt="">
          <h3>Noticias</h3>
        </div>
        <div class="col-12 col-lg-8 enlace enlace-incidencias d-flex justify-content-between">
          <img class="img-fluid" src="@/assets/incidencias.svg" alt="">
          <h3>Incidencias</h3>
        </div>
        <div class="col-12 col-lg-8 enlace enlace-informacion d-flex justify-content-between">
          <img class="img-fluid" src="@/assets/informacion.svg" alt="">
          <h3>Información</h3>
        </div>
        <div class="col-12 col-lg-8 enlace enlace-nosotros d-flex justify-content-between">
          <img class="img-fluid" src="@/assets/nosotros.svg" alt="">
          <h3>Nosotros</h3>
        </div>

      </div>

    </div>
    

    
  </div>
</template>

<script>
export default {
  name: 'Enlaces',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.enlace {
  height: 80px;
  background: #fafafa;
  border-radius: 4px;
}
.enlace-bando {
  border-bottom: 6px solid #ff6f52
}
.enlace-noticias {
  border-bottom: 6px solid #f14742;
}
.enlace-incidencias {
  border-bottom: 6px solid #ffdc64;
}
.enlace-informacion {
  border-bottom: 6px solid #fde57f;
}
.enlace-nosotros {
    border-bottom: 6px solid #15bdb1;
}
a {
  color: #42b983;
}
</style>

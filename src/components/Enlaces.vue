<template>    
    <div class="container">
      <div class="row">
        <div class="col-12">
         <h2 class="d-none d-md-block">{{ msg }}</h2>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-5 col-lg-4 enlace enlace-bando d-flex justify-content-between align-items-center"
              @click="irBando">
          <img class="img-fluid" src="@/assets/bando.svg" alt="">
          <h3>Bandos</h3>
        </div>
        <div class="col-5 col-lg-4 enlace enlace-noticias d-flex justify-content-between align-items-center"
              @click="irNoticias">
          <img class="img-fluid" src="@/assets/noticias.svg" alt="">
          <h3>Noticias</h3>
        </div>
      </div>     
       <div class="row justify-content-around mb-3">
        <div class="col-5 col-lg-4 enlace enlace-incidencias d-flex justify-content-between align-items-center"
              @click="irIncidencias">
          <img class="img-fluid" src="@/assets/incidencias.svg" alt="">
          <h3>Incidencias</h3>
        </div>
        <div class="col-5 col-lg-4 enlace enlace-informacion d-flex justify-content-between align-items-center"
              @click="irInformacion">
          <img class="img-fluid" src="@/assets/informacion.svg" alt="">
          <h3>Información</h3>
        </div>
      </div>
        <div class="row justify-content-around flex-column">
          <p class="text-center">PWA desarrollada por el taller de empleo "Turismo Sostenible e Innovación" de Fuentes de Ebro</p>
        <div class="imagen">
          <img src="@/assets/Logos.png" class="img-fluid" alt="Fuentes de Ebro">
        </div>

      </div>

    </div> 
    
</template>

<script>
export default {
  name: 'Enlaces',
  props: {
    msg: String
  },
  methods: {
    irBando (){
      this.$router.push('/bando')
    },
    irNoticias (){
      this.$router.push('/noticias')
    },
    irIncidencias (){
      this.$router.push('/incidencias')
    },
    irInformacion (){
      this.$router.push('/informacion')
    },
    irNosotros (){
      this.$router.push('/nosotros')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enlace {
  cursor: pointer;
  height: 70px;
  background: #fafafa;
  border-radius: 4px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(216,216,216,1);
  -moz-box-shadow: 5px 5px 5px 0px rgba(216,216,216,1);
  box-shadow: 5px 5px 5px 0px rgba(216,216,216,1);
  margin-top: 16px;
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
@media (max-width: 575px) {
  h3 {
    font-size: 1.25rem;
  }
  img {
    width: 20%;
  }
}
</style>

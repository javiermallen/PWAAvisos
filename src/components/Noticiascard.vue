<template>
    <div>
        <div class="card"
            v-for="noticia in noticias">
            <h5 class="card-header">{{ noticia.titulo }}</h5>
            <div class="card-body">
                <p class="card-text">{{ noticia.contenido }}</p>
                <a href="#" 
                    @click.prevent="borrar( noticia )"
                    class="btn btn-outline-info">Cerrar</a>
            </div>
        </div>
    </div>
</template>
<script> 
import db from '@/firebaseInit'
export default {
    data() {
        return {
            noticias: []
        }
    },    
    created() {
        db.collection( '/noticias' ).get().then( querySnapshot => {
                querySnapshot.forEach( doc => {
                    //console.log( doc.data() )
                    const datos = {
                    'titulo'   : doc.data().titulo,
                    'contenido': doc.data().contenido
                    }
                    this.noticias.push( datos )
                })
            })
    },
    methods: {
        borrar( index ){
            //console.log( index )
            this.noticias.splice(index, 1)
        }
    }
}

</script>
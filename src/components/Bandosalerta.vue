<template>
    <div>
        <div class="alerta d-flex flex-row mb-3 row align-items-center justify-content-between"
            v-for="bando in bandos"
            >
            <div class="fecha col-2 px-0">{{ bando.fecha }}</div>
            <div class="contenido col-8"> {{ bando.contenido }}</div>
            <a href="#"
                @click.prevent="borrar( bando )">
                <i class="fas fa-window-close"></i>
            </a>
        </div>
    </div>
</template>
<script> 
import db from '@/firebaseInit'
export default {
    data() {
        return {
            bandos: [],
        }
    },    
    created() {
        db.collection( '/bandos' ).get().then( querySnapshot => {
                querySnapshot.forEach( doc => {
                    //console.log( doc.data() )
                    const datos = {
                    'fecha'    : doc.data().fecha,
                    'contenido': doc.data().contenido
                    }
                    this.bandos.push( datos )
                })
            })
    },
    methods: {
        borrar( index ){
            //console.log( index )
            this.bandos.splice(index, 1)
        }
    }
}

</script>

<style scoped>
    .alerta {
        padding: 20px;
        background: #bdc3c7;
        color: white;
        border-radius: 6px;
    }
    a {
        color: white;
    }
    
</style>
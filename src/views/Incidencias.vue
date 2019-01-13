<template>
    <div class="contenedor">
        <nav-atras />
        <div class="container">
        <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Escribe aquí tu incidencia</h2>
                    <div class="form-group">
                        <label for="incidencia">Descripción</label>
                        <textarea class="form-control" id="incidencia">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navatras from '@/components/Navatras.vue'
export default {
    name: 'Incidencias',
    components: {
        'nav-atras': Navatras
    }
}
</script>

<style>
    textarea {
        min-height: 150px;
        max-height: 150px;
    }
    .contenedor {
        padding-top: 4rem;
    }
    
    
</style>
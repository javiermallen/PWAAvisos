<template>
    <div class="contenedor">
        <nav-atras />
        <div>
        <slider-informacion /> 
        </div>
    </div>
</template>

<script>
import Slinformacion from '@/components/Slinformacion.vue'
import Navatras from '@/components/Navatras.vue'

export default {
    name: 'informacion',
    components: {
        'slider-informacion': Slinformacion,
        'nav-atras': Navatras
    }
}
</script>

<<style>
    .contenedor {
        padding-top: 4rem;
    } 
</style>

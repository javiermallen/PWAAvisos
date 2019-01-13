<template>
    <div class="contenedor">
        <nav-atras />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Últimas noticias</h2>
                    <noticias-card />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Noticiascard from '@/components/Noticiascard.vue'
import Navatras from '@/components/Navatras.vue'

export default {
    name: 'Noticias',
    components: {
        'noticias-card': Noticiascard,
        'nav-atras': Navatras
    }
}
</script>

<style>
    .contenedor {
            padding-top: 4rem;
        }
</style>
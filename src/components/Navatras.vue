<template>
    <nav class="container-fluid fixed-top">
        <div class="row">  
            <router-link to="/" class="atras" tag="a"> <i class="fas fa-arrow-left"></i><span> Inicio</span>
                </router-link>
        </div>
    </nav>
</template>

<style>
    nav {
        padding: 0.75rem;
        background: #e62d2b;
        margin-bottom: 1rem;
    }
    .atras {
        color: white;
        margin-left: 3rem;
        font-size: 1.5rem;
        text-decoration: none;
        cursor: pointer;
    }
    .atras:hover {
        color: white;
        text-decoration: none;
    }


</style>
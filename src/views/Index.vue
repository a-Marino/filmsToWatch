<template>
    <div>
        <!-- CAT TITLE -->
        <router-link to='/discover/movie'>
            <div class="titulo-cat flex justify-center mt-7 space-x-3 items-center lg:w-1/4 md:w-1/2 md:mx-auto mx-5">
                <h1 class="text-5xl overflow-hidden font-black">MOVIES</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="56" viewBox="0 0 98.879 79.103">
                    <path id="Icon_material-movie" data-name="Icon material-movie" d="M82.1,6l9.888,19.776H77.159L67.272,6H57.384l9.888,19.776H52.44L42.552,6H32.664l9.888,19.776H27.72L17.832,6H12.888a9.875,9.875,0,0,0-9.838,9.888L3,75.215A9.917,9.917,0,0,0,12.888,85.1h79.1a9.917,9.917,0,0,0,9.888-9.888V6Z" transform="translate(-3 -6)" fill="#fff"/>
                </svg>
            </div>
        </router-link>
        <!-- TOP FILMS -->
        <Top/>
        <!-- Upcoming FILMS -->
        <Upcoming/>
        <!-- CAT TITLE -->
        <div class="titulo-cat flex justify-center mt-7 space-x-5 items-center lg:w-1/5 md:w-1/2 md:mx-auto mx-5">
            <h1 class="text-5xl overflow-hidden font-black">TV</h1>
            <svg id="Icon_ionic-ios-tv" data-name="Icon ionic-ios-tv" xmlns="http://www.w3.org/2000/svg" width="91.55" height="67.325" viewBox="0 0 91.55 67.325">
              <path id="Trazado_4" data-name="Trazado 4" d="M83.76,5.484H9.74A8.773,8.773,0,0,0,.984,14.24V54.994A8.773,8.773,0,0,0,9.74,63.75H83.778a8.773,8.773,0,0,0,8.756-8.756V14.24A8.8,8.8,0,0,0,83.76,5.484ZM87.22,54.975a3.462,3.462,0,0,1-3.461,3.461H9.74A3.462,3.462,0,0,1,6.28,54.975V14.24A3.462,3.462,0,0,1,9.74,10.78H83.778a3.462,3.462,0,0,1,3.461,3.461V54.975Z" transform="translate(-0.984 -5.484)" fill="#fff"/>
              <path id="Trazado_5" data-name="Trazado 5" d="M74.85,9H6.769A2.276,2.276,0,0,0,4.5,11.269v34.8a2.276,2.276,0,0,0,2.269,2.269H74.85a2.276,2.276,0,0,0,2.269-2.269v-34.8A2.276,2.276,0,0,0,74.85,9Z" transform="translate(4.956 0.456)" fill="#fff"/>
              <path id="Trazado_6" data-name="Trazado 6" d="M54.766,28.547H11.648a2.648,2.648,0,1,0,0,5.3H54.766a2.648,2.648,0,0,0,0-5.3Z" transform="translate(12.559 33.482)" fill="#fff"/>
            </svg>
        </div>
        <!-- TOP TV -->
        <TopTV/>
    </div>
</template>

<script>
import Top from '@/components/TopFilms.vue'
import Upcoming from '@/components/UpcomingFilms.vue'
import TopTV from '@/components/TopTV.vue'

export default {
    name: 'Index',
    components: {
        Top,
        Upcoming,
        TopTV,
    }
}
</script>

<style>
.poster:hover {
    filter: opacity(50%);
    z-index: 0;
}

.top {
    width: 100%;
}

img {
    border-radius: 10px;
}

.rating {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #ffc4017c;
    backdrop-filter: blur(5px);
    border-radius: 9px;
    color: black;
    padding: 5px 10px;
    float: right;
    top: 10px;
    left: 10px;
    font-weight: bold;
    z-index: 1;
}

.cuadrado {
    background-color: #2D3254;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
}

.titulo-cat {
    background-color: #2d325471;
    padding: 15px;
    border-radius: 5px;
}

.titulo-cat:hover {
    background-color: #fff;
}

.titulo-cat:hover h1 {
    color: #2D3254;
}

.titulo-cat:hover path {
    fill: #2D3254;
}

.btn-more {
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 10px;
    transition: .2s ease-out;
}

.btn-more:hover {
    border: 2px solid #2D3254;
    padding: 10px;
    border-radius: 10px;
}
</style>
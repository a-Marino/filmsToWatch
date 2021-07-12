<template>
    <div>
        <!-- CAT TITLE -->
        <div class="titulo-cat flex justify-center mt-7 space-x-3 items-center lg:w-1/4 md:w-1/2 md:mx-auto mx-5">
            <h1 class="text-5xl overflow-hidden font-black">MOVIES</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="56" viewBox="0 0 98.879 79.103">
              <path id="Icon_material-movie" data-name="Icon material-movie" d="M82.1,6l9.888,19.776H77.159L67.272,6H57.384l9.888,19.776H52.44L42.552,6H32.664l9.888,19.776H27.72L17.832,6H12.888a9.875,9.875,0,0,0-9.838,9.888L3,75.215A9.917,9.917,0,0,0,12.888,85.1h79.1a9.917,9.917,0,0,0,9.888-9.888V6Z" transform="translate(-3 -6)" fill="#fff"/>
            </svg>
        </div>
        <!-- TOP FILMS -->
        <Top/>
        <!-- Upcoming FILMS -->
        <Upcoming/>
    </div>
</template>

<script>
import Top from '@/components/TopFilms.vue'
import Upcoming from '@/components/UpcomingFilms.vue'

export default {
    name: 'Index',
    components: {
        Top,
        Upcoming,
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
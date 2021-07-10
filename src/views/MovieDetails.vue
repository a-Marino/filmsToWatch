<template>
    <div>
        <!-- Title and back -->
        <div class="flex pt-10 pl-10 justify-between items-center">
            <div class="flex">
                <div class='cuadrado'></div>
                <h1 class="text-5xl font-black overflow-hidden mr-2">{{movieDetail.title}}</h1>
                <h1 class="text-4xl overflow-hidden self-end date">({{movieDetail.release_date.slice(0,4)}})</h1>
            </div>
            <router-link to="/"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 57 57">
                    <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M59.051,47.721h0L41.759,30.428,59.05,13.136h0a1.785,1.785,0,0,0,0-2.519L50.882,2.448a1.786,1.786,0,0,0-2.519,0h0L31.071,19.741,13.779,2.448h0a1.786,1.786,0,0,0-2.518,0L3.091,10.617a1.785,1.785,0,0,0,0,2.518h0L20.383,30.428,3.091,47.72h0a1.785,1.785,0,0,0,0,2.518l8.169,8.168a1.785,1.785,0,0,0,2.519,0h0L31.071,41.116,48.363,58.408h0a1.785,1.785,0,0,0,2.518,0l8.168-8.169a1.785,1.785,0,0,0,0-2.518Z" transform="translate(-2.571 -1.928)" fill="#707070"/>
                </svg>
            </router-link>
        </div>
        <!-- MAIN CONTENT -->
        <div class="flex flex-row pl-10 mt-5">
            <!-- POSTER -->
            <div class="flex flex-col">
                <img :src="'https://image.tmdb.org/t/p/w300/'+movieDetail.poster_path" alt="poster">
                <div class="flex flex-row space-x-2">
                    <div v-for="(genre, Index) in movieDetail.genres" :key="Index">
                       <p class="genres">{{genre.name}}, </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import env from '@/env.js';

export default {
    name: 'MovieDetails',
    data () {
        return {
            movieDetail: '',
        }
    },
    mounted() {
        const MovieID = this.$route.params.id;

        this.axios
        .get(`https://api.themoviedb.org/3/movie/${MovieID}?api_key=${env.apiKey}&language=en-US`)
        .then(res => (
            console.log(res.data),
            this.movieDetail = res.data 
        ));
    }
}
</script>

<style scoped>
path:hover {
    fill: #fff;
}

.date {
    color: #707070;
}

.genres {
    color: #707070;
    font-weight: 600;
    cursor: default;
}

img {
    border-radius: 5px;
}
</style>
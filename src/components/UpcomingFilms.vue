<template>
    <div class="px-10 pt-16 flex flex-col top justify-center pb-10" v-if="upcomingMovies">
        <div class="flex flex-row">
            <div class='cuadrado'></div>
            <h1 class="categorie text-3xl font-black overflow-hidden relative">Upcoming 📅</h1>
        </div>
        <div class="flex lg:flex-row flex-col lg:space-y-0 space-y-7 items-center">
            <div v-for="(movie, Index) in upcomingMovies.slice(0, 5)" :key="Index">
                <router-link :to="'/movie/'+movie.id">
                    <div class="relative px-3">
                        <div class="rating space-x-3">
                            <h2 class="text-sm">{{movie.vote_average}}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11.682 10.847">
                            <path id="Icon_ionic-ios-star" data-name="Icon ionic-ios-star" d="M13.488,7.13H9.653L8.487,3.651a.422.422,0,0,0-.793,0L6.529,7.13H2.667a.418.418,0,0,0-.417.417.307.307,0,0,0,.008.07.4.4,0,0,0,.175.295l3.152,2.222-1.21,3.518a.418.418,0,0,0,.143.469.4.4,0,0,0,.235.1.511.511,0,0,0,.261-.094l3.077-2.193,3.077,2.193a.489.489,0,0,0,.261.094.375.375,0,0,0,.232-.1.413.413,0,0,0,.143-.469l-1.21-3.518L13.72,7.891l.076-.065a.4.4,0,0,0-.308-.7Z" transform="translate(-2.25 -3.375)"/>
                            </svg>
                        </div>
                        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="poster" class="poster">
                    </div>
                    <div class="flex justify-between p-3">
                        <div>
                            <h2 class="text-sm font-semibold truncate">{{movie.title}}</h2>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import env from '@/env.js'

export default {
    name: 'Upcoming',
    data() {
        return {
            upcomingMovies: '',
        }
    },
    mounted() {
        this.axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${env.apiKey}&language=en-US&page=1`)
        .then(res => (
            console.log(res.data.results),
            this.upcomingMovies = res.data.results
        ));
    }
}
</script>
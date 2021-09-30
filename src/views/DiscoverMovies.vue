<template>
    <div class="flex lg:flex-row lg:space-x-2 p-2">
        <div class="grid lg:grid-cols-4 grid-cols-2 lg:w-3/4">
            <div v-for="(movie, Index) in movies" :key="Index">
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
                            <h2 class="font-semibold truncate md:text-sm text-lg">{{movie.title}}</h2>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="lg:flex flex-col hidden p-5 generos w-1/4 h-1/2">
            <h1 class="text-3xl font-black overflow-hidden">GENEROS</h1>
            <!-- foreach generos -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiscoverMovies',
    data() {
        return {
            movies: '',
        }
    },
    mounted() {
        // GET DISCOVER MOVIES
        this.axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(res => (
            console.log(res.data.results),
            this.movies = res.data.results
        ))
    }
}
</script>

<style scoped>
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

    .generos {
        background-color: #2d325471;
        border-radius: 15px;
    }
</style>
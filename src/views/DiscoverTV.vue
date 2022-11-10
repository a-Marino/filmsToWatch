<template>
    <div class="flex flex-col">
        <div class="flex lg:flex-row lg:space-x-2 p-2">
            <div class="grid lg:grid-cols-4 grid-cols-2 lg:w-3/4">
                <div v-for="(tvShow, Index) in tvShows" :key="Index">
                    <router-link :to="'/tv/'+tvShow.id">
                        <div class="relative px-3">
                            <div class="rating space-x-3">
                                <h2 class="text-sm">{{tvShow.vote_average}}</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11.682 10.847">
                                <path id="Icon_ionic-ios-star" data-name="Icon ionic-ios-star" d="M13.488,7.13H9.653L8.487,3.651a.422.422,0,0,0-.793,0L6.529,7.13H2.667a.418.418,0,0,0-.417.417.307.307,0,0,0,.008.07.4.4,0,0,0,.175.295l3.152,2.222-1.21,3.518a.418.418,0,0,0,.143.469.4.4,0,0,0,.235.1.511.511,0,0,0,.261-.094l3.077-2.193,3.077,2.193a.489.489,0,0,0,.261.094.375.375,0,0,0,.232-.1.413.413,0,0,0,.143-.469l-1.21-3.518L13.72,7.891l.076-.065a.4.4,0,0,0-.308-.7Z" transform="translate(-2.25 -3.375)"/>
                                </svg>
                            </div>
                            <img :src="'https://image.tmdb.org/t/p/w500/'+tvShow.poster_path" alt="poster" @error="$event.target.src='http://via.placeholder.com/1080x1580'" class="poster">
                        </div>
                        <div class="flex justify-between p-3">
                            <div>
                                <h2 class="font-semibold truncate md:text-sm text-lg">{{tvShow.name}}</h2>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="lg:flex flex-col hidden p-5 divGeneros w-1/4 h-1/2 space-y-3">
                <h1 class="text-3xl font-black overflow-hidden cursor-default">GENEROS</h1>
                <div v-for="(genre, Index) in genres" :key="Index">
                    <p @click="changeGenre(genre.id)" class="generos font-semibold text-lg" :class="{'highlight' : (genre.id === selectedGenreId)}">{{genre.name}}</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-5">
            <!-- Previous Button -->
            <button @click="previousPage()" class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
              Previous
            </button>
            <!-- Next Button -->
            <button @click="nextPage()" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiscoverTV',
    data() {
        return {
            tvShows: [],
            genres: [],
            selectedGenreId: '',
            page: 1,
            lastPage: 1,
        }
    },
    methods: {
        changeGenre(id) {
            this.selectedGenreId = id;
            this.page = 1;
            this.getTvShows()
        },

        nextPage() {
            if (this.page <= this.lastPage) {
                this.page++;
                window.scrollTo(0, 0);
                this.getTvShows();
            }
        },

        previousPage() {
            if (this.page > 1) {
                this.page--;
                window.scrollTo(0, 0);
                this.getTvShows();
            }
        },

        async getTvShows() {
            await this.axios
            .get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=${this.page}&timezone=America%2FNew_York&with_genres=${this.selectedGenreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            .then(res => (
                console.log(res.data),
                this.tvShows = res.data.results,
                this.lastPage = res.data.total_pages
            ));
        },

        async getGenres() {
            await this.axios
            .get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.VUE_APP_APIKEY}&language=en-US`)
            .then(res => (
                //console.log(res.data.genres),
                this.genres = res.data.genres
            ));  
        }
    },
    mounted() {
        // GET DISCOVER MOVIES
        this.getTvShows();

        // GET GENERES
        this.getGenres();
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

    .divGeneros {
        background-color: #2d325471;
        border-radius: 15px;
    }
    
    .generos {
        color: #fff;
        cursor: pointer;
    }

    .generos:hover {
        color: #707070;
    }

    .highlight {
            color: #ffc4017c;
    }
</style>
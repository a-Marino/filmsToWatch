<template>
    <div v-if="TVDetail && TVImages" class="mb-5">
        <!-- Title and back -->
        <div class="flex pt-5 px-10 justify-between items-center">
            <div class="flex lg:flex-row flex-col">
                <div class='cuadrado'></div>
                <h1 class="text-5xl font-black overflow-hidden mr-2 py-2">{{TVDetail.name}}</h1>
                <h1 class="text-4xl overflow-hidden lg:self-end gris py-2">({{TVDetail.first_air_date.slice(0,4)}})</h1>
            </div>
            <router-link to="/" class="md:block hidden pr-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 57 57">
                    <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M59.051,47.721h0L41.759,30.428,59.05,13.136h0a1.785,1.785,0,0,0,0-2.519L50.882,2.448a1.786,1.786,0,0,0-2.519,0h0L31.071,19.741,13.779,2.448h0a1.786,1.786,0,0,0-2.518,0L3.091,10.617a1.785,1.785,0,0,0,0,2.518h0L20.383,30.428,3.091,47.72h0a1.785,1.785,0,0,0,0,2.518l8.169,8.168a1.785,1.785,0,0,0,2.519,0h0L31.071,41.116,48.363,58.408h0a1.785,1.785,0,0,0,2.518,0l8.168-8.169a1.785,1.785,0,0,0,0-2.518Z" transform="translate(-2.571 -1.928)" fill="#707070"/>
                </svg>
            </router-link>
        </div>
        <!-- MAIN CONTENT -->
        <div class="flex lg:flex-row flex-col lg:pl-10 items-center mt-5">
            <!-- POSTER / LEFT SIDE CONTENT  -->
            <div class="flex flex-col lg:w-1/4 lg:items-start md:items-center">
                <div class="relative pr-3 overflow-hidden">
                    <img :src="'https://image.tmdb.org/t/p/w300'+TVDetail.poster_path" @error="$event.target.src='http://via.placeholder.com/1080x1580'" alt="poster">
                    <div class="Rating space-x-3 lg:left-2 lg:bottom-2 left-2 bottom-4">
                        <h2 class="text-sm">{{TVDetail.vote_average}}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11.682 10.847">
                        <path id="Icon_ionic-ios-star" data-name="Icon ionic-ios-star" d="M13.488,7.13H9.653L8.487,3.651a.422.422,0,0,0-.793,0L6.529,7.13H2.667a.418.418,0,0,0-.417.417.307.307,0,0,0,.008.07.4.4,0,0,0,.175.295l3.152,2.222-1.21,3.518a.418.418,0,0,0,.143.469.4.4,0,0,0,.235.1.511.511,0,0,0,.261-.094l3.077-2.193,3.077,2.193a.489.489,0,0,0,.261.094.375.375,0,0,0,.232-.1.413.413,0,0,0,.143-.469l-1.21-3.518L13.72,7.891l.076-.065a.4.4,0,0,0-.308-.7Z" transform="translate(-2.25 -3.375)"/>
                        </svg>
                    </div>
                </div>
                <div class="flex flex-row space-x-2">
                    <div v-for="(genre, Index) in TVDetail.genres.slice(0,2)" :key="Index">
                        <p class="gris">{{genre.name}}<span v-if="Index != Object.keys(TVDetail.genres.slice(0,2)).length - 1">, </span></p>
                    </div>
                    <span class="dot"></span>
                    <p class="gris">{{TVDetail.episode_run_time[0]}}m</p>
                </div>
            </div>
            <!-- RIGHT SIDE CONTENT -->
            <div class="flex flex-col w-full space-y-10">
                <div class="flex lg:flex-row flex-col justify-around p-2">
                    <!-- OVERVIEW -->
                    <div class="lg:w-4/5 flex flex-col justify-center lg:p-0 p-5">
                        <div class="overview p-5">
                            <h2 class="text-4xl overflow-hidden font-bold">Overview</h2>
                            <p class="gris text-justify break-words pr-5 pt-1">{{TVDetail.overview}}</p>
                            <div class="flex flex-row mt-4">
                                <div class="flex flex-col" v-if="TVDetail.created_by.length">
                                    <p class='font-bold text-xl'>{{TVDetail.created_by[0].name}}</p>
                                    <p class="gris text-md">Created by</p>
                                </div>
                                <div class="flex flex-col mx-auto">
                                    <p class="font-bold text-xl">{{TVDetail.number_of_seasons}}</p>
                                    <p class="gris text-md">Seasons</p>
                                </div>
                                <div class="flex flex-col mx-auto">
                                    <p class="font-bold text-xl">{{TVDetail.number_of_episodes}}</p>
                                    <p class="gris text-md">Episodes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Companie -->
                    <div class='flex justify-center items-center'>
                        <div class="flex flex-col justify-center items-center space-y-3" v-for="(company, Index) in TVDetail.production_companies.slice(0, 1)" :key="Index">
                            <p class="text-2xl font-semibold text-center">{{company.name}}</p>
                            <img v-if="company.logo_path" :src="'https://image.tmdb.org/t/p/w500'+company.logo_path" alt="Company Logo" class="w-32 bg-gray-100 p-2">
                            <p class="gris">Production companie</p>
                        </div>
                    </div>
                </div>
                <!-- MORE IMAGES -->
                <div class="flex md:flex-row flex-col more-images items-center md:space-x-4 md:justify-around md:mx-5 mx-10 md:p-3 py-5 md:space-y-0 space-y-4" v-if="TVImages.backdrops.length">
                    <div v-for="(image, Index) in TVImages.backdrops.slice(0,4)" :key="Index">
                        <a :href="'https://image.tmdb.org/t/p/w1280'+image.file_path" target="blank">
                            <img :src="'https://image.tmdb.org/t/p/w1280/'+image.file_path" alt="Backdrop" class="w-56 backdrops">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-10 mt-10 flex flex-col">
            <h2 class="text-3xl font-black overflow-hidden mr-2 py-2">Similar Shows</h2>
            <div class="flex flex-col md:flex-row md:space-x-5 md:justify-center md:space-y-0 space-y-5 items-center mt-5 similar-shows p-3">
                <div v-for="(similarShow, Index) in similarShows.slice(0,5)" :key="Index">
                    <a :href="'/tv/'+similarShow.id">
                        <img :src="'https://image.tmdb.org/t/p/w1280/'+similarShow.poster_path" class="w-56 backdrops">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieDetails',
    data () {
        return {
            TVDetail: '',
            TVImages: '',
            similarShows: '',
            tvId: this.$route.params.id,
        }
    },
    methods: {
        async getTvDetails() {
            await this.axios
            .get(`https://api.themoviedb.org/3/tv/${this.tvId}?api_key=${process.env.VUE_APP_APIKEY}&language=en-US`)
            .then(res => (
                this.TVDetail = res.data
                //console.log(this.TVDetail)
            )).catch(err => {
                console.log(err)
            });
        },

        async getTvImages() {
            await this.axios
            .get(`https://api.themoviedb.org/3/tv/${this.tvId}/images?api_key=${process.env.VUE_APP_APIKEY}`)
            .then(res => (
                // console.log(res.data),
                this.TVImages = res.data
            ));
        },

        async getSimilarTvShows() {
            await this.axios
            .get(`https://api.themoviedb.org/3/tv/${this.tvId}/similar?api_key=${process.env.VUE_APP_APIKEY}&language=en-US&page=1`)
            .then(res => (
                this.similarShows = res.data.results
            ));
        }
    },
    mounted() {
        this.getTvDetails();

        this.getTvImages();

        this.getSimilarTvShows();
    }
}
</script>

<style scoped>
.backdrops:hover {
    filter: opacity(50%);
}

.more-images {
    background-color: #6773bf2c;
    backdrop-filter: blur(5px);
    border-radius: 10px;
}

.dot {
    height: 10px;
    width: 10px;
    background-color: #707070;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
}

path:hover {
    fill: #fff;
}

.gris {
    color: #707070;
    font-weight: 600;
    cursor: default;
}

img {
    border-radius: 5px;
}

.Rating {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #ffc4017c;
    backdrop-filter: blur(5px);
    border-radius: 9px;
    color: black;
    padding: 5px 10px;
    float: right;
    font-weight: bold;
}

.overview {
    background-color: #6773bf2c;
    backdrop-filter: blur(5px);
    border-radius: 10px;
}

.similar-shows {
    background-color: #6773bf2c;
    backdrop-filter: blur(5px);
    border-radius: 10px;
}
</style>
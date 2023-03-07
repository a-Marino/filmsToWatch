<template>
    <div>
        <!-- NAME -->
        <div class="flex pt-5 px-10 justify-between items-center">
            <div class="flex lg:flex-row flex-col">
                <div class='cuadrado'></div>
                <h1 class="text-5xl font-black overflow-hidden mr-2 py-2">{{actorDetails.name}}</h1>
                <h1 class="text-4xl overflow-hidden lg:self-end gris py-2">{{actorDetails.birthday}}</h1>
            </div>
            <router-link to="/" class="md:block hidden pr-2"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 57 57">
                    <path id="Icon_metro-cross" data-name="Icon metro-cross" d="M59.051,47.721h0L41.759,30.428,59.05,13.136h0a1.785,1.785,0,0,0,0-2.519L50.882,2.448a1.786,1.786,0,0,0-2.519,0h0L31.071,19.741,13.779,2.448h0a1.786,1.786,0,0,0-2.518,0L3.091,10.617a1.785,1.785,0,0,0,0,2.518h0L20.383,30.428,3.091,47.72h0a1.785,1.785,0,0,0,0,2.518l8.169,8.168a1.785,1.785,0,0,0,2.519,0h0L31.071,41.116,48.363,58.408h0a1.785,1.785,0,0,0,2.518,0l8.168-8.169a1.785,1.785,0,0,0,0-2.518Z" transform="translate(-2.571 -1.928)" fill="#707070"/>
                </svg>
            </router-link>
        </div>
        <!-- MAIN -->
        <div class="flex lg:flex-row flex-col lg:pl-10 items-center mt-5">
            <div class="flex flex-col lg:w-1/4 lg:items-start md:items-center">
                <div class="relative pr-3 overflow-hidden">
                    <img :src="'https://image.tmdb.org/t/p/w300'+actorDetails.profile_path" @error="$event.target.src='http://via.placeholder.com/1080x1580'" alt="poster">
                </div>
            </div>
            <div class="flex flex-col w-full space-y-10">
                    <div class="flex lg:flex-row flex-col justify-around p-2">
                        <!-- OVERVIEW -->
                        <div class="lg:w-4/5 flex flex-col justify-center lg:p-0 p-5">
                            <div class="biography p-5">
                                <h2 class="text-4xl overflow-hidden font-bold">Biography</h2>
                                <p class="gris text-justify break-words pr-5 pt-1">{{actorDetails.biography}}</p>
                            </div>
                        </div>             
                    </div>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActorDetails',
    data () {
        return {
            actorDetails: ''
        }
    },
    mounted() {
        const actorID = this.$route.params.id;

        this.axios
        .get(`https://api.themoviedb.org/3/person/${actorID}?api_key=${process.env.VUE_APP_APIKEY}&language=en-US`)
        .then(res => (
            this.actorDetails = res.data,
            console.log(res.data)
        ));
    }
}
</script>

<style scoped>
    .cuadrado {
        background-color: #2D3254;
        padding: 5px;
        margin-right: 10px;
        border-radius: 5px;
    }

    path:hover {
        fill: #fff;
    }

    img {
        border-radius: 5px;
    }

    .biography {
        background-color: #6773bf2c;
        backdrop-filter: blur(5px);
        border-radius: 10px;
    }

    .gris {
        color: #707070;
        font-weight: 600;
        cursor: default;
    }
</style>
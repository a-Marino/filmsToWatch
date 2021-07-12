<template>
    <div class="nav flex items-center md:p-10 pt-2 px-2 md:h-12 h-auto min-w-full justify-between">
        <router-link to="/">
            <img src="@/assets/filmsToWatch.png" alt="filmsToWatch" class="logo">
        </router-link>
        <div class="flex relative">
            <input type="text" class="search" placeholder="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 28.995 29" class="absolute right-4 top-2">
              <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M28.6,25.072l-5.647-5.647a1.358,1.358,0,0,0-.963-.4h-.923a11.775,11.775,0,1,0-2.039,2.039v.923a1.358,1.358,0,0,0,.4.963L25.072,28.6a1.354,1.354,0,0,0,1.92,0L28.6,27a1.366,1.366,0,0,0,.006-1.926ZM11.78,19.029a7.249,7.249,0,1,1,7.249-7.249A7.245,7.245,0,0,1,11.78,19.029Z" fill="#707070"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style scoped>
.nav {
    background-color: #2D32541A;
    overflow-y: hidden;
}

.logo {
    height: 50px;
    width: auto;
}

.search {
    background-color: transparent;
    outline: none;
    border: 2px solid #2D3254;
    border-radius: 45px;
    padding: 5px 20px;
}

.search::placeholder {
    color: #707070;
    font-weight: 600;
}
</style>
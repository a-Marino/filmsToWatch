<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue' 

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

body {
  height: 100%;
  width: 100%;
  background-color: #1B1E32;
  color: #fff;
  font-family: 'Nunito Sans', sans-serif;
}

.router-link-exact-active {
    text-decoration: underline;
}
</style>

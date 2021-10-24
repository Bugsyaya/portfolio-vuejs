<template>
  <div id="app">
    <Navigation id="navigation"/>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  color: #37474f;
}
#app {
  font-family: Montserrat;
  font-weight: 500;
  display: flex;
}
h1 {
  font-weight: 700 !important;
  color: #004ba0 !important;
}
#container {
  padding: 20px;
  max-height: 100vh;
  overflow: auto;
}
#navigation {
  /* position: fixed; */
}
</style>

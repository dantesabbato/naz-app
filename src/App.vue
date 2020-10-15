<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "./components/footer"
  export default {
    components: { Footer }
  }
</script>

<style lang="sass">
  html, body, #app
    height: 100%
  #app
    font-family: "Cedra4F"
    display: grid !important
    grid-template-rows: 1fr auto
  #footer
    grid-row-start: 2
    grid-row-end: 3
</style>

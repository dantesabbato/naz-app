<template>
  <div id='app'>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/footer'
  export default {
    components: { Footer },
    data: () => ({
    })
  }
</script>

<style lang='sass'>
  @font-face
    font-family: "Cedra4F"
    src: url('assets/fonts/cedra4f_wide.ttf') format('truetype')
  @font-face
    font-family: "Cedra4FLight"
    src: url('assets/fonts/cedra4f_wide_ultralight.ttf') format('truetype')
  @font-face
    font-family: "OmniumTagline"
    src: url('assets/fonts/omnium_tagline.otf') format('opentype')

  html, body, #app
    height: 100%
  #app
    font-family: 'Cedra4F'
    display: grid !important
    grid-template-rows: 1fr auto
  #footer
    grid-row-start: 2
    grid-row-end: 3

</style>
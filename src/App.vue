<template>
  <div id='app'>
    <router-view :contacts='contacts'/>
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
    font-family: "PipoRegular"
    src: url('assets/fonts/pipo_regular.ttf') format('truetype')
  @font-face
    font-family: "PipoLight"
    src: url('assets/fonts/pipo_light.ttf') format('truetype')
  @font-face
    font-family: "Cedra4F"
    src: url('assets/fonts/cedra4f_wide.ttf') format('truetype')
  @font-face
    font-family: "Cedra4FLight"
    src: url('assets/fonts/cedra4f_wide_ultralight.ttf') format('truetype')

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
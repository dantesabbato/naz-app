<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
  export default {
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

  #app
    font-family: 'Cedra4F'
</style>
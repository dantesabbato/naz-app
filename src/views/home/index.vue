<template>
  <div id='home'>
    <banner>NAZ</banner>
    <subbanner>model management</subbanner>
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from "../../components/navbar/index"
  export default {
    name: 'home',
    components: { Navbar }
  }
</script>

<style lang="sass">
  #home
    display: flex
    flex-direction: column
    align-items: center
    banner
      font-family: 'OmniumTagline'
      font-size: 25em
      line-height: 70%
      margin-top: 10%
    subbanner
      font-size: 6em
</style>

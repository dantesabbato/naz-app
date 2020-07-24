<template>
  <div id='default'>
    <div id='logo' align='center' v-on:click='gotoHome'>NAZ</div>
    <Navbar/>
    <div id='content'>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '../../components/navbar'
  export default {
    name: 'default',
    components: { Navbar },
    methods: {
      gotoHome () {
        window.location.href = '/'
      }
    }
  }
</script>

<style lang='sass'>
  #logo
    font-family: 'OmniumTagline'
    font-size: 6rem
    height: 95px
    cursor: pointer
  #content
    padding-top: 3%
</style>
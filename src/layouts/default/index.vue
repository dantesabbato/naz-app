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

<style lang="sass">@import "style"</style>

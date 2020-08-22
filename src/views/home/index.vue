<template>
  <div id="home" class="fade-in">
    <logo>NAZ</logo>
    <sublogo>model management</sublogo>
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from "../../components/navbar/index"
  export default {
    name: "home",
    components: { Navbar }
  }
</script>

<style lang="sass">@import "style"</style>

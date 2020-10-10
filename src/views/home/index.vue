<template>
  <div id="home" class="fade-in">
    <div class="logo">NAZ</div>
    <div class="sublogo">model management</div>
    <b-navbar>
      <Nav/>
    </b-navbar>
  </div>
</template>

<script>
  import Nav from "../../components/navbar/nav"
  export default {
    name: "home",
    components: { Nav }
  }
</script>

<style lang="sass">@import "style"</style>

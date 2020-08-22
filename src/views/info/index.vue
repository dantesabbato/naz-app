<template>
  <div id="info" class="fade-in">
    <b-container>
      <p>{{ $store.getters["info/INFO_EN"] }}</p>
      <p>{{ $store.getters["info/INFO_RU"] }}</p>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "info",
    created () { this.$store.dispatch("info/getInfo") }
  }
</script>

<style lang="sass">@import "style"</style>

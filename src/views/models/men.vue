<template>
  <div id="men" class="models">
    <CardGroup :models="$store.getters['models/MEN']"/>
  </div>
</template>

<script>
  import CardGroup from "./card-group"
  export default {
    name: "men",
    components: { CardGroup },
    created () { this.$store.dispatch("models/getModels") }
  }
</script>

<style lang="sass">@import "style"</style>

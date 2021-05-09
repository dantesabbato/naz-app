<template>
  <div id="women" class="models">
    <CardGroup :models="$store.getters['models/WOMEN']"/>
  </div>
</template>

<script>
  import CardGroup from "./card-group"
  export default {
    name: "women",
    components: { CardGroup },
    created () { this.$store.dispatch("models/getModels") }
  }
</script>

<style lang="sass"> @import "style" </style>

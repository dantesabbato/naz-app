<template>
  <div id='info'>
    <b-container>
      <p>{{ $store.getters.INFO_EN }}</p>
      <p>{{ $store.getters.INFO_RU }}</p>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'info'
  }
</script>

<style lang="sass">@import "style"</style>


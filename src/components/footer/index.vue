<template>
  <div id='footer'>
    <b-container>
      <hr>
      <b-nav align='center'>
        <b-nav-item><v-icon name='brands/facebook-f'/></b-nav-item>
        <b-nav-item><v-icon name='brands/vk'/></b-nav-item>
        <b-nav-item><v-icon name='brands/instagram'/></b-nav-item>
      </b-nav>
      <div id='copyright' align='center'>
        <div>© NAZ model management 2020 / Created by MaxKagami</div>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang='sass'>
  #footer
    //padding-bottom: 1%
    .nav
      &-link
        color: black
    #copyright
      padding: 1%
</style>

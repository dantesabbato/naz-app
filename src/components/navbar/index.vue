<template>
  <b-navbar>
    <b-navbar-nav align='center'>
      <b-nav-item to='/women'>Women</b-nav-item>
      <b-nav-item to='/men'>Men</b-nav-item>
      <b-nav-item to='/become_naz'>Become NAZ</b-nav-item>
      <b-nav-item to='/info'>Info</b-nav-item>
      <b-nav-item to='/contacts'>Contacts</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style lang='sass'>
  .navbar
    font-family: 'Cedra4F'
    font-size: 2rem
    ul
      width: 100%
      li
        padding: 0 12px
        a:hover
          text-decoration: underline
</style>
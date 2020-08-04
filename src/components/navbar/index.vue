<template>
  <b-navbar toggleable='lg'>
    <b-navbar-toggle target='nav-collapse'>
      <template v-slot:default='{ expanded }'>
        <v-icon v-if='expanded' name='times' scale="1" class="white"/>
        <div v-else>
          menu
          <v-icon name='bars' scale="1" class="black"/>
        </div>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav align='center'>
        <b-nav-item to='/women'>Women</b-nav-item>
        <b-nav-item to='/men'>Men</b-nav-item>
        <b-nav-item to='/become_naz'>Become NAZ</b-nav-item>
        <b-nav-item to='/info'>Info</b-nav-item>
        <b-nav-item to='/contacts'>Contacts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style lang="sass">@import "style"</style>

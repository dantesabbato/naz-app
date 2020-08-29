<template>
  <div id='default'>
    <div id='logo' align='center' v-on:click='gotoHome'>NAZ</div>

    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse">
        <template v-slot:default="{ expanded }">
          <v-icon v-if="expanded" name="times" scale="2" class="white"/>
          <v-icon v-else name="bars" scale="2" class="black"/>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="center">
          <b-nav-item to="/women">Women</b-nav-item>
          <b-nav-item to="/men">Men</b-nav-item>
          <b-nav-item to="/become_naz">Become NAZ</b-nav-item>
          <b-nav-item to="/info">Info</b-nav-item>
          <b-nav-item to="/contacts">Contacts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div id='content'>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '../../components/navbar'
  export default {
    name: 'default',
    methods: {
      gotoHome () {
        window.location.href = '/'
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

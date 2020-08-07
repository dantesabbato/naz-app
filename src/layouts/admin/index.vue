<template>
  <div id='admin'>
    <b-navbar type='dark' variant='dark' fixed="top">
      <b-navbar-nav>
        <b-nav-item to='/admin'>Анкеты</b-nav-item>
        <b-nav-item to='/admin/models'>Модели</b-nav-item>
        <b-nav-item to='#'>Корзина</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav align='right'>
        <b-nav-item to="/">На сайт</b-nav-item>
        <b-nav-item @click='logout'><v-icon name='sign-out-alt' scale='1.5'/></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>


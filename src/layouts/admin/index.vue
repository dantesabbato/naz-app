<template>
  <div id="admin">
    <b-navbar class="navbar" toggleable="md">
      <b-navbar-toggle target="_blank" @click="$router.go(-1)" class="back-phone">
        <b-icon icon="chevron-left" font-scale="1.2" class="white"/>
      </b-navbar-toggle>
      <b-navbar-toggle target="nav-collapse">
        <b-icon icon="list" class="white" font-scale="1.5"/>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="center">
          <b-nav-item to="/admin">Анкеты</b-nav-item>
          <b-nav-item to="/admin/models">Модели</b-nav-item>
          <b-nav-item to="/admin/content">Контент</b-nav-item>
          <b-nav-item to="/admin/archive">Архив</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-nav class="nav-extra">
        <b-nav-item to="/"><b-icon icon="chevron-bar-up" class="white" font-scale="1.7"/></b-nav-item>
        <b-nav-item @click="logout"><b-icon icon="power" class="white" font-scale="1.4"/></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view class="content"/>
  </div>
</template>

<script>
  export default {
    name: "Admin",
    methods: {
      logout() {
        this.$store.dispatch("logout")
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>


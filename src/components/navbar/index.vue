<template>
  <b-navbar id="navbar" toggleable="md">
    <b-navbar-toggle target="_blank" @click="$router.go(-1)" class="back-phone">
      <b-icon icon="chevron-left" font-scale="1.2" class="white"/>
    </b-navbar-toggle>
    <b-navbar-toggle target="nav-collapse">
<!--      <template #default="{ expanded }">-->
<!--        <v-icon v-if="expanded" name="times" scale="2" class="white"/>-->
<!--        <v-icon v-else name="bars" scale="2" class="black"/>-->
<!--      </template>-->
      <b-icon icon="list" class="white" font-scale="1.5"/>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <Nav/>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import Nav from "./nav"
  export default {
    name: "navbar",
    components: { Nav }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

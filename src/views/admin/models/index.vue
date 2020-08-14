<template>
  <div id="admin_models" class="mt-5">
    <Modal/>
    <b-button id="new-model">Новая модель</b-button>
    <b-container>
      <b-tabs pills>
        <b-tab title="Women">
          <card-group :models="$store.getters.WOMEN"/>
        </b-tab>
        <b-tab title="Men">
          <card-group :models="$store.getters.MEN"/>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
  import Modal from "./edit"
  import CardGroup from "./index-card-group"
  export default {
    name: 'admin_models',
    components: { Modal, CardGroup }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

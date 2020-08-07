<template>
  <div id="admin_models">
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
  import Modal from "./show"
  import CardGroup from "./index-card-group"
  export default {
    name: 'admin_models',
    components: { Modal, CardGroup }
  }
</script>

<style lang="sass">@import "style"</style>

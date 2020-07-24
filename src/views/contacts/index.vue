<template>
  <div id='contacts' class='text-center'>
      <b-row>
        <b-col>
          <div class='bold'>Contact us:</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg>
          <div class='bold'>To become a model</div>
          <div>{{ $store.getters.CONTACTS_EMAIL }}</div>
        </b-col>

        <b-col lg>
          <div class='bold'>CEO</div>
          <div>{{ $store.getters.CONTACTS_CEO_EMAIL }}</div>
        </b-col>

        <b-col lg>
          <div class='bold'>Head booker</div>
          <div>{{ $store.getters.CONTACTS_BOOKER_EMAIL }}</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class='bold'>Tel:</div>
          <div>{{ $store.getters.CONTACTS_PHONE }}</div>
        </b-col>
      </b-row>
  </div>
</template>

<script>
  export default {
    name: 'contacts'
  }
</script>

<style lang="sass">
  @import 'styles'
</style>

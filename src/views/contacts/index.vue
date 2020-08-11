<template>
  <div id='contacts' class='text-center'>
      <b-row>
        <b-col>
          <div class='font-weight-bold text-uppercase'>Contact us:</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg>
          <div class='font-weight-bold'>To become a model</div>
          <a :href="'mailto:' + $store.getters.CONTACTS_EMAIL">{{ $store.getters.CONTACTS_EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class='font-weight-bold'>CEO</div>
          <a :href="'mailto:' + $store.getters.CONTACTS_CEO_EMAIL">{{ $store.getters.CONTACTS_CEO_EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class='font-weight-bold'>Head booker</div>
          <a :href="'mailto:' + $store.getters.CONTACTS_BOOKER_EMAIL">{{ $store.getters.CONTACTS_BOOKER_EMAIL }}</a>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class='font-weight-bold'>Tel:</div>
          <a :href="'tel:' + $store.getters.CONTACTS_PHONE">{{ $store.getters.CONTACTS_PHONE }}</a>
        </b-col>
      </b-row>
  </div>
</template>

<script> export default { name: 'contacts' } </script>

<style lang="sass">@import "style"</style>


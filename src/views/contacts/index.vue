<template>
  <div id="contacts" class="text-center fade-in">
      <b-row>
        <b-col>
          <div class="font-weight-bold text-uppercase">Contact us:</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg>
          <div class="font-weight-bold">To become a model</div>
          <a :href="'mailto:' + EMAIL">{{ EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class="font-weight-bold">CEO</div>
          <a :href="'mailto:' + CEO_EMAIL">{{ CEO_EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class="font-weight-bold">Head booker</div>
          <a :href="'mailto:' + BOOKER_EMAIL">{{ BOOKER_EMAIL }}</a>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col lg="4">
          <div class="font-weight-bold">Tel:</div>
          <a :href="'tel:' + PHONE">{{ PHONE }}</a>
        </b-col>

        <b-col lg="4">
          <div class="font-weight-bold">Booker's tel:</div>
          <a :href="'tel:' + BOOKER_PHONE">{{ BOOKER_PHONE }}</a>
        </b-col>
      </b-row>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  export default {
    name: "contacts",
    computed: mapGetters("contacts", [ "EMAIL", "PHONE", "CEO_EMAIL", "BOOKER_EMAIL", "BOOKER_PHONE" ]),
    created () { this.$store.dispatch("contacts/getContacts") }
  }
</script>

<style lang="sass">@import "style"</style>


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
          <a :href="'mailto:' + CONTACTS_EMAIL">{{ CONTACTS_EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class="font-weight-bold">CEO</div>
          <a :href="'mailto:' + CONTACTS_CEO_EMAIL">{{ CONTACTS_CEO_EMAIL }}</a>
        </b-col>

        <b-col lg>
          <div class="font-weight-bold">Head booker</div>
          <a :href="'mailto:' + CONTACTS_BOOKER_EMAIL">{{ CONTACTS_BOOKER_EMAIL }}</a>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="font-weight-bold">Tel:</div>
          <a :href="'tel:' + CONTACTS_PHONE">{{ CONTACTS_PHONE }}</a>
        </b-col>
      </b-row>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  export default {
    name: "contacts",
    computed: mapGetters("contacts", [
      "CONTACTS_EMAIL", "CONTACTS_CEO_EMAIL", "CONTACTS_BOOKER_EMAIL", "CONTACTS_PHONE"
    ]),
    created () { this.$store.dispatch("contacts/getContacts") }
  }
</script>

<style lang="sass">@import "style"</style>


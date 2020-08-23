<template>
  <div id="admin-content">
    <b-container>
      <b-form id="contacts" @submit.prevent ="updateContent">

        <h2>
          Контент
          <b-button type="submit" variant="outline-dark" size="sm" class="ml-2 font-weight-bold" squared>
            Обновить
          </b-button>
        </h2>

        <b-row>
          <b-form-group label="Основной email" class="col"><b-form-input v-model="contacts.email"/></b-form-group>
          <b-form-group label="Email CEO" class="col"><b-form-input v-model="contacts.ceo_email"/></b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Email главного букера" class="col"><b-form-input v-model="contacts.booker_email"/></b-form-group>
          <b-form-group label="Телефон" class="col"><b-form-input v-model="contacts.phone"/></b-form-group>
        </b-row>

        <b-row>
          <b-col><b-form-textarea v-model="info.info_en"/></b-col>
          <b-col><b-form-textarea v-model="info.info_ru"/></b-col>
        </b-row>

        <b-row>
          <b-col><b-form-textarea v-model="become.become_en"/></b-col>
          <b-col><b-form-textarea v-model="become.become_ru"/></b-col>
        </b-row>

      </b-form>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "admin-content",
    computed: mapState({
      contacts: state => state.contacts.contacts,
      info: state => state.info.info,
      become: state => state.become.become
    }),
    created () {
      this.$store.dispatch("contacts/getContacts")
      this.$store.dispatch("info/getInfo")
      this.$store.dispatch("become/getBecome")
    },
    methods: {
      async updateContent() {
        await this.$store.dispatch("updateContent", {
          contacts: this.contacts, info: this.info, become: this.become
        })
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

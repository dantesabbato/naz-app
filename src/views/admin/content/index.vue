<template>
  <div id="admin-content">
    <b-container>

      <h1>Котактные данные</h1><b-button>Обновить</b-button>
      <b-form-group label="Основной email">
        <b-form-input v-model="contacts.email"/>
      </b-form-group>
      <b-form-group label="Email CEO">
        <b-form-input v-model="contacts.ceo_email"/>
      </b-form-group>
      <b-form-group label="Email главного букера">
        <b-form-input v-model="contacts.booker_email"/>
      </b-form-group>
      <b-form-group label="Телефон">
        <b-form-input v-model="contacts.phone"/>
      </b-form-group>

      <h1>О нас</h1><b-button>Обновить</b-button>
      <b-form-textarea v-model="info.info_en"/>
      <b-form-textarea v-model="info.info_ru"/>

      <h1>Форма</h1><b-button>Обновить</b-button>
      <b-form-textarea v-model="become.become_en"/>
      <b-form-textarea v-model="become.become_ru"/>

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
    })
  }
</script>

<style lang="sass">@import "style"</style>

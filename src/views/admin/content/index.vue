<template>
  <div id="admin-content">
    <b-container>

      <b-form id="contacts" @submit.prevent ="updateContent('contacts', contacts)">
        <h2>
          Котактные данные
          <b-button type="submit" variant="outline-dark" size="sm" class="ml-2 font-weight-bold" squared>
            Обновить
          </b-button>
        </h2>
        <b-row>
          <b-form-group label="Основной email" class="col">
            <b-form-input v-model="contacts.email"/>
          </b-form-group>
          <b-form-group label="Email CEO" class="col">
            <b-form-input v-model="contacts.ceo_email"/>
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group label="Email главного букера" class="col">
            <b-form-input v-model="contacts.booker_email"/>
          </b-form-group>
          <b-form-group label="Телефон" class="col">
            <b-form-input v-model="contacts.phone"/>
          </b-form-group>
        </b-row>
      </b-form>

      <b-form id="info" @submit="updateContent('info', info)">
        <h2>
          О нас
          <b-button  type="submit" variant="outline-dark" size="sm" class="ml-2 font-weight-bold" squared>
           Обновить
          </b-button>
        </h2>
        <b-form-textarea v-model="info.info_en"/>
        <b-form-textarea v-model="info.info_ru"/>
      </b-form>

      <b-form id="become" @submit="updateContent('become', become)">
        <h2>
          Форма
          <b-button type="submit" variant="outline-dark" size="sm" class="ml-2 font-weight-bold" squared>
            Обновить
          </b-button>
        </h2>
        <b-form-textarea v-model="become.become_en"/>
        <b-form-textarea v-model="become.become_ru"/>
      </b-form>

    </b-container>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import { contentCollection } from "@/firebase"
  export default {
    name: "admin-content",
    computed: mapState({
      contacts: state => state.contacts.contacts,
      info: state => state.info.info,
      become: state => state.become.become
    }),
    methods: {
      async updateContent(id, obj) {
        await contentCollection.doc(id).update(obj)
        location.reload()
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

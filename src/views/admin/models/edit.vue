<template>
  <b-modal id="model_edit" size="xl" hide-footer hide-header>
    <b-row>
      <b-col md="auto">
        <div class="photo" v-for="photo in selectedModel.photos" :key="photo">
          <img :src="photo">
          <b-button-group class="menu" vertical>
            <b-button variant="outline-danger" squared @click="removePhoto(photo)">Удалить</b-button>
            <b-button variant="outline-dark" squared>Установить как превью</b-button>
          </b-button-group>
        </div>
      </b-col>
      <b-col align-self="center">
        <label>Дата добавления</label><div>{{ selectedModel.created_at }}</div>
        <b-form @submit.prevent="updateModel">

          <b-form-group label="Имя" label-for="name" label-cols-sm="2">
            <b-form-input id="name" v-model="selectedModel.name"/>
          </b-form-group>

          <b-form-group label="Фамилия" label-for="surname" label-cols-sm="2">
            <b-form-input id="surname" v-model="selectedModel.surname"/>
          </b-form-group>

          <b-form-group label="Email" label-for="email" label-cols-sm="2">
            <b-form-input id="email" v-model="selectedModel.email"/>
          </b-form-group>

          <b-form-group label="Телефон" label-for="phone" label-cols-sm="2">
            <b-form-input id="phone" v-model="selectedModel.phone"/>
          </b-form-group>

          <b-form-group label="Instagram" label-for="instagram" label-cols-sm="2">
            <b-form-input id="instagram" v-model="selectedModel.instagram"/>
          </b-form-group>

          <b-form-group label="Дата рождения" label-for="birthdate" label-cols-sm="2">
            <b-form-datepicker id="birthdate" v-model="selectedModel.birthdate"/>
          </b-form-group>

          <b-form-group label="Рост" label-for="height" label-cols-sm="2">
            <b-form-input id="height" v-model="selectedModel.height"/>
          </b-form-group>

          <b-form-group label="Талия" label-for="waist" label-cols-sm="2">
            <b-form-input id="waist" v-model="selectedModel.waist"/>
          </b-form-group>

          <b-form-group label="Грудь" label-for="bust" label-cols-sm="2">
            <b-form-input id="bust" v-model="selectedModel.bust"/>
          </b-form-group>

          <b-form-group label="Бёдра" label-for="hips" label-cols-sm="2">
            <b-form-input id="hips" v-model="selectedModel.hips"/>
          </b-form-group>

          <b-form-group label="О себе" label-for="about" label-cols-sm="2">
            <b-form-textarea id="about" v-model="selectedModel.about"/>
          </b-form-group>

          <b-form-group label="Пол" label-cols-sm="2">
            <b-form-radio-group v-model="selectedModel.gender" buttons button-variant="outline-dark" :options="gender_radios"/>
          </b-form-group>

          <b-form-group label="Волосы" label-for="hair" label-cols-sm="2">
            <b-form-input id="hair" v-model="selectedModel.hair"/>
          </b-form-group>

          <b-form-group label="Глаза" label-for="eyes" label-cols-sm="2">
            <b-form-input id="eyes" v-model="selectedModel.eyes"/>
          </b-form-group>

          <b-button type="submit" variant="outline-dark" size="sm" class="ml-2 font-weight-bold" squared>
            Обновить
          </b-button>
          <b-button @click="removeModel" variant="outline-danger" size="sm" class="ml-2 font-weight-bold" squared>
            Удалить
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "admin_modal",
    data: () => ({
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ]
    }),
    computed: mapState(["selectedModel"]),
    methods: {
      hideModal () {
        this.$bvModal.hide("model_edit")
      },
      async updateModel() {
        await this.$store.dispatch("models/updateModel", this.selectedModel)
        this.hideModal()
      },
      async removeModel() {
        await this.$store.dispatch("models/removeModel", this.selectedModel.id)
        this.hideModal()
      },
      async removePhoto(photo) {
        await this.$store.dispatch("models/removePhoto", { id: this.selectedModel.id, photo: photo } )
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

<template>
  <b-modal id="model_form_modal" class="squared" size="xl" hide-header>
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
      <b-form-radio-group buttons button-variant="outline-dark" :options="gander_radios"/>
    </b-form-group>

    <b-form-group label="Волосы" label-for="hair" label-cols-sm="2">
      <b-form-input id="hair" v-model="hair"/>
    </b-form-group>

    <b-form-group label="Глаза" label-for="eyes" label-cols-sm="2">
      <b-form-input id="eyes" v-model="eyes"/>
    </b-form-group>

    <b-form-file v-model="photo" plain/>

    <template v-slot:modal-footer="{ removeModalForm, createModal }">
      <b-button @click="removeModalForm()" variant="outline-danger" size="sm" squared>Удалить</b-button>
      <b-button @click="createModal()" variant="outline-dark" size="sm" squared>ОК</b-button>
    </template>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  import { modelsCollection, modelFormsCollection } from "@/firebase"
  export default {
    data: () => ({
      gender: null,
      hair: "",
      eyes: "",
      photo: null,
      preview_path: "",
      gander_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ]
    }),
    computed: mapState(["selectedModel"]),
    methods: {
      createModal(evt) {
        evt.preventDefault()
        modelsCollection.add({
          name: this.selectedModel.name,
          surname: this.selectedModel.surname,
          birthdate: this.selectedModel.birthdate,
          gender: this.gender,
          phone: this.selectedModel.phone,
          email: this.selectedModel.email,
          instagram: this.selectedModel.email,
          height: this.selectedModel.height,
          waist: this.selectedModel.waist,
          bust: this.selectedModel.bust,
          hips: this.selectedModel.hips,
          hair: this.hair,
          eyes: this.eyes,
          about: this.selectedModel.about,
          preview_path: "",
          created_at: new Date.now()
        })
      },
      removeModalForm(evt) {
        evt.preventDefault()
        modelFormsCollection.doc(this.selectedModel.id).delete()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

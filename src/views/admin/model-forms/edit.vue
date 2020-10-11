<template>
  <b-modal id="model_form_modal" class="squared" size="xl" hide-header hide-footer>
    <b-form @submit.prevent="createModel" @reset.prevent="removeForm(selectedModel.id)">

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
        <b-form-radio-group v-model="selectedModel.gender"
                            buttons button-variant="outline-dark"
                            :options="gender_radios"/>
      </b-form-group>

      <b-form-group label="Волосы" label-for="hair" label-cols-sm="2">
        <b-form-input id="hair" v-model="selectedModel.hair"/>
      </b-form-group>

      <b-form-group label="Глаза" label-for="eyes" label-cols-sm="2">
        <b-form-input id="eyes" v-model="selectedModel.eyes"/>
      </b-form-group>

      <vue-dropzone
          ref="imgDropZone"
          id="customdropzone"
          :options="dropzoneOptions"
          @vdropzone-complete="afterComplete"
      />

      <b-button type="reset" variant="outline-danger" size="sm" squared>Удалить</b-button>
      <b-button type="submit" variant="outline-dark" size="sm" squared>ОК</b-button>

    </b-form>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  import vue2Dropzone from "vue2-dropzone"
  import "vue2-dropzone/dist/vue2Dropzone.min.css"
  let uuid = require("uuid")
  export default {
    data: () => ({
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `
          <p class='text-default'><i class='fa fa-cloud-upload mr-2'></i>Нажмите или перетащите фото</p>
          <p class="form-text">Допустимые форматы: .jpg, .jpeg, .png</p>
        `
      }
    }),
    components: { vueDropzone: vue2Dropzone },
    computed: mapState(["selectedModel"]),
    methods: {
      hideModal () {
        this.$bvModal.hide("model_form_modal")
      },
      afterComplete(upload) {
        this.isLoading = true
        this.selectedModel.image_name = uuid.v1()
        this.selectedModel.file = upload
        //this.$refs.imgDropZone.removeFile(upload)
      },
      async createModel() {
        await this.$store.dispatch("models/createModel", this.selectedModel)
        await this.removeForm(this.selectedModel.id)
      },
      async removeForm(id) {
        await this.$store.dispatch("forms/removeForm", id)
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

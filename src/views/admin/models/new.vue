<template>
  <b-modal id="model_new" size="xl" hide-footer hide-header>
    <vue-dropzone
        ref="PhotosDropZone"
        id="photos_dropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="photosComplete"
    />
    <b-form @submit.prevent="createModel">
      <b-form-input v-model="model.name" placeholder="Имя" autocomplete="off"/>
      <b-form-input v-model="model.surname" placeholder="Фамилия" autocomplete="off"/>
      <b-form-input v-model="model.email" placeholder="Email"/>
      <b-form-input v-model="model.phone" placeholder="Телефон"/>
      <b-form-input v-model="model.instagram" placeholder="Instagram"/>
      <b-form-datepicker v-model="model.birthdate" placeholder="Дата рождения"/>
      <b-form-input v-model="model.height" placeholder="Рост"/>
      <b-form-input v-model="model.waist" placeholder="Талия"/>
      <b-form-input v-model="model.bust" placeholder="Грудь"/>
      <b-form-input v-model="model.hips" placeholder="Бёдра"/>
      <b-form-radio-group v-model="model.gender" buttons button-variant="outline-dark" :options="gender_radios"/>
      <b-form-input v-model="model.hair" placeholder="Волосы"/>
      <b-form-input v-model="model.eyes" placeholder="Глаза"/>
      <b-form-textarea v-model="model.about" placeholder="Дополнительное инфо"/>
      <b-button type="submit" class="btn-submit" size="sm">Создать</b-button>
      <b-button class="btn-cancel" @click="hideModal">Отмена</b-button>
    </b-form>
  </b-modal>
</template>

<script>
  import vue2Dropzone from "vue2-dropzone"
  import "vue2-dropzone/dist/vue2Dropzone.min.css"
  let uuid = require("uuid")
  export default {
    data: () => ({
      model: {
        name: "", surname: "", birthdate: "", gender: null, phone: "", email: "", instagram: "",
        height: "", waist: "", bust: "", hips: "", hair: "", eyes: "", about: "", photos: []
      },
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 545,
        thumbnailHeight: 600,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `
          <p class='text-default'><i class='fa fa-cloud-upload mr-2'></i>Нажмите или перетащите фото</p>
          <p class="form-text">Допустимые форматы: .jpg, .jpeg, .png</p>
        `
      }
    }),
    components: { vueDropzone: vue2Dropzone },
    methods: {
      hideModal () { this.$bvModal.hide("model_new") },
      photosComplete(upload) {
        this.isLoading = true
        let fileName = uuid.v1()
        this.model.photos.push({ file: upload, file_name: fileName })
      },
      async createModel() {
        this.$store.state.models.model = this.model
        await this.$store.dispatch("models/createModel")
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

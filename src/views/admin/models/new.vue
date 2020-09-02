<template>
  <b-modal id="model_new" size="sm" hide-footer hide-header>
    <b-form @submit.prevent="createModel">
      <b-form-input v-model="model.name" placeholder="Имя"/>
      <b-form-input v-model="model.surname" placeholder="Фамилия"/>
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
      <vue-dropzone
          ref="PreviewDropZone"
          id="preview_dropzone"
          :options="dropzoneOptions"
          @vdropzone-complete="previewComplete"
      />
      <vue-dropzone
        ref="PhotosDropZone"
        id="photos_dropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="photosComplete"
      />
      <b-button type="submit" variant="outline-dark" size="sm">Создать</b-button>
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
        height: "", waist: "", bust: "", hips: "", hair: "", eyes: "", about: "",
        photos: [], preview: null, previewName: ""
      },
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
    methods: {
      hideModal () {
        this.$bvModal.hide("model_new")
      },
      previewComplete(upload) {
        this.isLoading = true
        this.model.previewName = uuid.v1()
        this.model.preview = upload
        //this.$refs.imgDropZone.removeFile(upload)
      },
      photosComplete(upload) {
        this.isLoading = true
        let fileName = uuid.v1()
        this.model.photos.push({file: upload, file_name: fileName })
      },
      async createModel() {
        await this.$store.dispatch("models/createModel", this.model)
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

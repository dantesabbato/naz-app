<template>
  <b-modal id="model_new" size="sm" hide-footer hide-header>
    <b-form @submit.prevent="createModel">
      <b-form-input v-model="name" placeholder="Имя"/>
      <b-form-input v-model="surname" placeholder="Фамилия"/>
      <b-form-input v-model="email" placeholder="Email"/>
      <b-form-input v-model="phone" placeholder="Телефон"/>
      <b-form-input v-model="instagram" placeholder="Instagram"/>
      <b-form-datepicker v-model="birthdate" placeholder="Дата рождения"/>
      <b-form-input v-model="height" placeholder="Рост"/>
      <b-form-input v-model="waist" placeholder="Талия"/>
      <b-form-input v-model="bust" placeholder="Грудь"/>
      <b-form-input v-model="hips" placeholder="Бёдра"/>
      <b-form-radio-group v-model="gender" buttons button-variant="outline-dark" :options="gender_radios"/>
      <b-form-input v-model="hair" placeholder="Волосы"/>
      <b-form-input v-model="eyes" placeholder="Глаза"/>
      <b-form-textarea v-model="about" placeholder="Дополнительное инфо"/>
      <vue-dropzone
        ref="imgDropZone"
        id="customdropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="afterComplete"
      />
      <b-button type="submit" variant="outline-dark" size="sm">Создать</b-button>
    </b-form>
  </b-modal>
</template>

<script>
  import { storage, modelsCollection } from "@/firebase"
  import * as firebase from "firebase/app"
  import vue2Dropzone from "vue2-dropzone"
  import "vue2-dropzone/dist/vue2Dropzone.min.css"
  let uuid = require("uuid")
  export default {
    data: () => ({
      name: "", surname: "", birthdate: "", gender: null, phone: "", email: "", instagram: "", height: "",
      waist: "", bust: "", hips: "", hair: "", eyes: "", about: "", preview_path: "",
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      file: null, metadata: "", imageName: "",
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
      afterComplete(upload) {
        this.isLoading = true
        this.imageName = uuid.v1()
        this.file = upload
        this.metadata = { contentType: "image/png" }
        //this.$refs.imgDropZone.removeFile(upload)
      },
      async createModel() {
        let imageRef = storage.ref().child(this.imageName)
        await imageRef.put(this.file, this.metadata)
        this.preview_path = await imageRef.getDownloadURL()
        await modelsCollection.add({
          name: this.name, surname: this.surname, birthdate: this.birthdate, gender: this.gender, phone: this.phone,
          email: this.email, instagram: this.email, height: this.height, waist: this.waist, bust: this.bust,
          hips: this.hips, hair: this.hair, eyes: this.eyes, about: this.about,
          created_at: firebase.firestore.Timestamp.fromDate(new Date()),
          preview_path: this.preview_path
        })
        this.$bvModal.hide("model_new")
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

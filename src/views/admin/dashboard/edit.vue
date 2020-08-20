<template>
  <b-modal id="model_form_modal" class="squared" size="xl" hide-header hide-footer>
    <b-form @submit.prevent="createModel" @reset.prevent="removeModalForm">

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
        <b-form-radio-group v-model="gender" buttons button-variant="outline-dark" :options="gender_radios"/>
      </b-form-group>

      <b-form-group label="Волосы" label-for="hair" label-cols-sm="2">
        <b-form-input id="hair" v-model="hair"/>
      </b-form-group>

      <b-form-group label="Глаза" label-for="eyes" label-cols-sm="2">
        <b-form-input id="eyes" v-model="eyes"/>
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
  import { modelsCollection, modelFormsCollection, storage } from "@/firebase"
  import * as firebase from "firebase/app"
  import vue2Dropzone from "vue2-dropzone"
  import "vue2-dropzone/dist/vue2Dropzone.min.css"
  let uuid = require("uuid")
  export default {
    data: () => ({
      gender: null, hair: "", eyes: "", preview_path: "",
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
    computed: mapState(["selectedModel"]),
    methods: {
      hideModal () {
        this.$bvModal.hide("model_form_modal")
      },
      afterComplete(upload) {
        this.isLoading = true
        this.imageName = uuid.v1()
        this.file = upload
        this.metadata = { contentType: "image/png" }
        //this.$refs.imgDropZone.removeFile(upload)
      },
      async  createModel() {
        let imageRef = storage.ref().child(this.imageName)
        await imageRef.put(this.file, this.metadata)
        this.preview_path = await imageRef.getDownloadURL()
        await modelsCollection.add({
          name: this.selectedModel.name, surname: this.selectedModel.surname, birthdate: this.selectedModel.birthdate,
          gender: this.gender, phone: this.selectedModel.phone, email: this.selectedModel.email,
          instagram: this.selectedModel.email, height: this.selectedModel.height, waist: this.selectedModel.waist,
          bust: this.selectedModel.bust, hips: this.selectedModel.hips, hair: this.hair, eyes: this.eyes,
          about: this.selectedModel.about,
          created_at: firebase.firestore.Timestamp.fromDate(new Date()),
          preview_path: this.preview_path
        })
        await this.removeModalForm()
      },
      async removeModalForm() {
        await modelFormsCollection.doc(this.selectedModel.id).delete()
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

<template>
  <b-modal id='model_new' size='sm' hide-footer hide-header>
    <b-form @submit="createModel">
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
      <b-form-radio-group buttons button-variant="outline-dark" :options="gender_radios" v-model="model.gender"/>
      <b-form-input v-model="model.hair" placeholder="Волосы"/>
      <b-form-input v-model="model.eyes" placeholder="Глаза"/>
      <b-form-textarea v-model="model.about" placeholder="Дополнительное инфо"/>
<!--      <b-form-file v-model="imageName" ref="image" @change="onFilePicked" accept="image/*" placeholder="Выберите фото"/>-->
<!--      <img :src="imageUrl" height="150" v-if="imageUrl">-->
      <vue-dropzone
        ref="imgDropZone"
        id="customdropzone"
        :options="dropzoneOptions"
        @vdropzone-complete="afterComplete"
      />
      <div v-if="images.length > 0" class="image-div">
        <div v-for="image in images" :key="image.src">
          <img :src="image.src" class="image" />
        </div>
      </div>
      <b-button type="submit" variant="outline-dark" size="sm">Создать</b-button>
    </b-form>
  </b-modal>
</template>

<script>
  import { storage, modelsCollection } from "@/firebase"
  import * as firebase from 'firebase/app'
  import vue2Dropzone from "vue2-dropzone"
  import "vue2-dropzone/dist/vue2Dropzone.min.css"
  let uuid = require("uuid")
  export default {
    data: () => ({
      model: {},
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i>Нажмите или перетащите фото</p>
          <p class="form-text">Допустимые форматы: .jpg, .jpeg, .png</p>
          `
      },
      images: []
      //photo: null, imageName: "", imageUrl: "", imageFile: ""
    }),
    components: { vueDropzone: vue2Dropzone },
    methods: {
      async afterComplete(upload) {
        let imageName = uuid.v1()
        this.isLoading = true
        try {
          let file = upload
          let metadata = { contentType: "image/png" }
          let imageRef = storage.ref().child(imageName)

          await imageRef.put(file, metadata)
          this.model.preview_path = await imageRef.getDownloadURL()
        } catch (error) { console.log(error) }
        //this.$refs.imgDropZone.removeFile(upload)
      },
      async createModel() {
        console.log(this.downloadURL)
        await modelsCollection.add({
          name: this.model.name, surname: this.model.surname, birthdate: this.model.birthdate,
          gender: this.model.gender, phone: this.model.phone, email: this.model.email,
          instagram: this.model.email, height: this.model.height, waist: this.model.waist,
          bust: this.model.bust, hips: this.model.hips, hair: this.model.hair,
          eyes: this.model.eyes, about: this.model.about,
          created_at: firebase.firestore.Timestamp.fromDate(new Date()),
          //preview_path: `https://firebasestorage.googleapis.com/v0/b/${ config.storageBucket }/o/` + "%2F" +
          //    `${ encodeURIComponent(this.imageName) }?alt=media`,
          preview_path: this.model.preview_path
        })
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

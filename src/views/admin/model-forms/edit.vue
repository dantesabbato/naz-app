<template>
  <b-modal id="model_form_modal" class="squared" size="xl" hide-header hide-footer>
    <b-form @submit.prevent="createModel" @reset.prevent="removeForm(model.id)">
      <b-form-group label="Имя" v-bind="form_group_options"><b-form-input v-model="model.name"/></b-form-group>
      <b-form-group label="Фамилия" v-bind="form_group_options"><b-form-input v-model="model.surname"/></b-form-group>
      <b-form-group label="Email" v-bind="form_group_options"><b-form-input v-model="model.email"/></b-form-group>
      <b-form-group label="Телефон" v-bind="form_group_options"><b-form-input v-model="model.phone"/></b-form-group>
      <b-form-group label="Instagram" v-bind="form_group_options"><b-form-input v-model="model.instagram"/></b-form-group>
      <b-form-group label="Дата рождения" v-bind="form_group_options"><b-form-datepicker v-model="model.birthdate"/></b-form-group>
      <b-form-group label="Рост" v-bind="form_group_options"><b-form-input v-model="model.height"/></b-form-group>
      <b-form-group label="Талия" v-bind="form_group_options"><b-form-input v-model="model.waist"/></b-form-group>
      <b-form-group label="Грудь" v-bind="form_group_options"><b-form-input v-model="model.bust"/></b-form-group>
      <b-form-group label="Бёдра" v-bind="form_group_options"><b-form-input v-model="model.hips"/></b-form-group>
      <b-form-group label="О себе" v-bind="form_group_options"><b-form-textarea v-model="model.about"/></b-form-group>
      <b-form-group label="Пол" v-bind="form_group_options">
        <b-form-radio-group v-model="model.gender"
                            class="gender_radios"
                            buttons
                            :options="gender_radios"/>
      </b-form-group>
      <b-form-group label="Волосы" v-bind="form_group_options"><b-form-input v-model="model.hair"/></b-form-group>
      <b-form-group label="Глаза" v-bind="form_group_options"><b-form-input v-model="model.eyes"/></b-form-group>
      <vue-dropzone
          ref="imgDropZone"
          id="customdropzone"
          :options="dropzoneOptions"
          @vdropzone-complete="afterComplete"
      />
      <b-button-group>
        <b-button type="reset" variant="outline-danger" size="sm" squared>Удалить</b-button>
        <b-button type="submit" variant="outline-dark" size="sm" squared>ОК</b-button>
      </b-button-group>
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
      },
      form_group_options: {
        labelColsLg: 5
      }
    }),
    components: { vueDropzone: vue2Dropzone },
    computed: mapState({ model: state => state.models.model }),
    methods: {
      hideModal () {
        this.$bvModal.hide("model_form_modal")
      },
      afterComplete(upload) {
        this.isLoading = true
        this.model.image_name = uuid.v1()
        this.model.file = upload
        //this.$refs.imgDropZone.removeFile(upload)
      },
      async createModel() {
        await this.$store.dispatch("models/createModel")
        await this.removeForm(this.model.id)
      },
      async removeForm(id) {
        await this.$store.dispatch("forms/removeForm", id)
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

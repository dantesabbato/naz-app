<template>
  <b-modal id="archive_edit" size="xl" hide-footer hide-header>

    <div class="photos">
      <div class="photo" v-for="(photo, index) in selectedModel.photos" :key="index">
        <Photo :photo="photo" :index="index"/>
      </div>
    </div>

    <b-form @submit.prevent="createModel" class="pt-3">
      <b-form-group label="Имя" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.name"/>
      </b-form-group>

      <b-form-group label="Фамилия" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.surname"/>
      </b-form-group>

      <b-form-group label="Email" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.email"/>
      </b-form-group>

      <b-form-group label="Телефон" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.phone"/>
      </b-form-group>

      <b-form-group label="Instagram" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.instagram"/>
      </b-form-group>

      <b-form-group label="Дата рождения" v-bind="form_group_options">
        <b-form-datepicker v-model="selectedModel.birthdate"/>
      </b-form-group>

      <b-form-group label="Рост" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.height"/>
      </b-form-group>

      <b-form-group label="Талия" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.waist"/>
      </b-form-group>

      <b-form-group label="Грудь" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.bust"/>
      </b-form-group>

      <b-form-group label="Бёдра" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.hips"/>
      </b-form-group>

      <b-form-group label="О себе" v-bind="form_group_options">
        <b-form-textarea v-model="selectedModel.about"/>
      </b-form-group>

      <b-form-group label="Пол" v-bind="form_group_options">
        <b-form-radio-group v-model="selectedModel.gender"
                            class="gender_radios"
                            buttons
                            :options="gender_radios"
        />
      </b-form-group>

      <b-form-group label="Волосы" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.hair"/>
      </b-form-group>

      <b-form-group label="Глаза" v-bind="form_group_options">
        <b-form-input v-model="selectedModel.eyes"/>
      </b-form-group>

      <b-button-group class="btn-menu">
        <b-button class="ml-2 font-weight-bold"
                  variant="link"
                  @click="$refs.fileInput.$el.querySelector('input[type=file]').click()"
        >
          <b-icon icon="camera" scale="2"/>
        </b-button>

        <b-form-file v-model="new_photo"
                     style="display: none"
                     ref="fileInput"
        />

        <b-button class="ml-2 font-weight-bold"
                  variant="link"
                  @click="removeFromArchive"
        >
          <b-icon icon="trash" scale="1.7"/>
        </b-button>

        <b-button class="ml-2 font-weight-bold"
                  type="submit"
                  variant="link"
        >
          <b-icon icon="check2-square" scale="1.8"/>
        </b-button>

        <b-button class="ml-2 font-weight-bold"
                  type="cancel"
                  variant="link"
        >
          <b-icon icon="x-square" scale="1.6"/>
        </b-button>
      </b-button-group>
    </b-form>

  </b-modal>
</template>

<script>
  import Photo from "../models/edit-photo"
  import { mapState } from "vuex"
  let uuid = require("uuid")
  export default {
    name: "admin_modal",
    components: { Photo },
    data: () => ({
      // photos: null,
      new_photo: null,
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      form_group_options: {
        labelColsLg: 5
      }
    }),
    computed: mapState({ selectedModel: state => state.models.model }),
    watch: {
      new_photo: async function () {
        let fileName = uuid.v1()
        let new_photo_path = await this.$store.dispatch("models/addPhoto", {
          id: this.selectedModel.id,
          photo: { file: this.new_photo, file_name: fileName }
        })
        this.selectedModel.photos.push(new_photo_path)
      }
    },
    methods: {
      hideModal () { this.$bvModal.hide("archive_edit") },

      async createModel() {
        await this.$store.dispatch("models/moveFromArchive")
        await this.removeFromArchive(this.selectedModel.id)
        this.hideModal()
      },

      async removeFromArchive() {
        await this.$store.dispatch("archive/removeFromArchive", this.selectedModel.id)
        this.hideModal()
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

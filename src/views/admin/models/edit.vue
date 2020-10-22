<template>
  <b-modal id="model_edit" size="xl" hide-footer hide-header>
      <div class="photos">
        <div class="photo" v-for="(photo, index) in selectedModel.photos" :key="photo">

          <img :src="photo">
          <b-button-group vertical>
            <b-button v-if="index !== 0"
                      variant="link"
                      @click="movePhoto(index, - 1)"
            >
              <b-icon class="m-3"
                      icon="chevron-up"
                      scale="4"
              />
            </b-button>
            <b-button v-if="index !== 0"
                      variant="link"
                      squared
                      @click="setAsPreview(index)"
            >
              <b-icon class="m-4"
                      icon="chevron-double-up"
                      scale="4"
              />
            </b-button>
            <b-button variant="link"
                      squared
                      @click="removePhoto(photo)"
            >
              <b-icon class="m-4"
                      icon="x"
                      scale="6"
              />
            </b-button>
            <b-button v-if="index !== (selectedModel.photos.length - 1)"
                      variant="link"
                      @click="movePhoto(index, 1)"
            >
              <b-icon class="m-4"
                      icon="chevron-down"
                      scale="4"
              />
            </b-button>
          </b-button-group>

        </div>
      </div>
      <b-form @submit.prevent="updateModel" class="pt-3">
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
                              buttons
                              button-variant="outline-dark"
                              :options="gender_radios"
          />
        </b-form-group>

        <b-form-group label="Волосы" v-bind="form_group_options">
          <b-form-input v-model="selectedModel.hair"/>
        </b-form-group>

        <b-form-group label="Глаза" v-bind="form_group_options">
          <b-form-input v-model="selectedModel.eyes"/>
        </b-form-group>

        <b-button-group class="mt-3 float-right">
          <b-form-file class="font-weight-bold"
                       variant="link"
                       plain
                       v-model="new_photo"
          >
            <b-icon icon="image"
                    scale="1.6"
            />
          </b-form-file>
          <b-button class="ml-2 font-weight-bold"
                    variant="link"
                    @click="removeModel"
          >
            <b-icon icon="trash"
                    scale="1.4"
            />
          </b-button>
          <b-button class="ml-2 font-weight-bold"
                    type="submit"
                    variant="link"
          >
            <b-icon icon="check2"
                    scale="2"
            />
          </b-button>
          <b-button class="ml-2 font-weight-bold"
                    type="cancel"
                    variant="link"
          >
            <b-icon icon="x"
                    scale="2"
            />
          </b-button>
        </b-button-group>
      </b-form>
  </b-modal>
</template>

<script>
  import { mapState } from "vuex"
  let uuid = require("uuid")
  export default {
    name: "admin_modal",
    data: () => ({
      new_photo: null,
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      form_group_options: {
        labelColsLg: 3,
        labelAlignLg: "right"
      }
    }),
    computed: mapState(["selectedModel"]),
    watch: {
      new_photo: async function () {
        let fileName = uuid.v1()
        await this.$store.dispatch("models/addPhoto", {
          id: this.selectedModel.id,
          photo: { file: this.new_photo, file_name: fileName }
        })
      }
    },
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
      },
      setAsPreview(index) {
        let photos = this.selectedModel.photos
        photos.unshift(photos.splice(index, 1)[0])
      },
      movePhoto(index, position) {
        let photos = this.selectedModel.photos
        photos.splice(index + position, 0, photos.splice(index, 1)[0])
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

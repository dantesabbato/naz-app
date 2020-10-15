<template>
  <b-modal id="model_edit" size="xl" hide-footer hide-header>
      <div class="photos">
        <div class="photo" v-for="(photo, index) in selectedModel.photos" :key="photo">

          <img :src="photo">
          <b-button-group class="menu" vertical>
            <b-button v-if="index !== 0" variant="link" @click="movePhoto(index, - 1)">
              <b-icon icon="chevron-up" scale="4" class="m-3"/>
            </b-button>
            <b-button v-if="index !== 0" variant="link" squared @click="setAsPreview(index)">
              <b-icon icon="chevron-double-up" scale="4" class="m-4"/>
            </b-button>
            <b-button variant="link" squared @click="removePhoto(photo)">
              <b-icon icon="x" scale="6" class="m-4"/>
            </b-button>
            <b-button v-if="index !== (selectedModel.photos.length - 1)" variant="link" @click="movePhoto(index, 1)">
              <b-icon icon="chevron-down" scale="4" class="m-4"/>
            </b-button>
          </b-button-group>

        </div>
      </div>
      <b-form @submit.prevent="updateModel">
        <b-form-group label="Имя" label-for="name" v-bind="form_group_options">
          <b-form-input id="name" v-model="selectedModel.name"/>
        </b-form-group>

        <b-form-group label="Фамилия" label-for="surname" v-bind="form_group_options">
          <b-form-input id="surname" v-model="selectedModel.surname"/>
        </b-form-group>

        <b-form-group label="Email" label-for="email" v-bind="form_group_options">
          <b-form-input id="email" v-model="selectedModel.email"/>
        </b-form-group>

        <b-form-group label="Телефон" label-for="phone" v-bind="form_group_options">
          <b-form-input id="phone" v-model="selectedModel.phone"/>
        </b-form-group>

        <b-form-group label="Instagram" label-for="instagram" v-bind="form_group_options">
          <b-form-input id="instagram" v-model="selectedModel.instagram"/>
        </b-form-group>

        <b-form-group label="Дата рождения" label-for="birthdate" v-bind="form_group_options">
          <b-form-datepicker id="birthdate" v-model="selectedModel.birthdate"/>
        </b-form-group>

        <b-form-group label="Рост" label-for="height" v-bind="form_group_options">
          <b-form-input id="height" v-model="selectedModel.height"/>
        </b-form-group>

        <b-form-group label="Талия" label-for="waist" v-bind="form_group_options">
          <b-form-input id="waist" v-model="selectedModel.waist"/>
        </b-form-group>

        <b-form-group label="Грудь" label-for="bust" v-bind="form_group_options">
          <b-form-input id="bust" v-model="selectedModel.bust"/>
        </b-form-group>

        <b-form-group label="Бёдра" label-for="hips" v-bind="form_group_options">
          <b-form-input id="hips" v-model="selectedModel.hips"/>
        </b-form-group>

        <b-form-group label="О себе" label-for="about" v-bind="form_group_options">
          <b-form-textarea id="about" v-model="selectedModel.about"/>
        </b-form-group>

        <b-form-group label="Пол" v-bind="form_group_options">
          <b-form-radio-group v-model="selectedModel.gender" buttons button-variant="outline-dark" :options="gender_radios"/>
        </b-form-group>

        <b-form-group label="Волосы" label-for="hair" v-bind="form_group_options">
          <b-form-input id="hair" v-model="selectedModel.hair"/>
        </b-form-group>

        <b-form-group label="Глаза" label-for="eyes" v-bind="form_group_options">
          <b-form-input id="eyes" v-model="selectedModel.eyes"/>
        </b-form-group>

        <b-button-group class="mt-3 float-right">
          <b-button variant="outline-dark" class="font-weight-bold">
            Добавить фото
          </b-button>
          <b-button type="submit" variant="outline-dark" class="ml-2 font-weight-bold" squared>
            Обновить
          </b-button>
          <b-button @click="removeModel" variant="outline-danger" class="ml-2 font-weight-bold" squared>
            Удалить
          </b-button>
        </b-button-group>
      </b-form>
  </b-modal>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "admin_modal",
    data: () => ({
      gender_radios: [ { text: "М", value: true }, { text: "Ж", value: false } ],
      form_group_options: {
        labelColsLg: 3,
        labelAlignLg: "right"
      }
    }),
    computed: mapState(["selectedModel"]),
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

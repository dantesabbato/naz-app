<template>
  <b-modal id="model_form_modal" size="xl" hide-footer hide-header>
    <b-form-group label="Имя"
                  label-for="name"
                  label-cols-sm="2"
    >
      <b-form-input id="name"
                    v-model="selectedModel.name"
      />
    </b-form-group>

    <b-form-group label="Фамилия"
                  label-for="surname"
                  label-cols-sm="2"
    >
      <b-form-input id="surname"
                    v-model="selectedModel.surname"
      />
    </b-form-group>

    <b-form-group label="Email"
                  label-for="email"
                  label-cols-sm="2"
    >
      <b-form-input id="email"
                    v-model="selectedModel.email"
      />
    </b-form-group>

    <b-form-group label="Телефон"
                  label-for="phone"
                  label-cols-sm="2"
    >
      <b-form-input id="phone"
                    v-model="selectedModel.phone"
      />
    </b-form-group>

    <b-form-group label="Instagram"
                  label-for="instagram"
                  label-cols-sm="2"
    >
      <b-form-input id="instagram"
                    v-model="selectedModel.instagram"
      />
    </b-form-group>

    <b-form-group label="Дата рождения"
                  label-for="birthdate"
                  label-cols-sm="2"
    >
      <b-form-datepicker id="birthdate"
                         v-model="selectedModel.birthdate"
      />
    </b-form-group>

    <b-form-group label="Рост"
                  label-for="height"
                  label-cols-sm="2"
    >
      <b-form-input id="height"
                    v-model="selectedModel.height"
      />
    </b-form-group>

    <b-form-group label="Талия"
                  label-for="waist"
                  label-cols-sm="2"
    >
      <b-form-input id="waist"
                    v-model="selectedModel.waist"
      />
    </b-form-group>

    <b-form-group label="Грудь"
                  label-for="bust"
                  label-cols-sm="2"
    >
      <b-form-input id="bust"
                    v-model="selectedModel.bust"
      />
    </b-form-group>

    <b-form-group label="Бёдра"
                  label-for="hips"
                  label-cols-sm="2"
    >
      <b-form-input id="hips"
                    v-model="selectedModel.hips"
      />
    </b-form-group>

    <b-form-group label="О себе"
                  label-for="about"
                  label-cols-sm="2"
    >
      <b-form-textarea id="about"
                       v-model="selectedModel.about"
      />
    </b-form-group>

    <b-form-group>
      <b-form-radio v-model="selectedModel.gender" value="true">М</b-form-radio>
      <b-form-radio v-model="selectedModel.gender" value="false">Ж</b-form-radio>
    </b-form-group>

    <b-form-group label="Волосы"
                  label-for="hair"
                  label-cols-sm="2"
    >
      <b-form-input id="hair"
                       v-model="selectedModel.hair"
      />
    </b-form-group>

    <b-form-group label="Глаза"
                  label-for="eyes"
                  label-cols-sm="2"
    >
      <b-form-input id="eyes"
                       v-model="selectedModel.eyes"
      />
    </b-form-group>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data: () => ({
      selectedModel: {
        gender: [],
        hair: "",
        eyes: ""
      }
      // model: {
      //   name: "",
      //   surname: "",
      //   birthdate: "",
      //   gender: "",
      //   phone: "",
      //   email: "",
      //   instagram: "",
      //   height: "",
      //   waist: "",
      //   bust: "",
      //   hips: "",
      //   hair: "",
      //   eyes: "",
      //   about: "",
      //   preview_path: "",
      //   created_at: ""
      // }
    }),
    computed: {
      ...mapState(["selectedModel"])
    }
  }
</script>

<style lang="sass">@import "style"</style>

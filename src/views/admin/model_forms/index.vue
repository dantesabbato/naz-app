<template>
  <div id='dashboard'>
    <Edit/>
    <div id='model_forms' class="pt-5">
      <b-container>
        <b-card-group>
          <div v-for="model_form in $store.getters['model_forms/MODEL_FORMS']"
               :key='model_form.id'
          >
            <b-card class="squared border-dark shadow-lg m-2"
                    v-b-modal.model_form_modal
                    @click="passModel(model_form)"
            >
              <b-card-body>
                <b-button @click="removeModelForm(model_form.id)"><v-icon name="times" scale="1.3"/></b-button>
                <b-form-group label-cols-sm="3"
                              :label="getTime(model_form.created_at, full_format)"
                              label-for="name"
                              label-align="left"
                              label-size="sm"
                >
                  <div id="name" class="text-uppercase font-weight-bold">
                    {{ model_form.name + " " + model_form.surname }}
                  </div>
                </b-form-group>

                <b-form-group label="Email"
                              label-for="email"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="email">{{ model_form.email }}</div>
                </b-form-group>

                <b-form-group label="Телефон"
                              label-for="phone"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="phone">{{ model_form.phone }}</div>
                </b-form-group>

                <b-form-group label="Instagram"
                              label-for="instagram"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="instagram">{{ model_form.instagram }}</div>
                </b-form-group>

                <b-form-group label="Дата рождения"
                              label-for="birthdate"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="birthdate">{{ getTime(model_form.birthdate, short_format) }}</div>
                </b-form-group>

                <b-form-group label="Рост"
                              label-for="height"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="height">{{ model_form.height }}</div>
                </b-form-group>

                <b-form-group label="Талия"
                              label-for="waist"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="waist">{{ model_form.waist }}</div>
                </b-form-group>

                <b-form-group label="Грудь"
                              label-for="bust"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="bust">{{ model_form.bust }}</div>
                </b-form-group>

                <b-form-group label="Бёдра"
                              label-for="hips"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="hips">{{ model_form.hips }}</div>
                </b-form-group>

                <b-form-group label="О себе"
                              label-for="about"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="about">{{ model_form.about }}</div>
                </b-form-group>
              </b-card-body>
            </b-card>
          </div>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Edit from "./edit"
  import moment from "moment"
  export default {
    name: 'dashboard',
    components: { Edit },
    data: () => ({
      default_options: [{
        "label-align": "right",
        "label-cols-sm": "3",
        "label-size": "sm"
      }],
      full_format: "DD.MM.YYYY hh:mm",
      short_format: "DD.MM.YYYY"
    }),
    created() { this.$store.dispatch("model_forms/getModelForms") },
    methods: {
      getTime(time, format) {
        if (time) {
          let date = new Date(time.seconds * 1000)
          return moment(date).format(format)
        }
      },
      passModel(model_form) { this.$store.dispatch("passModel", model_form) },
      removeModelForm(id) { this.$store.dispatch("model_forms/removeModelForm", id) }
    }
  }
</script>

<style lang="sass">@import "style"</style>


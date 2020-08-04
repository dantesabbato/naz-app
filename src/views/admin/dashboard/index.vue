<template>
  <div id='dashboard'>
    <Modal/>
    <b-container>
      <div id='model_forms'>
        <h1>Анкеты</h1>
        <b-card-group>
          <div v-for='model_form in model_forms'
               :key='model_form.id'
          >
            <b-card class="shadow-lg mr-3"
                    v-b-modal.model_form_modal
                    @click="passModel(model_form)"
            >
              <b-card-body>

                <b-form-group label-cols-sm="6"
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
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="email">{{ model_form.email }}</div>
                </b-form-group>

                <b-form-group label="Телефон"
                              label-for="phone"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="phone">{{ model_form.phone }}</div>
                </b-form-group>

                <b-form-group label="Instagram"
                              label-for="instagram"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="instagram">{{ model_form.instagram }}</div>
                </b-form-group>

                <b-form-group label="Дата рождения"
                              label-for="birthdate"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="birthdate">{{ getTime(model_form.birthdate, short_format) }}</div>
                </b-form-group>

                <b-form-group label="Рост"
                              label-for="height"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="height">{{ model_form.height }}</div>
                </b-form-group>

                <b-form-group label="Талия"
                              label-for="waist"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="waist">{{ model_form.waist }}</div>
                </b-form-group>

                <b-form-group label="Грудь"
                              label-for="bust"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="bust">{{ model_form.bust }}</div>
                </b-form-group>

                <b-form-group label="Бёдра"
                              label-for="hips"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="hips">{{ model_form.hips }}</div>
                </b-form-group>

                <b-form-group label="О себе"
                              label-for="about"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="about">{{ model_form.about }}</div>
                </b-form-group>

                <b-form-group label="Дата создания"
                              label-for="created_at"
                              label-align="right"
                              label-cols-sm="6"
                              label-size="sm"
                >
                  <div id="created_at">{{ getTime(model_form.created_at, full_format) }}</div>
                </b-form-group>

              </b-card-body>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Modal from "./_modal"
  import moment from "moment"
  export default {
    name: 'dashboard',
    components: { Modal },
    data: () => ({
      full_format: "DD.MM.YYYY hh:mm",
      short_format: "DD.MM.YYYY"
    }),
    computed: {
      ...mapState(['model_forms'])
    },
    methods: {
      getTime(time, format) {
        if (time) {
          let date = new Date(time.seconds * 1000)
          return moment(date).format(format)
        }
      },
      passModel(model_form) {
        this.$store.dispatch("passModel", model_form)
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>


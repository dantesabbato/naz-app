<template>
  <div id='dashboard'>
    <Edit/>
    <div id='model_forms'>
      <b-container>
        <b-card-group v-if="FORMS.length">
          <div v-for="form in FORMS"
               :key='form.id'
          >
            <b-card class="squared border-dark shadow-lg m-2"
                    v-b-modal.model_form_modal
                    @click="passModel(form)"
            >
              <b-card-body>
                <b-button @click="removeForm(form.id)"><v-icon name="times" scale="1.3"/></b-button>
                <b-form-group label-cols-sm="3"
                              :label="getTime(form.created_at, full_format)"
                              label-for="name"
                              label-align="left"
                              label-size="sm"
                >
                  <div id="name" class="text-uppercase font-weight-bold">
                    {{ form.name + " " + form.surname }}
                  </div>
                </b-form-group>

                <b-form-group label="Email"
                              label-for="email"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="email">{{ form.email }}</div>
                </b-form-group>

                <b-form-group label="Телефон"
                              label-for="phone"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="phone">{{ form.phone }}</div>
                </b-form-group>

                <b-form-group label="Instagram"
                              label-for="instagram"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="instagram">{{ form.instagram }}</div>
                </b-form-group>

                <b-form-group label="Дата рождения"
                              label-for="birthdate"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="birthdate">{{ getTime(form.birthdate, short_format) }}</div>
                </b-form-group>

                <b-form-group label="Рост"
                              label-for="height"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="height">{{ form.height }}</div>
                </b-form-group>

                <b-form-group label="Талия"
                              label-for="waist"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="waist">{{ form.waist }}</div>
                </b-form-group>

                <b-form-group label="Грудь"
                              label-for="bust"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="bust">{{ form.bust }}</div>
                </b-form-group>

                <b-form-group label="Бёдра"
                              label-for="hips"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="hips">{{ form.hips }}</div>
                </b-form-group>

                <b-form-group label="О себе"
                              label-for="about"
                              label-align="right"
                              label-cols-sm="3"
                              label-size="sm"
                >
                  <div id="about">{{ form.about }}</div>
                </b-form-group>
              </b-card-body>
            </b-card>
          </div>
        </b-card-group>
        <div v-else id="empty" class="mt-5 text-center"><v-icon name="inbox" scale="10"/><p>ПУСТО</p></div>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Edit from "./edit"
  import moment from "moment"
  import { mapGetters } from "vuex"
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
    created() { this.$store.dispatch("forms/getForms") },
    computed: mapGetters("forms", ["FORMS"]),
    methods: {
      getTime(time, format) {
        if (time) {
          let date = new Date(time.seconds * 1000)
          return moment(date).format(format)
        }
      },
      passModel(form) { this.$store.commit("models/setModel", form) },
      removeForm(id) { this.$store.dispatch("forms/removeForm", id) }
    }
  }
</script>

<style lang="sass">@import "style"</style>


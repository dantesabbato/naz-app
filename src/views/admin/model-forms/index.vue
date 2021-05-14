<template>
  <div id="dashboard">
    <Edit/>
    <div id="model_forms">
      <b-card-group v-if="FORMS.length">
        <b-card v-for="form in FORMS"
                :key='form.id'
                v-b-modal.model_form_modal
                class="squared shadow-lg m-2"
                border-variant="dark"
                @click="passModel(form)"
        >
          <b-card-body>
            <b-button variant="link" @click="removeForm(form.id)" @click.stop="passModel()"><v-icon name="times" scale="1.3"/></b-button>
            <b-form-group :label="getTime(form.created_at, full_format)"
                          label-cols-sm="4"
                          label-size="md"
                          label-align="left"
            >
              <label>{{ getName(form.name, form.surname) }}</label>
            </b-form-group>
            <b-form-group v-bind="form_group_options" label="Email" v-if="form.email">{{ form.email }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Телефон">{{ form.phone }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Instagram" v-if="form.instagram">{{ form.instagram }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Дата рождения">{{ getBirthdate(form.birthdate, short_format) }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Рост" v-if="form.height">{{ form.height }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Талия" v-if="form.waist">{{ form.waist }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Грудь" v-if="form.bust">{{ form.bust }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="Бёдра" v-if="form.hips">{{ form.hips }}</b-form-group>
            <b-form-group v-bind="form_group_options" label="О себе" v-if="form.about">{{ form.about }}</b-form-group>
          </b-card-body>
        </b-card>
      </b-card-group>
      <div v-else id="empty" class="mt-5 text-center">
        <v-icon name="inbox" scale="10"/>
        <p>ПУСТО</p>
      </div>
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
      short_format: "DD.MM.YYYY",
      form_group_options: {
        labelColsLg: 4,
        labelSize: "sm",
        class: "mb-2"
      }
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
      getBirthdate(time, format) {
        if (time) { return moment(time).format(format) }
      },
      getName(name, surname) {
        if(surname) { return name + " " + surname} else { return name }
      },
      passModel(form) { this.$store.commit("models/setModel", form) },
      removeForm(id) { this.$store.dispatch("forms/removeForm", id) }
    }
  }
</script>

<style lang="sass">@import "style"</style>


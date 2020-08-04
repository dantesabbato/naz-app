<template>
  <div id="become">
    <b-row>
      <b-col lg>
        <b-form id="become-form" @submit="createModelForm">
          <b-row>
            <b-col lg>
              <b-form-input v-model="model_form.name"
                            placeholder="Name / Имя"
                            required
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.surname"
                            placeholder="Surname / Фамилия"
                            required
              />
            </b-col>
          </b-row>

          <b-row>
            <b-col lg>
              <b-form-input v-model="model_form.email"
                            placeholder="Email"
                            type="email"
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.phone"
                            placeholder="Mobile / Телефон"
                            required
                            type="tel"
              />
            </b-col>
          </b-row>

          <b-row>
            <b-col lg>
              <b-form-datepicker id="become-form-datepicker"
                                 v-model="model_form.birthdate"
                                 placeholder="Дата рождения"
                                 required
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.instagram"
                            placeholder="Instagram"
                            required
              />
            </b-col>
          </b-row>

          <b-row>
            <b-col lg>
              <b-form-input v-model="model_form.height"
                            placeholder="Height / Рост"
                            type="number"
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.waist"
                            placeholder="Waist / Талия"
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.bust"
                            placeholder="Bust / Грудь"
              />
            </b-col>
            <b-col lg>
              <b-form-input v-model="model_form.hips"
                            placeholder="Hips / Бёдра"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col lg>
              <b-form-textarea v-model="model_form.about"
                               rows="4"
                               placeholder="Tell us more about yourself / Расскажите о себе"
              />
              <b-button id="become-form-button"
                        type="submit"
                        squared
              >
                Send / Отправить
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
      <b-col lg>
        <div id="become-info">
          <div>To become a NAZ model fill up the form or emails us your snapshots and include your name, age, height and location.</div>
          <a :href="`mailto:${ getContactEmail }`">{{ getContactEmail }}</a>
          <div>Чтобы стать моделью нашего агентства, заполните форму на этой странице или отправьте нам электронное письмо, включающее свежие снепы, имя, информацию о возрасте, параметрах и городе проживания.</div>
          <a :href="`mailto:${ getContactEmail }`">{{ getContactEmail }}</a>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { modelFormsCollection } from "@/firebase"
  export default {
    name: "become",
    data: () => ({
      model_form: {
        name: "",
        surname: "",
        birthdate: "",
        phone: "",
        email: "",
        instagram: "",
        height: "",
        waist: "",
        bust: "",
        hips: "",
        about: ""
      }
    }),
    computed: {
      getContactEmail() {
        return this.$store.getters.CONTACTS_EMAIL
      }
    },
    methods: {
      createModelForm(evt) {
        evt.preventDefault()
        modelFormsCollection.add({
          created_at: new Date(),
          name: this.model_form.name,
          surname: this.model_form.surname,
          birthdate: this.model_form.birthdate,
          phone: this.model_form.phone,
          email: this.model_form.email,
          instagram: this.model_form.instagram,
          height: this.model_form.height,
          waist: this.model_form.waist,
          bust: this.model_form.bust,
          hips: this.model_form.hips,
          about: this.model_form.about
        })
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

<template>
  <div id="become" class="fade-in">
    <div id="become-form" v-if="show_form">
      <b-form id="become-form-input" @submit.prevent="createForm">
        <b-row>
          <b-col lg>
            <div class="error" v-if="$v.name.$error">
              <template v-if="!$v.name.required">Введите имя</template>
              <template v-else-if="!$v.name.maxLength">Длина не должна превышать {{ $v.name.$params.maxLength.max }} символов</template>
              <template v-else-if="!$v.name.alpha">Имя должно содержать только буквы</template>
              <template v-else>Имя обязательно для заполнения</template>
            </div>
            <b-form-input v-model.trim="name" placeholder="Name / Имя" @blur="$v.name.$touch()"/>
          </b-col>
          <b-col lg><b-form-input v-model="surname" placeholder="Surname / Фамилия"/></b-col>
        </b-row>
        <b-row>
          <b-col lg>
            <div class="error" v-if="$v.email.$error">
              <template v-if="!$v.email.email">Введите email</template>
            </div>
            <b-form-input v-model="email" placeholder="Email" type="email" @blur="$v.email.$touch()"/>
          </b-col>
          <b-col lg>
            <div class="error" v-if="$v.phone.$error">
              Введите номер телефона
            </div>
            <b-form-input v-model="phone" placeholder="Mobile / Телефон" type="tel" @blur="$v.phone.touch()"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg>
            <div class="error" v-if="$v.birthdate.$error">
              Укажите дату рождения
            </div>
            <b-form-datepicker id="become-form-datepicker"
                               v-model="birthdate"
                               placeholder="Birth date / Дата рождения"
                               @blur="$v.birthdate.$touch()"
            />
          </b-col>
          <b-col lg>
            <b-form-input v-model="instagram" placeholder="Instagram"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg><b-form-input v-model="height" placeholder="Height / Рост" type="number"/></b-col>
          <b-col lg><b-form-input v-model="waist" placeholder="Waist / Талия"/></b-col>
          <b-col lg><b-form-input v-model="bust" placeholder="Bust / Грудь"/></b-col>
          <b-col lg><b-form-input v-model="hips" placeholder="Hips / Бёдра"/></b-col>
        </b-row>
        <b-row>
          <b-col lg>
            <div class="error" v-if="$v.about.$error">
              <template v-if="!$v.about.maxLength">Длина текста не долна превышать 300 символов</template>
            </div>
            <b-form-textarea v-model="about"
                             rows="4"
                             placeholder="Tell us more about yourself / Расскажите о себе"
                             @blur="$v.about.$touch()"
            />
            <b-button id="become-form-input-button" type="submit" :disabled="$v.$invalid" squared>
              Send / Отправить
            </b-button>
          </b-col>
        </b-row>
      </b-form>

      <div id="become-form-info">
        <div class="text">{{ BECOME_EN }}</div><a class="font-weight-bold" :href="`mailto:${ getContactEmail }`">{{ getContactEmail }}</a>
        <div class="text">{{ BECOME_RU }}</div><a class="font-weight-bold" :href="`mailto:${ getContactEmail }`">{{ getContactEmail }}</a>
      </div>
    </div>

    <div v-if="show_gratitude">
      Thank you for your interest in our project and we're looking forward to seeing you. We'll call you back later!
      Благодарим за интерес к нашему проекту и надеемся на наше дальнейшее сотрудничество. Мы свяжемся с вами позже!
    </div>
  </div>
</template>

<script>
  import { required, maxLength, email } from "vuelidate/lib/validators"
  import { mapGetters } from "vuex"
  export default {
    name: "become",
    data: () => ({
      name: null, surname: null, birthdate: null, phone: null, email: null, instagram: null,
      height: null, waist: null, bust: null, hips: null, about: null,
      show_form: true, show_gratitude: false
    }),
    validations: {
      name: {
        required,
        maxLength: maxLength(20),
        alpha: val => /^([а-яё]+|[a-z]+)$/i.test(val)
      },
      phone: {
        required,
        alpha: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
      },
      email: { email },
      birthdate: { required },
      about: { maxLength: maxLength(300) }
    },
    created () {
      this.$store.dispatch("contacts/getContacts")
      this.$store.dispatch("become/getBecome")
    },
    computed: {
      ...mapGetters("become", ["BECOME_EN", "BECOME_RU"]),
      getContactEmail() { return this.$store.getters["contacts/CONTACTS_EMAIL"] }
    },
    methods: {
      createForm() {
        this.$store.dispatch("forms/createForm", {
          created_at: new Date(),
          name: this.name, surname: this.surname, birthdate: this.birthdate, phone: this.phone, email: this.email,
          instagram: this.instagram, height: this.height, waist: this.waist, bust: this.bust, hips: this.hips,
          about: this.about
        })
        this.name = "", this.surname = "", this.birthdate = "", this.phone = "", this.email = "", this.instagram = "",
        this.height = "", this.waist = "", this.bust = "", this.hips = "", this.about = "",
        this.show_form = false, this.show_gratitude = true
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

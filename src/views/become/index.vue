<template>
  <div id='become'>
    <b-row>
      <b-col>
        <b-form id='become-form'>
          <b-row>
            <b-col>
              <b-form-input v-model='model.name' placeholder='Name / Имя'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.surname' placeholder='Surname / Фамилия'/>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-input v-model='model.email' placeholder='Email'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.mobile' placeholder='Mobile / Телефон'/>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-datepicker id='become-form-datepicker' v-model='model.birthdate' placeholder='Дата рождения'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.instagram' placeholder='Instagram'/>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-input v-model='model.height' placeholder='Height / Рост'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.waist' placeholder='Waist / Талия'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.bust' placeholder='Bust / Грудь'/>
            </b-col>
            <b-col>
              <b-form-input v-model='model.hips' placeholder='Hips / Бёдра'/>
            </b-col>
          </b-row>

          <b-form-textarea v-model='model.more' rows='4' placeholder='Tell us more about yourself / Расскажите о себе'/>
          <b-button id='become-form-button' squared >Send / Отправить</b-button>
        </b-form>
      </b-col>
      <b-col>
        <div id='become-info'>
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
  export default {
    name: 'become',
    data: () => ({
      model: {
        name: '', surname: '', email: '', mobile: '', birthdate: '', instagram: '', height: '', waist: '', bust: '', hips: '', more: ''
      }
    }),
    computed: {
      getContactEmail() {
        return this.$store.getters.CONTACTS_EMAIL
      }
    }
  }
</script>

<style lang="sass">
  @import "styles"
</style>

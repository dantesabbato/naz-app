<template>
  <div id='dashboard'>
    <b-container>
      <div id='model_froms'>
        <h1>Анкеты</h1>
        <div v-for='model_form in model_forms' :key='model_form.id'>
          <b-card img-src='https://placekitten.com/300/300' img-right>
            <b-card-text>
              <content>
                <label>Дата подачи анкеты</label><div>{{ model_form.created_at }}</div>
                <label>Имя</label><div>{{ model_form.name }}</div>
                <label>Фамилия</label><div>{{ model_form.surname }}</div>
                <label>Дата рождения</label><div>{{ model_form.birthdate }}</div>
                <label>Телефон</label><div>{{ model_form.phone }}</div>
                <label>Email</label><div>{{ model_form.email }}</div>
                <label>Instagram</label><div>{{ model_form.instagram }}</div>
                <label>Рост</label><div>{{ model_form.height }}</div>
                <label>Вес</label><div>{{ model_form.weight }}</div>
                <label>Грудь</label><div>{{ model_form.bust }}</div>
                <label>Бёдра</label><div>{{ model_form.hips }}</div>
                <label>О себе</label><div>{{ model_form.about }}</div>
              </content>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'dashboard',
    data: () => ({
    }),
    computed: {
      ...mapState(['model_forms'])
    }
  }
</script>

<style lang="sass">
  #model_froms
    content
      display: grid
      grid-template-columns: 200px 500px
      column-gap: 10px
      label
        color: rgba(98,94,101,0.36)
        font-weight: bold
</style>
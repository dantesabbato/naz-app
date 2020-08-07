<template>
  <b-modal id='model_modal' size='xl' hide-footer hide-header>
    <b-row>
      <b-col md='auto'>
        <img :src='selectedModel.preview_path'>
      </b-col>
      <b-col align-self='center'>
        <ul>
          <li><label>Дата добавления</label><div>{{ selectedModel.created_at }}</div></li>
          <li><label>Имя</label><div>{{ selectedModel.name }}</div></li>
          <li><label>Фамилия</label><div>{{ selectedModel.surname }}</div></li>
          <li><label>Дата рождения</label><div>{{ selectedModel.birthdate }}</div></li>
          <li><label>Пол</label><div>{{ getGender(selectedModel.gender) }}</div></li>
          <li><label>Телефон</label><div>{{ selectedModel.phone }}</div></li>
          <li><label>Email</label><div>{{ selectedModel.email }}</div></li>
          <li><label>Instagram</label><div>{{ selectedModel.instagram }}</div></li>
          <li><label>Рост</label><div>{{ selectedModel.height }}</div></li>
          <li><label>Грудь</label><div>{{ selectedModel.bust }}</div></li>
          <li><label>Талия</label><div>{{ selectedModel.waist }}</div></li>
          <li><label>Бёдра</label><div>{{ selectedModel.hips }}</div></li>
          <li><label>Обувь</label><div>{{ selectedModel.shoe }}</div></li>
          <li><label>Волосы</label><div>{{ selectedModel.hair }}</div></li>
          <li><label>Глаза</label><div>{{ selectedModel.eyes }}</div></li>
          <li><label>О себе</label><div>{{ selectedModel.about }}</div></li>
        </ul>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'admin_modal',
    data: () => ({
    }),
    computed: {
      ...mapState(['selectedModel'])
    },
    methods: {
      getGender(gender) {
        if (!gender) { return "Ж" } else { return "М" }
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

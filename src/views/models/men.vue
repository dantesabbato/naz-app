<template>
  <div id='men' class='models'>
    <b-container fluid="lg">
      <b-card-group deck>
        <router-link v-for='model in maleModels'
                     :key='model.id'
                     :to="{ name: 'model', params: { id: model.id } }"
        >
          <b-card :img-src='model.preview_path'
                  img-top
                  class="border-0"
          >
            <b-card-text>
              {{ model.name }}
            </b-card-text>
          </b-card>
        </router-link>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'men',
    data: () => ({
    }),
    computed: {
      ...mapState(['models']),
      maleModels: function () {
        return this.models.filter( m => m.gender )
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass">@import "style"</style>

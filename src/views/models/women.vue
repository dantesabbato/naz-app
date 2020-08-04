<template>
  <div id='women' class='models'>
    <b-container fluid="lg">
      <b-card-group deck>
        <router-link v-for='model in femaleModels'
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
    name: 'women',
    data: () => ({
    }),
    created() {
    },
    computed: {
      ...mapState(['models']),
      femaleModels: function () {
        return this.models.filter( m => !m.gender )
      }
    },
    methods: {
      // passModel(model) {
      //   this.$store.dispatch('passModel', model)
      // }
    }
  }
</script>

<style lang="sass">@import "style"</style>

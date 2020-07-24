<template>
  <div id='women' class='models'>
    <Modal/>
    <b-container>
      <card-set>
        <card v-for='model in femaleModels'
              :key='model.id'
              v-b-modal.model_modal
              @click='passModel(model)'>
          <img :src='model.preview_path'>
          <p>{{ model.name }}</p>
        </card>
      </card-set>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Modal from './_modal'
  export default {
    components: { Modal },
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
      passModel(model) {
        this.$store.dispatch('passModel', model)
      }
    }
  }
</script>

<style lang="sass">
  @import "style"
</style>

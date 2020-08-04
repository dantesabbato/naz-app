<template>
  <div id="admin_models">
    <Modal/>
    <b-button id="new-model">Новая модель</b-button>
    <b-container>
      <b-card-group deck>
        <div v-for='model in models'
             :key='model.id'
              зыкальная
              @click="passModel(model)"
        >
          <b-card class="shadow-lg" :img-src='model.preview_path' img-left bg-variant="dark" text-variant="white">
            <b-card-text>
              <content>
                <div>
                  <div class="font-weight-bold text-uppercase inline mr-2">{{ model.name }}</div>
                  <div class="font-weight-bold text-uppercase inline">{{ model.surname }}</div>
                </div>
                <div>
                  <v-icon class="inline mr-3" name="mobile-alt"/>
                  <div class="inline">{{ model.phone }}</div>
                </div>
                <div>
                  <v-icon class="inline mr-2" name="envelope-open-text"/>
                  <div class="inline">{{ model.email }}</div>
                </div>
                <div>
                  <v-icon class="inline mr-2" name="brands/instagram"/>
                  <div class="inline">{{ model.instagram }}</div>
                </div>
                <div>
                  <v-icon class="inline mr-2" name="calendar-plus"/>
                  <div class="inline">{{ getTime(model.created_at) }}</div>
                </div>
              </content>
            </b-card-text>
          </b-card>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import Modal from "./_modal"
  import moment from "moment"
  export default {
    name: 'admin_models',
    components: { Modal },
    data: () => ({
    }),
    computed: {
      ...mapState(['models'])
    },
    methods: {
      getTime(time) {
        if (time) {
          let date = new Date(time.seconds * 1000)
          return moment(date).format("DD.MM.YYYY")
        }
      },
      passModel(model) {
        this.$store.dispatch('passModel', model)
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

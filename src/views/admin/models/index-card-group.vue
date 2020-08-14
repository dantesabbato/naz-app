<template>
  <b-card-group deck>
    <div v-for='model in models' :key='model.id'>
      <b-card class="shadow-lg"
              :img-src='model.preview_path'
              img-left bg-variant="dark"
              text-variant="white"
              @click="passModel(model)"
              v-b-modal.model_modal
      >
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
</template>

<script>
  import moment from "moment"
  export default {
    props: ["models"],
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

<style lang="sass"> @import "style"</style>

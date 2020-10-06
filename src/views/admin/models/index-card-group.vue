<template>
  <b-card-group deck>
    <div v-for="model in models" :key="model.id">
      <b-card class="shadow-lg squared"
              :img-src="model.photos[0]"
              img-left bg-variant="dark"
              text-variant="white"
              @click="passModel(model)"
              v-b-modal.model_edit
      >
        <b-card-text>
          <div>
            <div class="font-weight-bold text-uppercase inline mr-2">{{ model.name }}</div>
            <div class="font-weight-bold text-uppercase inline">{{ model.surname }}</div>
          </div>
          <div v-if="model.phone">
            <v-icon class="inline mr-3" name="mobile-alt"/>
            <div class="inline">{{ model.phone }}</div>
          </div>
          <div v-if="model.email">
            <v-icon class="inline mr-2" name="envelope-open-text"/>
            <div class="inline">{{ model.email }}</div>
          </div>
          <div v-if="model.instagram">
            <v-icon class="inline mr-2" name="brands/instagram"/>
            <div class="inline">{{ model.instagram }}</div>
          </div>
          <div v-if="model.created_at">
            <v-icon class="inline mr-2" name="calendar-plus"/>
            <div class="inline">{{ getTime(model.created_at) }}</div>
          </div>
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
      passModel(model) { this.$store.dispatch("passModel", model) }
    }
  }
</script>

<style lang="sass"> @import "style"</style>

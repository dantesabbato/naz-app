<template>
  <b-card-group class="fade-in">
    <div v-for="model in models" :key="model.id">
      <b-card class="border-0"
              img-top
              @click="passModel(model)"
              v-b-modal.model_edit
      >
        <b-card-img-lazy :src="model.photos[0]"/>
        <b-card-text>
          <div>
            <div class="font-weight-bold text-uppercase inline mr-2">{{ model.name }}</div>
            <div class="font-weight-bold text-uppercase inline">{{ model.surname }}</div>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </b-card-group>
</template>

<script>
  // import moment from "moment"
  export default {
    props: ["models"],
    methods: {
      // getTime(time) {
      //   if (time) {
      //     let date = new Date(time.seconds * 1000)
      //     return moment(date).format("DD.MM.YYYY")
      //   }
      // },
      passModel(model) { this.$store.commit("models/setModel", model) }
    }
  }
</script>

<style lang="sass"> @import "style"</style>

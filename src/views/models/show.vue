<template>
  <div id="model" class="fade-in">
    <b-container>
      <div class="block">
        <div class="info">
          <p>{{ model.name }}</p>
          <ul>
            <li v-if="model.height"><label>Height</label><b>{{ model_height }}</b></li>
            <li v-if="model.bust"><label>Bust</label><b>{{ model_bust }}</b></li>
            <li v-if="model.waist"><label>Waist</label><b>{{ model_waist }}</b></li>
            <li v-if="model.hips"><label>Hips</label><b>{{ model_hips }}</b></li>
            <li v-if="model.shoe"><label>Shoe</label><b>{{ model.shoe }}</b></li>
            <li v-if="model.hair"><label>Hair</label><b>{{ model.hair }}</b></li>
            <li v-if="model.eyes"><label>Eyes</label><b>{{ model.eyes }}</b></li>
          </ul>
          <b-form-radio-group id="radios" :options="measurements" v-model="selectedMeasurement" buttons/>
          <b-nav fill class="mt-4">
            <b-nav-item class="back" @click="$router.go(-1)">
              <b-icon icon="chevron-left" font-scale="0.9"/>
            </b-nav-item>
            <b-nav-item v-if="model.instagram" :href="'https://www.instagram.com/' + model.instagram">
              <v-icon name="brands/instagram" scale="2.3"/>
            </b-nav-item>
            <b-nav-item class="print">
              <div class="print-desktop"><div class="text"/><b-icon icon="chevron-bar-down" font-scale="0.9"/></div>
              <v-icon class="print-phone" name="regular/file-pdf" scale="2"/>
            </b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="block" v-for="photo in model.photos" :key="photo">
        <img :src="photo">
      </div>
    </b-container>
  </div>
</template>

<script>
  // import VueHtml2pdf from "vue-html2pdf"
  export default {
    name: "model",
    resource: "model",
    // components: { VueHtml2pdf },
    props: ["id"],
    data: () => ({
      model: {},
      selectedMeasurement: "cm",
      measurements: [
        { text: "CM", value: "cm" },
        { text: "IN", value: "in" }
      ]
    }),
    created () { this.init() },
    computed: {
      model_height: function () {
        if (this.selectedMeasurement === "in") {
          let realFeet = this.model.height * 0.393700 / 12
          let feet = Math.floor(realFeet)
          let inches = Math.round((realFeet - feet) * 12)
          return feet + "' " + inches + "\""
        } else {
          return this.model.height
        }
      },
      model_bust: function () { return this.getInches(this.model.bust) },
      model_waist: function () { return this.getInches(this.model.waist) },
      model_hips: function () { return this.getInches(this.model.hips) }
    },
    methods: {
      async init() {
        await this.$store.dispatch("models/getModels")
        this.model = await this.$store.getters["models/MODEL"](this.id)
      },
      getInches(value) {
        if (this.selectedMeasurement === "in") {
          return Math.round(value * 0.393700) + "\""
        } else {
          return value
        }
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

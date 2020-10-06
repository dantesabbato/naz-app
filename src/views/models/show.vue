<template>
  <div id="model" class="fade-in">
    <b-modal id="show-image" modal-class="modal" size="xl" hide-footer hide-header>
      <b-img :src="selectedImageURL"/>
    </b-modal>

    <b-container>
      <div class="block">
        <div class="info">
          <p>{{ model.name }}</p>
          <ul>
            <li v-if="model.height"><label>Height</label><b>{{ model.height }}</b></li>
            <li v-if="model.bust"><label>Bust</label><b>{{ model.bust }}</b></li>
            <li v-if="model.waist"><label>Waist</label><b>{{ model.waist }}</b></li>
            <li v-if="model.hips"><label>Hips</label><b>{{ model.hips }}</b></li>
            <li v-if="model.shoe"><label>Shoe</label><b>{{ model.shoe }}</b></li>
            <li v-if="model.hair"><label>Hair</label><b>{{ model.hair }}</b></li>
            <li v-if="model.eyes"><label>Eyes</label><b>{{ model.eyes }}</b></li>
          </ul>
          <a class="back" @click="$router.go(-1)"><v-icon name="chevron-left" scale="2"/></a>
          <v-icon v-if="model.instagram" name="brands/instagram" scale="2"/>
          <a class="print"><v-icon name="file-pdf" scale="2"/></a>
        </div>
      </div>

      <div class="block" v-for="photo in model.photos" :key="photo">
        <img :src="photo" v-b-modal.show-image @click="passImageURL(photo)">
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "model",
    resource: "model",
    props: ["id"],
    data: () => ({ model: {}, selectedImageURL: "" }),
    created () { this.init() },
    methods: {
      async init() {
        await this.$store.dispatch("models/getModels")
        this.model = await this.$store.dispatch("models/getModel", this.id)
      },
      passImageURL(url) {
        this.selectedImageURL = url
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

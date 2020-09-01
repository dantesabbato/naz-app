<template>
  <div id="model" class="fade-in">
    <b-modal id="show-image" modal-class="show-image-modal" size="xl" hide-footer hide-header>
      <b-img :src="selectedImageURL"/>
    </b-modal>

    <b-container>
      <a @click="$router.go(-1)"><v-icon name="chevron-left" scale="2"/></a>
      <b-row class="mt-4 mb-5">
        <b-col sm>

          <div v-for="photo in photo_urls" :key="photo">
            <img :src="photo" v-b-modal.show-image @click="passImageURL(photo)">
          </div>

          <img :src="model.preview_path" v-b-modal.show-image @click="passImageURL(model.preview_path)">

        </b-col>
        <b-col sm align-self="center">
          <content>
            <p>{{ model.name }}</p>
            <ul>
              <li v-if="model.height"><label>Height</label><div>{{ model.height }}</div></li>
              <li v-if="model.bust"><label>Bust</label><div>{{ model.bust }}</div></li>
              <li v-if="model.waist"><label>Waist</label><div>{{ model.waist }}</div></li>
              <li v-if="model.hips"><label>Hips</label><div>{{ model.hips }}</div></li>
              <li v-if="model.shoe"><label>Shoe</label><div>{{ model.shoe }}</div></li>
              <li v-if="model.hair"><label>Hair</label><div>{{ model.hair }}</div></li>
              <li v-if="model.eyes"><label>Eyes</label><div>{{ model.eyes }}</div></li>
            </ul>
          </content>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "model",
    resource: "model",
    props: ["id"],
    data: () => ({ model: {}, photo_urls: [], selectedImageURL: "" }),
    created () { this.init() },
    methods: {
      async init() {
        await this.$store.dispatch("models/getModels")
        await this.$store.dispatch("photos/getPhotos")
        this.model = await this.$store.dispatch("models/getModel", this.id)
        this.photo_urls = await this.$store.dispatch("photos/getPhotosByModel", this.id)
      },
      passImageURL(url) {
        this.selectedImageURL = url
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

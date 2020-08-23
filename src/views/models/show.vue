<template>
  <div id="model" class="fade-in">
    <b-container>
      <a @click="$router.go(-1)"><v-icon name="chevron-left" scale="2"/></a>
      <b-row class="mt-4 mb-5">
        <b-col sm>
          <img :src="model.preview_path">
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
    data: () => ({ model: {} }),
    created () { this.init() },
    methods: {
      async init() {
        await this.$store.dispatch("models/getModels")
        this.model = await this.$store.dispatch("models/getModel", this.id)
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>

<template>
  <div id="model">
    <b-container>
      <a @click="$router.go(-1)"><v-icon name="chevron-left" scale="2"/></a>
      <b-row class="mt-4 mb-5">
        <b-col sm>
          <img :src="selectedModel.preview_path">
        </b-col>
        <b-col sm align-self="center">
          <content>
            <p>{{ selectedModel.name }}</p>
            <ul>
              <li v-if="selectedModel.height"><label>Height</label><div>{{ selectedModel.height }}</div></li>
              <li v-if="selectedModel.bust"><label>Bust</label><div>{{ selectedModel.bust }}</div></li>
              <li v-if="selectedModel.waist"><label>Waist</label><div>{{ selectedModel.waist }}</div></li>
              <li v-if="selectedModel.hips"><label>Hips</label><div>{{ selectedModel.hips }}</div></li>
              <li v-if="selectedModel.shoe"><label>Shoe</label><div>{{ selectedModel.shoe }}</div></li>
              <li v-if="selectedModel.hair"><label>Hair</label><div>{{ selectedModel.hair }}</div></li>
              <li v-if="selectedModel.eyes"><label>Eyes</label><div>{{ selectedModel.eyes }}</div></li>
            </ul>
          </content>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "model",
    resource: "Model",
    props: ["id"],
    created () { this.getModel(this.id) },
    computed: mapState(["selectedModel"]),
    methods: {
      getModel(id) {
        this.model = this.$store.dispatch('getModel', id)
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>
